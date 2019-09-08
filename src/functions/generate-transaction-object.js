const generateTransactionObject = function(state, idealState, categories){
        let result = [];
        let numberOfResolvedCategories = 0;
        let desiredChangeByCat = {};
        let desiredChangeByAmt = {};
        while (numberOfResolvedCategories < categories.length){
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
                numberOfResolvedCategories ++;
                let positiveDesiredChange = Object.keys(desiredChangeByAmt).find(change => change >0);
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
                
            }
        }
        console.log(numberOfResolvedCategories);

    }
    return result;

}

// export default generateTransactionObject;

const categories = 'abcde'.split('');
console.log(generateTransactionObject({a: 2, b: 3, c: 3, e: 2}, {b: 4, c: 5, d: 1}, categories));