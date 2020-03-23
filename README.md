###  错误边界

默认情况下,若一个组件在**渲染期间**（render）发生了错误，会导致整个组件树全部被卸载。

错误边界：是一个组件，该组件会捕获到渲染期间（render）子组件发生的错误，并有能力组织错误继续传播。

**让某个组件捕获错误**

1. 编写生命周期函数：getDerivedStateFromError
    - 静态函数
    - 运行时间点：渲染子组件的过程中，发生错误之后，在更新页面之前。
    - 该函数会返回一个对象，**React会将该对象的属性覆盖掉当前组件的state**。
    - 参数：错误对象
    - 通常，该函数用于改变状态

2. 编写生命周期函数componentDidCatch
    - 实例方法
    - 运行时间节点：渲染子组件的过程中，发生错误，更新页面之后，由于其运行时间点比较后，因此不会在函数中改变状态值。
    - 通常，该函数用于记录错误信息

**细节**

某些错误，错误边界组件无法捕获
    
- 自身的错误。
- 异步的错误。
- 事件的中的错误。

总结：仅处理渲染子组件期间的异步错误。

-------------------------
正常结构
```js
import React, { PureComponent } from 'react'
import Error from "./index"

function ComA(){
    return (<>
        <h3>我是ComA组件！</h3>
        <ComB />
    </>)
}
class ComB extends PureComponent{
    render(){
        return (<>
            <h4>我是ComB组件！</h4>
        </>)
    }
}

export default class Test extends PureComponent {
    render() {
        return (
            <div>
                <ComA />
            </div>
        )
    }
}

```

制造错误,则会导致整个组件树崩溃，因为处理不了，则下面我用使用边界处理。

```js
import React, { PureComponent } from 'react'
import Error from "./index"

function ComA(){
    return (<>
        <h3>我是ComA组件！</h3>
        <ComB />
    </>)
}
function getData(){
    return ;
}
class ComB extends PureComponent{
    render(){
        const data = this.getData().map(ele => <span key={ele}>{ele}</span>)
        return (<>
            <h4>我是ComB组件！</h4>
        </>)
    }
}

export default class Test extends PureComponent {
    render() {
        return (
            <div>
                <ComA />
            </div>
        )
    }
}

```

index.js 错误处理
```js
import React, { Component } from 'react'

export default class Error extends Component {
    state = {
        handerError : false,
    }
    static getDerivedStateFromError(err){
        console.log('发生了错误',err)
        return {
            handerError : true,
        }
    }
     componentDidCatch(err,info ){
        console.log("记录错误信息。")
    }
    render() {
        return (
            <>
                { this.state.handerError ? <p>艾若伟，发生错误了！</p> : this.props.children}
            </>
        )
    }
}

```

test使用
```js
import React, { PureComponent } from 'react'
import ErrorBound from "./index"

function ComA(){
    return (<>
        <h3>我是ComA组件！</h3>
        <ErrorBound>
            <ComB/>
        </ErrorBound>
    </>)
}
function getData(){
    return ;
}

class ComB extends PureComponent{
    render(){
        const data = this.getData().map(ele => <span key={ele}>{ele}</span>)
        return (<>
            <h4>我是ComB组件！</h4>
        </>)
    }
}

export default class Test extends PureComponent {
    render() {
        return (
            <div>
                <ComA />
            </div>
        )
    }
}

```