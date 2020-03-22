### Context

**上下文：** Context，表示做某一些事情的环境。

React中的上下文特点：
1. 当某个组件创建了上下文后，上下文中的数据，会被所有的组件后代共享。

2. 如果当某个组件依赖了上下文，会导致该组件不在纯粹（外部数据仅来源于数学props,还可以来源于上下文的）

3. 一般情况下，用于第三方组件（通用组件）

#### 旧的API

**创建上下文**

只用在类组件才可以创建上下文。

1. 给类组件书写静态属性childContextTypes,使用该属性对上下文的数据类型进行约束。

2. 添加实例方法getChildContext, 该方法返回的对象，即为上下文的数据。该数据必须满足类型约束，该方法会在每次render之后运行。

**使用上下文的数据**

要求：如果使用上下文中的数据，组件必须有一个静态属性contextTypes，该属性描述了需要获取的上下文中的数据类型。

1. 可以在组件的构造函数中，通过第二个参数，获取上下文数据。

2. **从组件的context属性中获取**

3. 在函数组件中，通过第二个参数，获取上下文数据。`组件函数中可以传递第二个参数的还有，ref转发的时候`

**上下文的数据变化**

上下文中的数据不可以直接改变，最终都是通过状态改变。

在上下文中加入一个处理函数，可以用于后代组件更改上下文的数据。

**在vue中是利用vuex来存储这样的信息的**
```js
Vue.use(Vuex); // 在此方法中绑定了 $store state  $store.state.name

//  放置我们需要用到的元素信息。
state: {
    name : "yuwei",
    age : 18,
    look : "beautiful",
    studentList : []
  },
```
- this.$store.state.xxx  获取值

#### 新的API

旧的API存在严重的效率问题，并且容易导致滥用。

**创建上下文**

上下文是一个独立于组件的对象，该对象通过React.createContext(默认值)创建。

**只有当组件所处的树中没有匹配到Provider时，其中默认值的参数参会生效。**

返回的是一个包含两个属性的对象。

1. Provider属性：生产者，一个组件，该组件会创建一个上下文，该组件有value属性，通过该属性，可以为其数据赋值。
    - 同一个Provider, 不要用到多个组件中，如果需要再其他组件中使用该数据，应该考虑将数据提升到更高的层次。

2. Consumer属性：后续讲解。

**使用上下文中的数据**

1. 在类组件中，直接使用this.context获取上下文数据。
    - 要求：必须拥有静态属性contextType,应赋值为创建的上下文对象。

2. 在函数组件中，需要使用Consumer来获取上下文数据
    - Consumer是一个组件
    - 它的子节点，是一个函数（它的props.children需要传递一个函数）

Consumer是一个组件，子节点是一个函数，函数的返回值会渲染在页面上。


**注意细节**
如果，上下文提供者（Context.Provider）中的value属性发生变化（Object.is比较），会导致该上下文提供的所有后代元素全部重新渲染，无论该子元素是否有优化（无论shoulComponentUpdate函数返回什么结果）


-----------------------------

旧的Context
```js
import React, { Component } from 'react'
import PropTypes from 'prop-types'

function A(){
    return (
        <div>
            <p>我是A组件</p>
            <B />
        </div>
    )
}
class B extends Component{
    static contextTypes = {
        a : PropTypes.number
    }

    render(){
        return (
            <div>
                <p>我类组件B ==> 在上下文获取元素 a = {this.context.a}</p>
                <C/>
            </div>

        )
    }
}
function C(props, context){
    return (
        <p>我是函数C组件 ==> 在上下文获取元素 b = {context.b}</p>
    )
}
C.contextTypes={
    b : PropTypes.string
}

export default class Context extends Component {
    static childContextTypes = {
        a : PropTypes.number,
        b : PropTypes.string,
    }

    getChildContext(){
        return {
            a : 111,
            b : '222'
        }
    }

    render() {
        return (
            <A/>
        )
    }
}

```
改变上下文的值
```js
import React, { Component } from 'react'
import PropTypes from 'prop-types'

function A(){
    return (
        <div>
            <p>我是A组件</p>
            <B />
        </div>
    )
}
class B extends Component{
    static contextTypes = {
        a : PropTypes.number,
        onChange : PropTypes.func,
    }

    render(){
        return (
            <div>
                <p>我类组件B ==> 在上下文获取元素 a = {this.context.a}</p>
                <button onClick={()=>{
                    this.context.onChange();
                }}>改变上下文 a 的值 a+1</button>
            </div>

        )
    }
}

export default class Context extends Component {
    static childContextTypes = {
        a : PropTypes.number,
        b : PropTypes.string,
        onChange : PropTypes.func,
    }
    state = {
        a : 111,
    }
    getChildContext(){
        return {
            a : this.state.a,
            b : '222',
            onChange : this.onChange,
        }
    }

    onChange = () =>{
        this.setState({
            a : this.state.a + 1
        })
    }

    render() {
        return (
            <A/>
        )
    }
}

```

----------------------------------------

**新**

函数组件和类组件使用上下文
```js
import React, { Component } from 'react'
import PropTypes from 'prop-types'


// 创建上下文， 不使用Provider时默认值才生效
const cot = React.createContext({
    name: "张三",  // 默认值
    sex: 1
});

class A extends Component {
    static contextType = cot;
    render() {
        return (<>
            <h1>我是类组件A</h1>
            <p>我是上下文中的值==>姓名：{this.context.name}, 年龄：{this.context.sex}</p>
        </>)
    }
}

function B() {
    return (<cot.Consumer>
                {value => {
                    return (<>
                        <h1>我是函数组件B</h1>
                        <p>我是上下文中的值==>姓名：{value.name}, 年龄：{value.sex}</p>
                    </>)
                }}
            </cot.Consumer>)
}

export default class Context extends Component {

    render() {
        return (
            <cot.Provider value={{
                name: "宇威",
                sex: 21,
            }}>
                <A></A>
                <B />
            </cot.Provider>
        )
    }
}

```

--------------------------------------

上下文中数据改动
```js
import React, { Component } from 'react'
import PropTypes from 'prop-types'


// 创建上下文， 不使用Provider时默认值才生效
const cot = React.createContext({
    name: "张三",  // 默认值
    sex: 1
});
// 上下文2
const cottwo = React.createContext();

class A extends Component {
    static contextType = cot;
    state = {
        name : "张三",
        sex : 32
    }
    render() {
        return (<>
            <h1>我是类组件A</h1>
            <p>我是上下文中的值==>姓名：{this.context.name}, 年龄：{this.context.sex}</p>
            <cottwo.Provider value={{
               ...this.state,
               onChange : () => {
                   this.setState({
                       sex : this.state.sex + 2
                   })
               }
            }}>
                <B />
            </cottwo.Provider>
        </>)
    }
}
class B extends Component {
    static contextType = cottwo;
    render() {

        return (<>
            <h1>我是类组件B</h1>
            <p>我是上下文中的值==>姓名：{this.context.name}, 年龄：{this.context.sex}</p>
            <button onClick={()=>{
                this.context.onChange && this.context.onChange();
            }}>年龄 + 2</button>
        </>)
    }
}

export default class Context extends Component {

    render() {
        return (
            <cot.Provider value={{
                name: "宇威",
                sex: 21,
                onChange : function(){
                    this.sex += 3; // 这里是改变不了数据的，因为不会重新渲染
                }
            }}>
                <A></A>
            </cot.Provider>
        )
    }
}
```