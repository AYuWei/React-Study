import React from 'react'
import "./index.css"
import PropTypes from "prop-types"
export default function TwoLayout(props) {
    return (
        <div className="twolayout" style={{minWidth : props.minWidth}}>
            <div className="left" style={{width : props.leftWidth}}>
                {props.LeftComtaner}
            </div>
            <div className='right' style={{width : props.rightWidth}}>
                {props.RightComtaner}
            </div>
        </div>
    )
}

TwoLayout.defaultProps = {
    minWidth : 800,
 }
 TwoLayout.propTypes = {
    LeftComtaner : PropTypes.node,
    RightComtaner : PropTypes.node,
 }