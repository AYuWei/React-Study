###  Portals

插槽：将一个React元素渲染到指定的DOM容器中

ReactDOM.createPortal(React元素，真实的DOM容器)，该函数返回一个React元素。

**注意事件冒泡**

1. React中的事件是包装过的。

2. 它的事件冒泡是根据虚拟DOM树来冒泡的，与真实的DOM树无关。

-------------------
就如插槽改变来渲染的位置，但是React树中，还是这样的层级结构的。
```js
import React, { Component } from 'react'
import ReactDOM from "react-dom"
// 组页面上还有一个id为move的div

function PorA(){
    return (<div>
        <h1>我是PorA组件</h1>
        <PorB />
    </div>)
}
function PorB(){
    return ReactDOM.createPortal(
        <div className="moudal" style={{
            position:"absolute",
            backgroundColor : "rgba(0,0,0,0.3)",
            width : "100%",
            top : '60px',
            left : "0px",
    
            height : "100%"
        }}>
            <h1>我是PorB组件</h1>
        </div>, document.querySelector('.move')
    )
}


export default class Portals extends Component {
    render() {
        return (
            <div>
                <PorA />
            </div>
        )
    }
}

```

当点击B组件时候，点击事件也会被触发，虽然页面结构改变了，但是，react树没变。是港剧react树来冒泡的。
```js
import React, { Component } from 'react'
import ReactDOM from "react-dom"
// 组页面上还有一个id为move的div

function PorA(){
    return (<div>
        <h1>我是PorA组件</h1>
        <PorB />
    </div>)
}
function PorB(){
    return ReactDOM.createPortal(
        <div className="moudal" style={{
            position:"absolute",
            backgroundColor : "rgba(0,0,0,0.3)",
            width : "100%",
            top : '60px',
            left : "0px",
            height : "100%"
        }}>
            <h1>我是PorB组件</h1>
        </div>, document.querySelector('.move')
    )
}


export default class Portals extends Component {
    render() {
        return (
            <div  onClick={e=>{
                console.log("我被点击了", e.target)
            }}>
                <PorA />
            </div>
        )
    }
}

```