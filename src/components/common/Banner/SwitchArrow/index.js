import React from 'react'
import "./index.css"
import PropTypes from "prop-types"

export default function SwitchArrow(props) {
    return (
        <div className="arrow">
            <span className="arrowLeft item" onClick={()=>{
                props.onChange && props.onChange("left")
            }}>&lt;</span>
            <span className="arrowRight item" onClick={()=>{
                props.onChange && props.onChange("right")
            }}>&gt;</span>
        </div>
    )
}

SwitchArrow.defaultpropTypes = {
    onChange : PropTypes.func
}
