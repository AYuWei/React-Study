### HOC高阶组件

HOF：Higher-Order Function 高阶函数，以函数作为参数，并且返回一个函数。

HOC：Higher-Order Component 高阶组件，一组件作为参数，并返回一个组件。

通常，可以利用HOC实现横切节点关注。

利用高阶组件就是，利用高阶组件帮我们实现以下别的功能，让组件代码块简单一点。

就比如。
```js
举例：20个组件，每个组件在创建组件和销毁组件时，需要作日记记录20个组件，他们需要显示一些内容，得到的数据结构完全一致。
```

就是说我们吧重复代码可以抽离出来。让使用者使用这个高阶组件，这个高阶组件返回的组件就是使用者的组件，只是添加了一些内容。

**注意**

1. 不要在render中使用高阶组件。
2. 不要在高阶组件内部更改传入的组件。`就是不要在传入的组件的原型上更改或添加属性和方法`



-----------------------------------------------------------

举个栗子，以上面栗子为例，写两个组件A ， B 组件干自己的事情，而另外给这个组件添加创建时和销毁时的状态。

App.js
```js
import React, { Component } from 'react'
import {A, B} from "./components/common/Comps.js"
import withLog from "./components/HOC/withLog.js"
import withLogin from "./components/HOC/withLogin.js"


let WithA = withLogin(A);
let WithB = withLogin(B);
WithA = withLog(WithA)
WithB = withLog(WithB)



export default class App extends Component {
    state = {}

    render() {
        return (
           <>
                <WithA name="11" isLogin/>
                <WithB name="22"/>
                <button onClick={()=>{
                    this.setState({
                        n : 1
                    })
                }}>属性</button>
           </>
        )
    }
}

```

--------------------------------------
withLog.js
```js
import React from 'react'

export default function withLog(Comp) {
    return class LogWrapper extends React.Component{
        componentDidMount(){
            console.log(`日志：${Comp.name}组件，被创建了${Date.now()}`)
        }
        componentWillUnmount(){
            console.log(`日志：${Comp.name}组件，被销毁！`)
        }
        render(){
            return (<>
                    <Comp {...this.props}/>
                </>)
        }
    }
}

```
-------------------------------
withLogin验证登陆
```js
import React from 'react'

export default function withLogin(Comp) {
    return class Login extends React.Component{
        render(){
            if(this.props.isLogin){
                return <Comp {...this.props}/>
            }
            return null;
        }
    }
}

```