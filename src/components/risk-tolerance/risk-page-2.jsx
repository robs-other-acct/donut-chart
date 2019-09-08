import React from 'react';
import categories from '../../objects/categories';
import '../../App.css';
class RiskPage2 extends React.Component{
    constructor(props){
        super(props);
    }

    inputHandler(e, cat){
        this.setState({[cat]: e.target.value})
    }
    render(){
        return (<div className = 'page'>
            <div className = 'page-content'>
            Please enter your current investment portfolio, in dollars.
                        <table className='assets-container'>
                <tbody>
                {categories.map(cat=>
                <tr key={cat}>
                   <td className='asset-label'>{cat}:</td>
                   <td><input
                   onChange={e => this.inputHandler(e, cat)}></input></td> 
                 </tr>
                )}
                </tbody>
                   </table>
            </div>
        </div>)
    }
}

export default RiskPage2;