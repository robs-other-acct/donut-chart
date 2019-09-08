import React from 'react';
import categories from '../../objects/categories';
import '../../App.css';
import NumberPicker from 'react-widgets/lib/NumberPicker'

// import simpleNumberLocalizer from 'react-widgets-simple-number';

// simpleNumberLocalizer();


class RiskPage2 extends React.Component{
    constructor(props){
        super(props);
        let obj = {};
        categories.forEach(cat => obj[cat]='$0.00');
        this.state =  obj;
        this.buttonClick = this.buttonClick.bind(this);
    }

    componentDidMount(){
        // window.simpleNumberLocalizer = simpleNumberLocalizer;
    }

    keyDownHandler(e){
        const allowedChars = '0123456789'.split('').concat(['Backspace', 'Tab']);
        if (!allowedChars.includes(e.key)){e.preventDefault();}
    }
    inputHandler(e, cat){
        this.setState({[cat]: e.target.value})
    }
    buttonClick(){
        setTimeout(console.log(Object.values(this.state)),20);
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
                   onFocus={e=>e.target.value= e.target.value.split('.')[0].slice(1)}
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
                   <button onClick={this.buttonClick}>Finished</button>
                  
            </div>
        </div>)
    }
}

export default RiskPage2;