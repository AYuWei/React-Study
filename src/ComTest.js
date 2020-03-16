import React, { Component } from 'react'

export default class ComText extends Component{
    state = {
        n : 0
    }
    changeNumber(){
        this.setState(cur => ({
            n : cur.n + 1
        })) 
        this.setState(cur => ({
            n : cur.n + 1
        })) 
        this.setState(cur => ({
            n : cur.n + 1
        })) 
    }
    render(){
        console.log('render')
        return <>
            <h1>{this.state.n}</h1>
            <button onClick={this.changeNumber.bind(this)}>+</button>
        </>
    }
}

// 运行结构，先运行输出render 在输出数字， 则在回调函数里面，是等更改完后在执行的。