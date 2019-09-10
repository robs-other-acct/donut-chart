export const generateTransactionObjectFromRoundedData = function(state, idealState, categories){
    let result = [];
    let desiredChangeByCat = {};
    let desiredChangeByAmt = {};
    let desiredChange;
    let exactCanceller;
    let exactCancellers;
    Array.prototype.without = function(el){
        let idx = this.indexOf(el);
        return this.slice(0, idx).concat(this.slice(idx+1));
    }
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
                desiredChangeByAmt[desiredChange]=desiredChangeByAmt[desiredChange].without(cat);
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
                 desiredChange = desiredChangeByCat[cat];
                for (let j=i+1; j< categories.length; j++){
                    let cat2 = categories[j];
                    let desiredChange2 = desiredChangeByCat[cat2];
                    let desiredChange3 = -desiredChange - desiredChange2;
                    if (!desiredChangeByAmt[desiredChange3]) continue;
                    let cat3 = desiredChangeByAmt[desiredChange3].find(c=>![cat, cat2].includes(c));
                    if (!cat3) continue;
                    let product = desiredChange *desiredChange2 * desiredChange3;
                    let cats = [cat, cat2, cat3];
                    let oddCatOut = cats.find(
                        c => desiredChangeByCat[c] * product > 0);
                    let oddChangeOut = desiredChangeByCat[oddCatOut];
                    let sameSideCats = cats.filter(c=> c !==oddCatOut);
                    if (oddChangeOut < 0){
                        sameSideCats.forEach(ssc => result.push([oddCatOut, ssc, desiredChangeByCat[ssc]]));
                    }
                    else {
                        sameSideCats.forEach(ssc => result.push([ ssc, oddCatOut, -desiredChangeByCat[ssc]]));
                    }
                    cats.forEach(c=> {
                        let priorSibs = desiredChangeByAmt[desiredChangeByCat[c]];
                        let cIdx = priorSibs.indexOf(c);
                        desiredChangeByAmt[desiredChangeByCat[c]] = 
                        priorSibs.slice(0,cIdx).concat(priorSibs.slice(cIdx+1));
                        desiredChangeByCat[c] = 0;
                    })
                    break;
                }
            }
        
    
        for(let i=0; i<categories.length; i++){
            let cat = categories[i];
            if(desiredChangeByCat[cat]) {
                desiredChangeByAmt[desiredChangeByCat[cat]]=
                desiredChangeByAmt[desiredChangeByCat[cat]].without(cat);}
            while(desiredChangeByCat[categories[i]]){
                cat = categories[i];
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
            if(newDesiredChangeForAntiCat) {
            let exactCancellersForAntiCat = desiredChangeByAmt[-newDesiredChangeForAntiCat];
            if (exactCancellersForAntiCat && exactCancellersForAntiCat.length){
                desiredChangeByAmt[newDesiredChangeForAntiCat]=
                desiredChangeByAmt[newDesiredChangeForAntiCat].without(antiCat);
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
             cat = [cat, antiCat].find(c => desiredChangeByCat[c] !==0); //run linear lookup on the survivor:
             desiredChange = desiredChangeByCat[cat];
             if(cat){
            for (let j=0; j< categories.length; j++){
                    
                    let cat2 = categories[j];
                    if(cat2 === cat || !desiredChangeByCat[cat2]) continue;
                    let desiredChange2 = desiredChangeByCat[cat2];
                    let desiredChange3 = -desiredChange - desiredChange2;
                    if (!desiredChange3 || !desiredChangeByAmt[desiredChange3]) continue;
                    let cat3 = desiredChangeByAmt[desiredChange3].find(c=>![cat, cat2].includes(c));
                    if (!cat3) continue;
                    let product = desiredChange *desiredChange2 * desiredChange3;
                    let cats = [cat, cat2, cat3];
                    let oddCatOut = cats.find(
                        c => desiredChangeByCat[c] * product > 0);
                    let oddChangeOut = desiredChangeByCat[oddCatOut];
                    let sameSideCats = cats.filter(c=> c !==oddCatOut);
                    if (oddChangeOut < 0){
                        
                        sameSideCats.forEach(ssc => {
                            result.push([oddCatOut, ssc, desiredChangeByCat[ssc]]);
                        });
                        
                    }
                    else {
                        sameSideCats.forEach(ssc => 
                            {result.push([ ssc, oddCatOut, -desiredChangeByCat[ssc]])                               
                            });
                    }
                    cats.forEach(c=> {
                        if(c !== categories[i]){
                        let priorSibs = desiredChangeByAmt[desiredChangeByCat[c]];
                        let cIdx = priorSibs.indexOf(c);
                        desiredChangeByAmt[desiredChangeByCat[c]] = 
                        priorSibs.slice(0,cIdx).concat(priorSibs.slice(cIdx+1));
                    }
                    desiredChangeByCat[c] = 0;
                    })
                    break;
                }
             }
                
        }
        }
        return result;
}


export const generateTransactionObject = function(state, idealStateInPercentage, categories, roundingPercentage){
let roundedState = {};
let roundedIdealState = {};
let total = 0;
categories.forEach(cat => {total += state[cat] || 0});
total = parseInt(total);
categories.forEach(cat => 
    {roundedState[cat]= Math.round(state[cat] * 100/(total*roundingPercentage))
    roundedIdealState[cat] = Math.round(idealStateInPercentage[cat] /roundingPercentage)});

    let transactionsInPercentages = generateTransactionObjectFromRoundedData(
        roundedState, 
        roundedIdealState,
        categories);
    let transactionsBySource = {};
    let transactionsInDollars = transactionsInPercentages.map(
        t => {
            let newTransaction = [t[0], t[1], Math.round(t[2] * roundingPercentage*total)/100];
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

export const generateTransactionChoices = function(state, idealStateInPercentage, categories, roundingPercentageUpperBound=5, numSteps=30){
    let roundingPercentage; let stepSize = (roundingPercentageUpperBound - .1)/(numSteps-1)
    let results = [generateTransactionObject(state, idealStateInPercentage, categories, .1)];
    let minNumberOfTransactions = results[0].length;
    categories = categories.slice();
    for (let i=1; i<numSteps; i++){
        for(let j=0; j<8; j++){
            categories.sort(()=>Math.random()-.5);
            roundingPercentage = .1 + i*stepSize;
        let newTransactionObject = generateTransactionObject(state, idealStateInPercentage, categories, roundingPercentage);
        if (newTransactionObject.length < minNumberOfTransactions){
            minNumberOfTransactions = newTransactionObject.length;
            // console.log(`roundingPercentage: ${roundingPercentage.toFixed(2)}, numTranscs: ${minNumberOfTransactions}`);
            // console.log(`categories: ${categories}`)
            results.push(newTransactionObject);
        }
    }
}
    return results;
}


// let categories = 'abcdef'.split('');
// const obj1={d: 55, e: 60, f: 44}
// let example;

//     example = generateTransactionChoices(
// obj1, {a:30, b: 30, c: 20, d: 20}, categories)
// categories =  'fcbdae'.split('');
// subexample=generateTransactionObject(
//     obj1, {a:30, b:30, c: 20, d: 20}, categories, 2.803
// )
// console.log(subexample);

// console.log(example);
// let total = 0;
// Object.values(obj1).forEach(val => {total += val})
// subexample.forEach(t => {obj1[t[0]] -= t[2];
// obj1[t[1]]+=t[2];})
// const finalPercents=categories.map(cat=>100* obj1[cat]/total)
// console.log(total);
// console.log(`finalPercents: ${finalPercents}`)



