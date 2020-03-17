import React from './node_modules/react'
import "./index.css"

export default function ThreeLayout(props) {
    const defaultProps = {
        minWidth : 800,
    }
    const datas = Object.assign({},defaultProps, props);
    
    return (
        <div className="twolayout" style={{minWidth : datas.minWidth}}>
            <div className="left" style={{width : datas.leftWidth}}>
                {props.LeftComtaner}
            </div>
            <div className='right' style={{width : datas.rightWidth}}>
                {props.RightComtaner}
            </div>
        </div>
    )
}
