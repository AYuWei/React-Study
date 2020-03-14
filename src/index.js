import React from "react";
import ReactDOM from "react-dom";
import Studentlist from "./components/StudentList"

async function fetchAll(){
    var stus =await fetch("http://api.duyiedu.com/api/student/findAll?appkey=15728238198_1569593310259")
                    .then(ele => ele.json())
                        .then(ele => ele.data)
    return stus;
}

const jsonlist = fetch("http://api.duyiedu.com/api/student/findAll?appkey=15728238198_1569593310259")
                    .then(ele => ele.json() )
                        .then(ele => console.log(ele));

async function render(){
    ReactDOM.render("正在加载中....", document.getElementById('root'));
    const stulist = await fetchAll();
    ReactDOM.render((<Studentlist stus={stulist}/>), document.getElementById('root'));
}
render();


