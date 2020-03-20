import React, { Component } from 'react'
// 我们来一个例子，就是点击鼠标聚焦状态。
export default class RefIndex extends Component {
    componentDidMount(){
        console.log(this.refs.sss); // 得到的是A组件
    }

    render() {
        return (
            <div>
               <A ref="sss" name={"中s"}></A>
            </div>
        )
    }
}

class A extends React.Component{
    render(){
        return (<h1>我是A组件....</h1>)
    }
}