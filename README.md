###  React中的事件

这里的事件：React内置的DOM组件中事件

1. 给document注册事件
2. 几乎所有的元素的事件处理，均在document的事件中处理。
    - 一些不冒泡的事件，是直接在元素上监听的。
    - 一些document上没有的事件，直接在元素上监听。

3. 在document的事件处理，React会根据虚拟DOM树的完成事件函数的调用。
4. React的事件参数：并非真实的DOM事件参数，是React合成的一个对象，该对象类似于真实DOM的事件参数。
    - stopPropagation，阻止事件在虚拟DOM树中冒泡
    - nativeEvent,可以得到真实的DOM事件对象。
    - 为了提高执行效率，React使用事件对象池来处理事件对象。

所有的事件都提出在document中存放。首先触发document原生的事件，然后在触发相应的react事件。

**注意事项**

1. 如果给真实的DOM注册事件，阻止了事件冒泡，则会导致React的相应的事件无法触发。
2. 如果给正式的DOM注册事件，事件会先于React事件运行。
3. 如果React的事件中阻止事件冒泡，无法阻止真实的DOM事件冒泡。
4. 可以通过nativeEvent.stopImmediatePropagation(),阻止document上剩余的执行。
5. 在事件处理程序中，不要异步的使用事件对象，如果一定要使用，需要调用persist函数。强行保留事件对象。

------------------------------------------
APP.js
```js
import React, { Component } from 'react'

var isE ;
function CompA(){
   
    return (
        <div>
            <h6 onClick={(e)=>{
                console.log(e === isE); // 判断为true
                console.log("我是h6中的点击事件！！！")
            }}>我是CompA中的h6元素
                <span onClick={(e)=>{
                     isE = e;
                    //  e.stopPropagation(); // 只是阻止了往上冒泡
                    console.log("我是span元素")
                    e.persist(); // 强制保留事件e参数，
                    setTimeout(()=>{
                        console.log(e.type)
                    },1000)

                }}>  =======我是span元素</span>
            </h6>
        </div>
    )
}

export default class App extends Component {
    render() {
        return (
           <div >
               <p>我是App中的P元素！</p>
               <CompA />
           </div>
        )
    }
}

```

index.js
```js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js"

ReactDOM.render(<>
    <App />
</> , document.getElementById('root'))

document.getElementById('root').addEventListener('click',(e)=>{
    console.log('我是元素的click事件')
    //e.stopPropagation(); // 阻止事件冒泡，react元素的事件不会被触发
})
```