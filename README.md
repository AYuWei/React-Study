### ref转发

forwardRef方法

1. 参数，传递的是函数组件，不能是类组件，并且，函数组件需要有第二个参参数来得到ref。

2. 返回值，返回一个新的组件。

就像高阶组件一样返回一个新函数


-------------------------------------------------------------

```js
import React, { Component } from 'react'

function A(props,ref){
    return <h1 ref={ref}>我是A组件 ---> 姓名：{ props.name }</h1>
}

const NewA = React.forwardRef(A);

export default class App extends Component {
    state = {
        name : "宇威"
    }
    componentDidMount(){
        console.log(this.ARef.current); // 获取的值h1
    }
    ARef = React.createRef();
    render() {
        return (
           <>
              <h2>我是父组件</h2>
              <NewA ref={this.ARef} name={this.state.name}/>
           </>
        )
    }
}
```

-----------------------------------------------
传递类组件也还是可以的,只是稍微修改一下
```js
import React, { Component } from 'react'

class A extends Component{
    render(){
        console.log(this)
        return <h1 ref={this.props.refs}>我是A组件 ---> 姓名：{ this.props.name }</h1>
    }
}

const NewA = React.forwardRef((props, ref) => {
    return <A refs={ref} {...props}></A>
});

export default class App extends Component {
    state = {
        name : "宇威"
    }
    componentDidMount(){
        console.log(this.ARef.current); // 获取的值h1
    }
    ARef = React.createRef();
    render() {
        return (
           <>
              <h2>我是父组件</h2>
              <NewA ref={this.ARef} name={this.state.name}/>
           </>
        )
    }
}

```