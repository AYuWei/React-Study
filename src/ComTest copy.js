import React, { Component } from 'react'

export default class ComText extends Component{
    state = {
        n : 0
    }
    changeNumber(){
        this.setState({
            n : this.state.n + 1 ,
        })
        console.log(this.state.n); 
    }
    render(){
        console.log('render')
        return <>
            <h1>{this.state.n}</h1>
            <button onClick={this.changeNumber.bind(this)}>+</button>
        </>
    }
}

// 运行结构，先运行输出render 在输出数字，且数组还没改变。在html元素中，异步