import React from 'react';

export default class changeClick extends React.Component{

    state = {
        number : 10
    }
    // 没绑定this
    TickClick(){
        console.log(this); // undefined
        console.log("开始倒计时！")    
    }
    // 使用箭头函数绑定this
    over = () =>{
        console.log(this);  // changeClick
    }
    // 用bind绑定this
    out(){
        console.log('out',this)  // changeClick
    }
    constructor(props){
        super(props);
        this.timer = setInterval(() => {
            this.setState({
                number : this.state.number -1
            })
            if(this.state.number === 0){
                clearInterval(this.timer)
            }
        }, 1000);
        
    }

    render(){
        let StringName = '正在倒计时！';
        if(this.state.number === 0){
            StringName = "倒计时结束！";
        }
        return (
            <div>
                <button onClick={this.TickClick} onMouseOver={this.over} onMouseOut={this.out.bind(this)}>开始倒计时</button>
                <h1>倒计时：{this.state.number}</h1>
                <h3>{ StringName }</h3>
            </div>
        )
    }
}