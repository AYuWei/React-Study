import React from "react";
import ReactDOM from "react-dom";
import MyFunction from "./myFunc_component.js";
import MyClass from "./myClass_component.js";

// const func = MyFunction({number:4}); // 传递属性
const func = <MyFunction number="3"/>
console.log(func); // type = MyFunction , Props : {number : 3}

// 或者这样执行
ReactDOM.render((
    <div>
        <MyFunction number="3"/>
        <MyFunction obj={{name : "张三", sex : 21}} number="44"/>
        <MyFunction number="3"/>
        <MyClass number={4}/>

    </div>
), document.getElementById('root'));
