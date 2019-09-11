import React from 'react';
import RiskPage1 from './risk-page-1';
import RiskPage2 from './risk-page-2';
class RiskTolerance extends React.Component{
    constructor(props){
        super(props);
        this.state = {pageNumber: 1
        }
        this.nextPage = this.nextPage.bind(this);
        this.setRiskTolerance = this.setRiskTolerance.bind(this);
    }
    nextPage(){
        this.setState({pageNumber: this.state.pageNumber + 1})
    }
    setRiskTolerance(value){
        this.setState({riskTolerance: value});
    }
    render(){
        let page =null;
        if(this.state.pageNumber === 1) {
            page = <RiskPage1 nextPage={this.nextPage}
            setRiskTolerance = {this.setRiskTolerance}/>;}
        else if(this.state.pageNumber === 2) {
            page = <RiskPage2 riskTolerance={this.state.riskTolerance}/>;}
        return <div> {page}
         
        </div>
    }
}

export default RiskTolerance;
