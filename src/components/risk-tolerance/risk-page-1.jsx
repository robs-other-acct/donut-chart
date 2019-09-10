import React from 'react';
import 'react-widgets/dist/css/react-widgets.css';
import '../../App.css';
import simpleNumberLocalizer from 'react-widgets-simple-number';
import Portfolios from '../../objects/portfolios';
import NumberPicker from 'react-widgets/lib/NumberPicker'
import DonutChart from 'react-donut-chart';
simpleNumberLocalizer();

class RiskPage1 extends React.Component{
    constructor(props){
        super(props);
        this.numberChange = this.numberChange.bind(this);
        this.state = {pageNumber: 1};
        }

    numberChange(value){
        if(this.intervalId){clearTimeout(this.intervalId);}
        this.intervalId = setTimeout(
            () => this.setState({riskTolerance: value}), 500);
        this.props.setRiskTolerance(value);
    }
    renderRecommendation(){
        const riskTolerance = this.state.riskTolerance;
        const portfolio = Portfolios[riskTolerance];
        if(!portfolio)return null;
        const data = Object.keys(portfolio).map(
            key => ({label: key, value: portfolio[key]})
        )
        return (
        <div className='portfolio-recommend'>
            <div>Thank you! At a risk tolerance level of {riskTolerance},
                we recommend: </div>
              <div className='donutchart-container'>
                <DonutChart className='donut-chart'
                    data={data} formatValues={el => el+"%"}
                    />
            </div>

                    <div>
                    <span
                    style={{marginRight: '15px'}}>Next, we'll suggest  
            a series of asset transfers to achieve this recommended portfolio.</span>
                    <button
                        onClick={
                            this.props.nextPage}>
                            Next
                    </button>
                    </div>

        </div>
        )
    }
    addPercentSigns(){
        Array.from(document.getElementsByClassName("donut-chart-legend-item-label")).forEach(
            el => 
       { if(!el.innerHTML.endsWith('%')) {el.innerHTML += "%"}});
    }
    render(){
        setTimeout(this.addPercentSigns, 0);
        return <div className = 'page'>
            <div className='centered-container' style={{maxWidth: '640px'}}>
            <div style={{marginBottom: '22px'}}>
                Over the next two pages, we'll guide you to  
                an investment portfolio that achieves a balance of 
                stability and profitability, tailored to your 
                financial situation and preferences.
            </div>
            Please select a level of risk tolerance from 1 to 10.

            <NumberPicker min = {1} max ={10} className='number-picker'
            onChange = {this.numberChange}/>

            <div>
                {this.renderRecommendation()}
            </div>
            </div>
            </div>

       
    }
}

export default RiskPage1;