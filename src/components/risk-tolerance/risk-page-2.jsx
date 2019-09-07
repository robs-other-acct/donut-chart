import React from 'react';
import categories from '../../objects/categories';
import '../../App.css';
class RiskPage2 extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (<div className = 'page'>{`Risk Page 2: Your risk tolerance is ${this.props.riskTolerance}`}
            <div className='assets-input-grid'>
            <div>
                {categories.map(cat=>
                   <div className='asset-label'> 
                   {cat}: </div>)}
            </div>
            <div>
                {categories.map(cat=>
                <div><input></input></div>)}
            </div>
            </div>
        </div>)
    }
}

export default RiskPage2;