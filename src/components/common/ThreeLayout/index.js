import React from './node_modules/react'
import "./ThreeLayout.css"

export default function ThreeLayout(props) {
    const defaultProps = {
        minWidth : 800,
        leftWidth : 200,
        rightWidth : 200,
    }
    const datas = Object.assign({},defaultProps, props);
    
    return (
        <div className="threelayout" style={{minWidth : datas.minWidth}}>
            <div className="main">
                {props.children}
            </div>
            <div className="left" style={{width : datas.leftWidth}}>
                {props.LeftComtaner}
            </div>
            <div className='right' style={{width : datas.rightWidth}}>
                {props.RightComtaner}
            </div>
        </div>
    )
}
