const generateTransactionObjectFromRoundedData = function(state, idealState, categories){
    let result = [];
    let desiredChangeByCat = {};
    let desiredChangeByAmt = {};
    let desiredChange;
    let exactCanceller;
    let exactCancellers;
        for(let i=categories.length - 1; i>=0; i--){
            let cat = categories[i];      
            desiredChangeByCat[cat]=(idealState[cat] || 0)-(state[cat] || 0); 
            desiredChange = desiredChangeByCat[cat];
            if( desiredChange !== 0){
                let siblingCats = desiredChangeByAmt[desiredChange];
                desiredChangeByAmt[desiredChange] = siblingCats ? siblingCats.concat([cat]) : [cat];
            }   
        }
        for(let i=0; i<categories.length; i++){
            let cat = categories[i];
             desiredChange = desiredChangeByCat[cat];
            if(!desiredChange) continue;
            exactCancellers = desiredChangeByAmt[-desiredChange];
            if (exactCancellers && exactCancellers.length){
                desiredChangeByAmt[desiredChange].pop();
                exactCanceller = exactCancellers.pop();
                result.push(
                desiredChange<0 ? [cat, exactCanceller, -desiredChange] : [exactCanceller, cat, desiredChange]
                );
                desiredChangeByCat[cat] = 0;
                desiredChangeByCat[exactCanceller] = 0;
            }
        }
    
        for(let i=0; i<categories.length; i++){
            let cat = categories[i];
            desiredChangeByAmt[desiredChangeByCat[cat]].pop();
            while(desiredChangeByCat[cat]){
             desiredChange = desiredChangeByCat[cat];  
             let desiredChangeWithOppositeSign;
             if(desiredChangeByAmt[-desiredChange] && desiredChangeByAmt[-desiredChange].length){
                desiredChangeWithOppositeSign = -desiredChange;
             }
             else{
             desiredChangeWithOppositeSign = Object.keys(desiredChangeByAmt).find(
                change => change *desiredChange<0 && desiredChangeByAmt[change].length
                );
            }
            if (desiredChangeWithOppositeSign === undefined){return result;}
            let antiCat = desiredChangeByAmt[desiredChangeWithOppositeSign].pop();
            let transferAmt = Math.min(Math.abs(desiredChangeByCat[antiCat]), Math.abs(desiredChange));
            transferAmt = desiredChange < 0 ? transferAmt : -transferAmt;
            result.push(transferAmt>0? [cat, antiCat, transferAmt] : [antiCat, cat, -transferAmt]);
            desiredChangeByCat[cat] += transferAmt;
            desiredChangeByCat[antiCat] -=transferAmt;                       
            let newDesiredChangeForAntiCat = desiredChangeWithOppositeSign - transferAmt;
            let newSiblingCats = desiredChangeByAmt[newDesiredChangeForAntiCat];
            desiredChangeByAmt[newDesiredChangeForAntiCat] = newSiblingCats 
                ? 
            newSiblingCats.concat(antiCat) 
                : 
            [antiCat];
            if(!newDesiredChangeForAntiCat) continue;
            let exactCancellersForAntiCat = desiredChangeByAmt[-newDesiredChangeForAntiCat];
            if (exactCancellersForAntiCat && exactCancellersForAntiCat.length){
                desiredChangeByAmt[newDesiredChangeForAntiCat].pop();
                exactCanceller = exactCancellersForAntiCat.pop();
                result.push(
                newDesiredChangeForAntiCat<0 ?
                 [antiCat, exactCanceller, -newDesiredChangeForAntiCat] 
                 : 
                 [exactCanceller, antiCat, newDesiredChangeForAntiCat]
                );
                desiredChangeByCat[antiCat] = 0;
                desiredChangeByCat[exactCanceller] = 0;
            }
        }
        }
        return result;
}


generateTransactionObject = function(state, idealStateInPercentage, categories, roundingPercentage){
let roundedState = {};
let roundedIdealState = {};
let total = 0;
categories.forEach(cat => {total += state[cat] || 0});
total = parseInt(total);
categories.forEach(cat => 
    {roundedState[cat]= Math.ceil(state[cat] * 100/(total*roundingPercentage))
    roundedIdealState[cat] = Math.floor(idealStateInPercentage[cat] /roundingPercentage)});

    let transactionsInPercentages = generateTransactionObjectFromRoundedData(
        roundedState, 
        roundedIdealState,
        categories);
    let transactionsBySource = {};
    let transactionsInDollars = transactionsInPercentages.map(
        t => {
            let newTransaction = [t[0], t[1], Math.floor(t[2] * roundingPercentage*total)/100];
            transactionsBySource[t[0]] = transactionsBySource[t[0]] || [];
            transactionsBySource[t[0]].push(newTransaction);
            return newTransaction;}
    );
    Object.keys(transactionsBySource).forEach(
        sourceCat => {
            if(!idealStateInPercentage[sourceCat]){
            let sum = 0;
            transactionsBySource[sourceCat].forEach(
                transaction => {sum += transaction[2];}
            )
            let remainder = (state[sourceCat] - sum);
            transactionsBySource[sourceCat][0][2] += remainder;
        }
    }
    )    
    return transactionsInDollars;
}

const categories = 'abcdefgh'.split('');
const obj1={a: 75, b: 100, c: 291, d: 0, e: 25, f: 38, g: 99, h: 0}
const example = generateTransactionObject(
obj1, {a:0, b: 10, c: 15, d: 40, g: 7, h: 28}, categories, 1)

console.log(example);
let total = 0;
Object.values(obj1).forEach(val => {total += val})
example.forEach(t => {obj1[t[0]] -= t[2];
obj1[t[1]]+=t[2];})
const finalPercents=categories.map(cat=>100* obj1[cat]/total)
console.log(total);
console.log(`finalPercents: ${finalPercents}`)

