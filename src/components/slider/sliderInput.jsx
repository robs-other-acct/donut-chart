import React from 'react';

class SliderInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        selectedLevel: 5}
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.buttonClickHandler = this.buttonClickHandler.bind(this);
        let arr = new Array(9);
        arr.fill(1);
        this.arr9 = arr;
    }

    componentDidMount(){
        this.app = document.getElementById('App');

        console.log(`app null?: ${this.app === null}`)
    }

    buttonClickHandler(){
        console.log('btn click handle')
        const app = this.app;
        app.addEventListener('mousemove', this.handleMouseMove);
        app.addEventListener('mouseup', this.handleMouseUp);
    }

    handleMouseMove(e){
        const input = document.getElementById('slider-input-1');
        const btn = document.getElementById('slider-button-1')
        let x = Math.min(e.clientX - input.offsetLeft, 
         input.offsetWidth - btn.offsetWidth
          ); 
        x = Math.max(x, 0);
        this.setState({buttonPos: x, handlingMouseMove: true});
    
      }

      handleMouseUp(){
        this.app.removeEventListener('mousemove', this.handleMouseMove);
        this.app.removeEventListener('mouseup',this.handleMouseUp)
      }

    render(){
        return (<div id='slider-input-1'
        className = 'slider-input'>

            <div className = 'notch-container'> 
            {this.arr9.map((_, idx) => (<div>
                {idx === this.state.selectedLevel ? 
            <div className = 'button-container'>
                <div className = "slider-button" 
                id = "slider-button-1"
                onMouseDown = {this.buttonClickHandler}
                >btn</div>
                </div>
            : null}
            <div>|</div>
            </div>))} </div>
        </div>)
    }
}

export default SliderInput;