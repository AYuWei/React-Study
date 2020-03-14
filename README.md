### 组件状态

组件状态：组件可以自行维护数据。

组件状态仅在类组件中有效。

状态（state）, 本质上是类组件的一个属性，是一个对象。

**状态初始化**
> 在构造函数中初始化，或者在类中直接初始化
```js
state = {},
// 或者
constructor(props){
  super(props);
  this.state = {

  }
}
```

**状态的变化**

不能直接改变状态：因为React无法监控到状态发生了变化。

必须使用`this.setState({})`改变状态

一旦调用了`this.setState`会导致当前组件重新渲染。

**组件中的数据**

1. props:该数据是由组件的使用者传递的数据，所有权不数据组件本省，因此组件无法改变该数据。

2. state: 该数据是有组件自身创建的，所有权属于组件自身，因此组件有权改变该数据。

> 组件中传递过来的数据我们值改不了的，给冻住了的Object.freeze(obj)

> 则我们需要再组件内拥有该数据，且可以改动的，我们需要再组件状态中设置。

-----------------------------------

index.js
```js
import React from "react";
import ReactDOM from "react-dom";
import Tick from "./components/Tick.js"

var number = 10;

// 以前的计时器：但是不合理，这应该是计时器里面做的，不应该父级做，则只能使用组件状态。

// const timer = setInterval(() => {
//     number -= 1;
//     ReactDOM.render((
//         <Tick number={ number }/>
//     ), document.getElementById('root'));  
//     if(number <= 0){
//         clearInterval(timer)
//     }  
// }, 1000)

ReactDOM.render((
    <Tick number="10"/>
), document.getElementById('root'));

```

------------------------------------

Tick.js

设置组件状态时候可以在constructor中书写state,或者在对象组件中直接书写。

```js
import React from "react";

export default class Tick extends React.Component{

     state = {
        number : this.props.number
    }

    constructor(props){
        super(props);

        // this.state = {
        //     number : this.props.number
        // }

        this.timer = setInterval(()=>{
            this.setState({
                number : this.state.number - 1
            })
            if(this.state.number <= 0){
                clearInterval(this.timer)
            }
        }, 1000)
    }

    render(){
        return (
            <h2>计时器：{this.state.number}</h2>
        )
    }
}
```