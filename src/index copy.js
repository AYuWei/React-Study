import React from "react";
import ReactDOM from "react-dom";

function changeClickButton(){
    console.log('Button被点击了！');
}
function changeClickH1(){
    console.log("H1被点击了！")
}

ReactDOM.render(( <>
        <button onClick={changeClickButton}>点击</button>
        <h1 onClick={changeClickH1}>点击我是H1</h1>
    </> ), document.getElementById('root'))