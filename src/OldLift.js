import React, { Component } from 'react'
import LiftTest from "./OldLiftTest.js"
export default class OldLift extends Component{
    state = {
        n : 0,
        isShow : true
    }
    //  1. 初始化属性和状态
    constructor(props){
        super(props);
        console.log("constructor", '初始化状态和属性！')
    }

    // 2.组件即将挂载到页面。
    componentWillMount(){
        console.log("componentWillMount","组件即将挂载到页面")
    }

    // 4. 虚拟DOM已挂载到页面成为真实DOM
    componentDidMount(){
        console.log("componentDidMount","组件已经挂载完成！")
        // this.setState((res) =>({
        //     n : res.n + 1
        // }))
    } 

    // 5. 不推荐使用，接收到新的属性值
    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps", "接收到新的属性值", this.props, nextProps);
    }

    // 6. 是否应该重新渲染组件，性能优化点
    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate", "是否应该重新渲染", this.props, nextProps, this.state, nextState)
        // if (this.props.n === nextProps.n && this.state.n === nextState.n) {
        //     return false;
        // }
        return true;
    }

    // 7. 即将重新渲染组件
    componentWillUpdate(nextProps, nextState) {
        console.log("componentWillUpdate", "组件即将被重新渲染");
    }
    // 9
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate", "组件已完成重新渲染", prevProps, prevState);
    }

    // 10 组件即将被销毁
    componentWillUnmount(){
        console.log("componentWillUnmount","组件被销毁")
    }

    changeN = () => {
        this.setState(res => ({
            n : res.n + 1
        }))
    }
    

    // 3. 组件渲染虚拟dom
    render(){
        console.log("render:", this.state.n)
        var IsShowDom = this.state.isShow ? <LiftTest num={this.state.n}/> : null;
        return  ( <div>
                 <h2>当前数据N：{this.state.n}</h2>
                 <button onClick={this.changeN}>N + 1</button>
                 { IsShowDom }
                 <button onClick={()=>{
                     this.setState({
                         isShow : !this.state.isShow
                     })
                 }}>销毁</button>
            </div>)
    }
}