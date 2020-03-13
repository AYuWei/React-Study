import React from "react";
import ReactDOM from "react-dom";
import src1 from "./assets/1.jpg";
import src2 from "./assets/2.jpg";
import src3 from "./assets/3.jpg";
import "./index.css"

const src = [src1, src2, src3];
var index = 0;
var timer;
const container = document.getElementById('root');
const start = function(){
    stop();
    timer = setInterval(() => {
        index = ( index + 1) % 3;
        const image = <img src={src[index]} alt=""/>
        ReactDOM.render(image, container);
    },2000)
}  
const stop = function(){
    clearInterval(timer);
}

container.onmouseenter = function(){
    stop();
}
container.onmouseleave = function(){
    start();
}

start();