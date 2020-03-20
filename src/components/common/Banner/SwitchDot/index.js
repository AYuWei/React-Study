import React from 'react'
import "./index.css"
import PropTypes from "prop-types" 

export default class SwitchDot extends React.Component{
    static defalutPropTypes={
        total : PropTypes.number.isRequired,
        curIndex : PropTypes.number.isRequired,
        onChange : PropTypes.func,
    }

    render(){
        const spans = [];
        for(let i = 0 ; i < this.props.total; i ++){
            spans.push(<span 
                    key={i}
                    className={i === this.props.curIndex ? "active" : ''}
                    onClick={()=>{
                        this.props.onChange && this.props.onChange(i)
                    }}
                ></span>)
        }
        console.log(this.props.curIndex)
        return (
            <div className="dot">
                {spans}
            </div>
        )
    }
}