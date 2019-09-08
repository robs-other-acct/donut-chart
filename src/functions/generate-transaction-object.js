const generateTransactionObjectFromRoundedData = function(state, idealState, categories){
        let result = [];
        let numberOfResolvedCategories = 0;
        let desiredChangeByCat = {};
        let desiredChangeByAmt = {};
        step=0;
        while (numberOfResolvedCategories < categories.length){
            step++;
           let  anyEffectOfFirstPass = false;
            for(let i=0; i<categories.length; i++){
                let cat = categories[i];
                if (desiredChangeByCat[cat] === undefined){
                    desiredChangeByCat[cat]=(idealState[cat] || 0)-(state[cat] || 0); 
                    if (desiredChangeByCat[cat] === 0) numberOfResolvedCategories ++;
                    if( desiredChangeByCat[cat] > 0){
                        let siblingCats = desiredChangeByAmt[desiredChangeByCat[cat]];
                        desiredChangeByAmt[desiredChangeByCat[cat]] = siblingCats 
                            ? 
                        siblingCats.concat(cat) 
                            : 
                        [cat];
                    }
                }
                let desiredChange = desiredChangeByCat[cat];
                if(desiredChange >= 0) continue;
                if (desiredChangeByAmt[-desiredChange] && 
                    desiredChangeByAmt[-desiredChange].length){
                        anyEffectOfFirstPass = true;
                        numberOfResolvedCategories += 2;
                        antiCat = desiredChangeByAmt[-desiredChange].pop();
                    result.push([cat, antiCat, -desiredChange]);
                    desiredChangeByCat[cat] = 0;
                    desiredChangeByCat[antiCat] = 0;
                }
                
            }
            if (!anyEffectOfFirstPass){
            for(let i=0; i<categories.length; i++){
                let cat = categories[i];
                let desiredChange = desiredChangeByCat[cat];
                
                if(desiredChange >=0) continue;
                let positiveDesiredChange = Object.keys(desiredChangeByAmt).find(change => change >0
                    && desiredChangeByAmt[change].length);
                if (positiveDesiredChange === undefined){return result;}
                let antiCat = desiredChangeByAmt[positiveDesiredChange].pop();
                let transferAmt = Math.min(desiredChangeByCat[antiCat],
                    -desiredChange);
                result.push([cat, antiCat, transferAmt]);
                desiredChangeByCat[cat] += transferAmt;
                let newDesiredChangeForAntiCat = positiveDesiredChange - transferAmt;
                desiredChangeByCat[antiCat] -=transferAmt;
                let newSiblingCats = desiredChangeByAmt[newDesiredChangeForAntiCat];
                desiredChangeByAmt[newDesiredChangeForAntiCat] = newSiblingCats 
                    ? 
                newSiblingCats.concat(antiCat) 
                    : 
                [antiCat];
                numberOfResolvedCategories ++;
                break;
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
            console.log(transactionsInPercentages);
        let transactionsBySource = {};
        let transactionsInDollars = transactionsInPercentages.map(
            t => {
                let newTransaction = [t[0], t[1], t[2] * roundingPercentage*total/100];
                transactionsBySource[t[0]] = transactionsBySource[t[0]] || [];
                transactionsBySource[t[0]].push(newTransaction);
                return newTransaction;}
        );
        console.log(transactionsInDollars);
        Object.keys(transactionsBySource).forEach(
            sourceCat => {
                if(idealStateInPercentage[sourceCat] === 0){
                let sum = 0;
                transactionsBySource[sourceCat].forEach(
                    transaction => {sum += transaction[2];}
                )
                let remainder = state[sourceCat] - sum;
                transactionsBySource[sourceCat][0][2] += remainder;
            }
        }
        )    
        return transactionsInDollars;
}

const categories = 'abcde'.split('');
console.log(generateTransactionObject(
    {a: 75, b: 100, c: 291, d: 0, e: 25}, {a:0, b: 40, c: 20, d: 40, e:0}, categories, .1));