### 事件

在React中，组件的事件，本质上就是一个属性。

按照之前React对组件的约定，由事件本质上是一个属性，因此也需要使用小驼峰命名法。

**如果没有特殊处理，在事件处理函数中，this指向undefined**是在自定义组件的时候要规定this指向。

内置组件不会有this指向问题。什么是内置组件呢？就是在组件内直接使用`<h1 onClick=""></h1>`让babel解析。

1. 使用bind函数、绑定this。

2. 使用箭头函数。

------------------------------------------------------------

**内置组件使用事件**
```js
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
```

----------------------------------------------------------
**父组件传递事件给子组件，就当做属性来用就好了。不存在this问题。**
```js
// index.js
import Change from "./components/Change.js";

function changeClick(){
    console.log("我是index.js文件")
}

ReactDOM.render(<Change onClick={changeClick}/> , document.getElementById('root'))
```
```js
// change.js
import React from 'react';

export default class changeClick extends React.Component{

    state = {
        number : 3
    }
    constructor(props){
        super(props);
        
        this.timer = setInterval(() => {
            this.setState({
                number : this.state.number -1
            })
            if(this.state.number === 0){
                clearInterval(this.timer);
                // 然后执行父级事件
                this.props.onClick();
            }
        },1000)
    }

    render(){
        console.log(this)
        return (
            <>
                <h3>计时器 { this.state.number }</h3>
                <button onClick={this.props.onClick}>按钮</button>
            </>
        )
    }
}
```

----------------------------------------------------------

**而组件内使用组件才存在this指向问题。**
```js
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
```