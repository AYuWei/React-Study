###  PureComponent

纯组件，用于避免不必要的渲染（运行render函数），从而提高效率。

优化：如果一个组件的属性和状态，都没有发生变化，重新渲染该组件是没有必要的。

PureComponent是一个组件，如果某个组件继承该组件，则该组件的shouldComponentUpdate会进行优化，对属性和状态进行浅比较，如果相等则不会重新渲染。

**注意**

1. PureComponent进行是浅比较
    1. 为了效率，应该尽量使用PureComponent
    2. 要求不要改动之前的状态，永远是创建新的状态覆盖之前的状态（Immutable,不可变对象）

2. 函数组件，使用React.memo函数制作纯组件**高阶组件**

类组件就是继承PureComponent


-----------------------------

如
ShowMousePoint.js
```js
import React, { Component } from 'react'
import "./movable.css"

export default class ShowMousePoint extends Component {
    state = {
        top : 0,
        left : 0,
    }

    divRef = React.createRef();

    handleMouseMove = e => {
       // 获取正方形的信息
       const {top, left} = this.divRef.current.getBoundingClientRect();
       const x = e.clientX - left;
       const y = e.clientY - top;
       this.setState({
           top : y - 50,
           left : x - 50,
       })
    }

    render() {
        return (
            <div ref={this.divRef} className="point" onMouseMove={this.handleMouseMove}>
               <h1>鼠标X轴：{parseInt(this.state.left)}, 鼠标Y轴{parseInt(this.state.top)}</h1>
            </div>
        )
    }
}
```

MovablePanel.js
```js
import React, { Component } from 'react'
import "./movable.css"

export default class MovablePanel extends Component {
    state = {
        top : 0,
        left : 0,
    }

    divRef = React.createRef();

    handleMouseMove = e => {
       // 获取正方形的信息
       const {top, left} = this.divRef.current.getBoundingClientRect();
       const x = e.clientX - left;
       const y = e.clientY - top;
       this.setState({
           top : y - 50,
           left : x - 50,
       })
    }

    render() {
        return (
            <div ref={this.divRef} className="point" onMouseMove={this.handleMouseMove}>
                <div className="move" style={{
                    top : this.state.top,
                    left : this.state.left,
                }}></div>
            </div>
        )
    }
}

```

Test.js
```js
import React, { Component } from 'react'
import MovablePanel from "./MovablePanel"
import ShowMousePoint from "./ShowMousePoint"

export default class Test extends Component {
    render() {
        return (
            <div>
                <MovablePanel />
                <ShowMousePoint/>
            </div>
        )
    }
}

```
----------------------------------
修改后
MouseListener.js
```js
import React, { Component } from 'react'
import "./movable.css"

export default class MouseListener extends Component {
    state = {
        top : 0,
        left : 0,
    }

    divRef = React.createRef();

    handleMouseMove = e => {
       // 获取正方形的信息
       const {top, left} = this.divRef.current.getBoundingClientRect();
       const x = e.clientX - left;
       const y = e.clientY - top;
       this.setState({
           top : y - 50,
           left : x - 50,
       })
    }

    render() {
        return (
            <div ref={this.divRef} className="point" onMouseMove={this.handleMouseMove}>
               {this.props.render(this.state)}
            </div>
        )
    }
}

```

Test.js
```js
import MouseListener from "./MouseListener";
import React from 'react'

const renderPoint = mouse => <>横坐标：{mouse.left}，纵坐标：{mouse.top}</>

const renderDiv = mouse => <>
    <div style={{
        width: 100,
        height: 100,
        background: "#008c8c",
        position: "absolute",
        left: mouse.left- 50,
        top: mouse.top - 50
    }}>

    </div>
</>

export default function Test() {
    return (
        <div>
            <MouseListener render={renderPoint} />
            <MouseListener render={renderDiv} />
        </div>
    )
}
```
这就完成了