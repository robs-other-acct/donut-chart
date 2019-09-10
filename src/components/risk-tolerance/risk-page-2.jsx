import React from 'react';
import categories from '../../objects/categories';
import '../../App.css';
import Portfolios from '../../objects/portfolios';
import {generateTransactionChoices,
    generateTransactionObjectFromRoundedData,
    generateTransactionObject} from '../../functions/generate-transactions';
import LinearSelector from '../linear-selector/linear-selector';

// import simpleNumberLocalizer from 'react-widgets-simple-number';

// simpleNumberLocalizer();


class RiskPage2 extends React.Component{
    constructor(props){
        super(props);
        let obj = {};
        categories.forEach(cat => obj[cat]='$0.00');
        obj['idealStateInPercentage']= Portfolios[this.props.riskTolerance]
        obj.dummyIdx = 0;
        this.state =  obj;
        this.buttonClick = this.buttonClick.bind(this);
        window.getState = this.getState.bind(this);
    }
    getState(){
        return this.state;
    }
    keyDownHandler(e){
        const allowedChars = '0123456789'.split('').concat(['Backspace', 'Tab']);
        if (!allowedChars.includes(e.key)){e.preventDefault();}
    }
    inputHandler(e, cat){
        this.setState({[cat]: e.target.value})
    }
    buttonClick(){
        const state = {};
        categories.forEach(cat => state[cat] = parseFloat(this.state[cat].slice(1)));
        const transactionChoices = generateTransactionChoices(state, 
            this.state.idealStateInPercentage,
            categories);
        this.setState({transactionChoices, choiceIdx: 0,
        dummyIdx: this.state.dummyIdx + 1});
    }
    renderRecommendation(){
        let choice = this.state.transactionChoices[this.state.choiceIdx];
        return <div>
            {choice.map((t,idx) =>
                <div key={idx}>Transfer {'$'+t[2].toFixed(2)} from {t[0]} to {t[1]}</div>)
            }
            {this.state.transactionChoices.length>1 ?
                <LinearSelector numBuckets={this.state.transactionChoices.length}
                dummyIdx={this.state.dummyIdx}
                default={0}
                selectionFunction={choiceIdx=>this.setState({choiceIdx})}/>
                : null}
        </div> 
    }
    focusHandler(e){
        let val = e.target.value;
        e.target.value = val === '$0.00' ? '' : val.split('.')[0].slice(1);
    }
    render(){
        return (<div className = 'page'>
            <div className = 'page-content'>
            <span className='nowrap'>Please enter your actual current investment portfolio below.</span>
                        <table className='assets-container'>
                <tbody>
                {categories.map(cat=>
                <tr key={cat}>
                   <td className='asset-label'>{cat}:</td>
                   <td><input 
                   onFocus={e=>this.focusHandler(e)}
                   onBlur={e=> {this.setState({[cat]: '$' + e.target.value + '.00'});
                   e.target.value = '$' + e.target.value + '.00'}}
                   defaultValue = '$0.00'
                   className = "asset-input"
                   onKeyDown={this.keyDownHandler}
                   onPaste={e=>e.preventDefault()}
                   ></input></td> 
                 </tr>
                )}
                </tbody>
                   </table>
                   <button onClick={()=>setTimeout(this.buttonClick,20)}>Finished</button>
                  
                  {this.state.transactionChoices ? this.renderRecommendation() : null}
            </div>
        </div>)
    }
}

export default RiskPage2;