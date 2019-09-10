import React from 'react';

class LinearSelector extends React.Component{
    constructor(props){
        super(props);
        this.state={selectedNotchIdx: props.default,
        notchSeparation: 100}
        this.setSelectedIdx = this.setSelectedIdx.bind(this);
    }
    renderNotch(idx){
            return <span className='vert'></span>
    }
    setSelectedIdx(idx){
        this.setState({selectedNotchIdx: idx});
        this.props.selectionFunction(idx);
    }
    componentDidUpdate(prevProps){
        if(prevProps.dummyIdx !== this.props.dummyIdx){
            this.setState({selectedNotchIdx: this.props.default});
        }
    }
    render(){
        const {numBuckets, leftText, rightText} = this.props;
        const middleBuckets = new Array(numBuckets-2).fill('1');
        return(
            <div>
            <div className='widget-left-text'>{leftText}</div> 

            <div className='line-selector'>
            <svg height="20" width="20" className = 'polygon-pointer'
            style={{left: `${100*this.state.selectedNotchIdx}px`}}>
                <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style={{stopColor:'rgb(200,200,200)', stopOpacity:1}} />
      <stop offset="100%" style={{stopColor:'rgb(255,255,255)', stopOpacity:1}} />
    </linearGradient>
  </defs>
  <polygon points="0,0 16,0 16,12 8,20 0,12" style={{fill:'url(#grad1)', stroke: 'rgb(150,150,150)', strokeWidth:1}} />
            </svg>
                <span className = 'left-bucket'
                onClick={()=>this.setSelectedIdx(0)}>
                {this.renderNotch(0)}
                </span>
                {middleBuckets.map((_, idx) => <span className='bucket'
                onClick={()=>this.setSelectedIdx(idx+1)}>
                    {this.renderNotch(idx+1)}
                    </span>)}
                <span className='right-bucket'
                onClick={()=>this.setSelectedIdx(this.props.numBuckets-1)}>
                {this.renderNotch(this.props.numBuckets-1)}
                </span>
            </div>
            
            <div className='widget-right-text'>{rightText}</div>
            
            </div>
        )
    }
}

export default LinearSelector;