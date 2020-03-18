import React from 'react'
import "./ThreeLayout.css"
import PropTypes from "prop-types"

export default function ThreeLayout(props) {
    
    return (
        <div className="threelayout" style={{minWidth : props.minWidth}}>
            <div className="main">
                {props.children}
            </div>
            <div className="left" style={{width : props.leftWidth}}>
                {props.LeftComtaner}
            </div>
            <div className='right' style={{width : props.rightWidth}}>
                {props.RightComtaner}
            </div>
        </div>
    )
}
ThreeLayout.defaultProps = {
    minWidth : 800,
    leftWidth : 200,
    rightWidth : 200,
 }
 ThreeLayout.propTypes = {
     children : PropTypes.node,
 }