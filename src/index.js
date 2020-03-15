import React from "react";
import ReactDOM from "react-dom";
import PagerTest from "./components/PagerTest.js";

// var page = {
//     current : 2, // 当前页码
//     limit : 100, // 总数据条数。
//     pagelNumber : 5, //最大页码数
//     pageCapacity : 9 // 页容量
// }

// function changePage(){
//     console.log("我是父级")
// }

ReactDOM.render(<PagerTest/> , document.getElementById('root'))