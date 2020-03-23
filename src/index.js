import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js"

ReactDOM.render(<>
    <App />
</> , document.getElementById('root'))

document.getElementById('root').addEventListener('click',(e)=>{
    console.log('我是元素的click事件')
    //e.stopPropagation(); // 阻止事件冒泡，react元素的事件不会被触发
})