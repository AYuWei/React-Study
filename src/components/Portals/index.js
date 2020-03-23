import React, { Component } from 'react'
import ReactDOM from "react-dom"
// 组页面上还有一个id为move的div

function PorA(){
    return (<div>
        <h1>我是PorA组件</h1>
        <PorB />
    </div>)
}
function PorB(){
    return ReactDOM.createPortal(
        <div className="moudal" style={{
            position:"absolute",
            backgroundColor : "rgba(0,0,0,0.3)",
            width : "100%",
            top : '60px',
            left : "0px",
            height : "100%"
        }}>
            <h1>我是PorB组件</h1>
        </div>, document.querySelector('.move')
    )
}


export default class Portals extends Component {
    render() {
        return (
            <div  onClick={e=>{
                console.log("我被点击了", e.target)
            }}>
                <PorA />
            </div>
        )
    }
}
