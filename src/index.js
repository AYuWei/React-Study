import React from "react";
import ReactDOM from "react-dom";
import Tick from "./components/Tick.js"

var number = 10;

// 以前的计时器：但是不合理，这应该是计时器里面做的，不应该父级做，则只能使用组件状态。

// const timer = setInterval(() => {
//     number -= 1;
//     ReactDOM.render((
//         <Tick number={ number }/>
//     ), document.getElementById('root'));  
//     if(number <= 0){
//         clearInterval(timer)
//     }  
// }, 1000)

ReactDOM.render((
    <Tick number="10"/>
), document.getElementById('root'));
