### ref

reference: 引用

场景：希望直接使用dom元素中的某个方法，或者希望直接使用自定义组件中的某个方法

1. ref作用于内置的html组件，得到的将是真实的dom对象。

2. ref作用于类组件，得到的将是类的实例。

3. ref不能作用于函数组件。

ref不再推荐使用字符串赋值，字符串赋值的方式将来可能会被移除。

目前，ref推荐使用对象或者是函数

**对象**

通过React.createRef函数创建。

**函数**

函数在调用的时间：
1. componentDidMount的这个时候会调用该函数。
    - 在componentDidMount事件中可以使用ref

2. 如果ref的值发生了变动（旧的函数被新的函数替代），分别调用旧的函数以及新的函数，时间点出现在componentDidUpdata之前。
    - 旧的函数被调用时，传递null
    - 新的函数被调用时，传递对象

3. 如果ref所在的组件被卸载，会调用函数。

**谨慎使用ref**

能够使用属性和状态进行控制，就不要使用ref.

1. 调用真实的DOM对象中的方法。

2. 某个时候需要调用组件的方法。

`说白了就是使用ref获取元素DOM元素，任何使用，但是React不建议直接修改页面，React使用数据渲染的。`


-------------------------

使用的ref在类组件中this.refs里面找。
```js
import React, { Component } from 'react'
// 我们来一个例子，就是点击鼠标聚焦状态。
export default class RefIndex extends Component {
    
    state = {
        val : ''
    }

    handerChange = () => {
        const inp = this.refs.tet;
        this.setState({
            val : inp.value
        })
    }

    render() {
        return (
            <div>
                <input type="text"
                 name="text" 
                 ref="tet" 
                 value={this.state.val}
                 onChange={this.handerChange}
                 />
                <button onClick={()=>{
                   this.refs.tet.focus()
                }}>聚焦</button>
            </div>
        )
    }
}
```

------------------------------------------------

用React.createRef()创建，然后在类中直接使用，**ref不是属性**
```js
import React, { Component } from 'react'
// 我们来一个例子，就是点击鼠标聚焦状态。
export default class RefIndex extends Component {
    
    state = {
        val : ''
    }

    tet = React.createRef();

    handerChange = () => {
        const inp = this.tet.current;
        this.setState({
            val : inp.value
        })
    }
    render() {
        return (
            <div>
                <input type="text"
                 name="text" 
                 ref={this.tet}
                 value={this.state.val}
                 onChange={this.handerChange}
                 />
                <button onClick={()=>{
                   this.tet.current.focus()
                   this.setState({
                       
                   })
                }}>聚焦</button>
            </div>
        )
    }
}

```

-------------------------------------------

组件使用ref
```js
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
```