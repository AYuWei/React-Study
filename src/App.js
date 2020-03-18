import React, { Component } from 'react'
// import Func from "./FuncDefault.js"
import ValidationComp ,{ A }from "./ValidationComp.js"

export default class App extends Component {
    state = {
        a : 1,
        b : "this is String" ,
        c : [],
        d : {},
        e : 12,
        f : false,
        j : Symbol('sdfasd'),
        h : this.handerChange,
        i : <h2>我是一个可以被渲染的React元素！</h2>,
        g : <h2>我是一个可以被渲染的React元素！</h2>,
        k : this.FuncK,
        l : (new A()),
        sex : '男',
        n : 123,
        m : [1,2,3,4],
        p : {
            "a" : 3
        },
        q : {
            name : "鱼尾",
            age : 12
        },
        score : 11
    }

    handerChange(){

    }

    FuncK(){
        return <h1>我是react元素类型</h1>
    }

    render() {
        return (
            <ValidationComp {...this.state}/>
        )
    }
}
