### State Hook

State Hook是一各在函数组件中使用的函数（useState）,用于在函数组件中使用状态。

useState

- 函数有一个参数，这个参数的值表示状态的默认值。
- 函数的返回值是一个数组，该数组一定包含两项。
  - 第一项：当前状态的值。
  - 第二项：改变状态的函数

一个函数组件中可以有多个状态，这种做法非常有利于横向切分关注点。

**注意的细节**
 
1. useState最好写到函数的起始位置，便于阅读。
2. useState严禁出现在代码块（判断，循环）中。(因为当第N次调用useState,检查该节点的状态数组是否存在下标N，不存在，使用默认值创建一个状态，将该状态加入到状态数组中，下标N)
3. useState返回的函数（数组的第二项），引用不变（节省内存空间）
4. 使用函数改变数据，若数据和之前的数据完全相等（使用Object.is比较），不会导致重新渲染，以达到优化效率的目的。
5. 使用函数改变数据，传入的值不会和原来的数据进行合并，而是直接替换。
6. 如果要实现强调刷新组件
  - 类组件：使用forceUpdate函数。
  - 函数组件: 使用一个空对象的useState
7. **如果某些状态之间没有必然的联系，应该分为不同的状态，而不是和并成一个对象。**
8. 和类组件的状态一样，函数组件中改变状态可能是异步的（在DOM事件中国），多个状态变化会合并以提高效率，此时，不能信任之前的状态，而应该使用回调函数的方式改变状态。如果状态变化要使用到之前的状态，尽量传递函数。


---------------------------
简单的实例
```js
import React ,{ useState } from 'react'

export default function App() {
    // const n = useState(0)
    // const N = n[0];
    // const setN = n[1];
    const [N, setN] = useState(0)
    return (
        <div>
            <button onClick={()=>{
                N >0 && setN(N - 1)
            }}>-</button>
            <span>{N}</span>
            <button onClick={()=>{
                setN(N + 1)
            }}>+</button>
        </div>
    )
}
```

```js
import React, { useState } from 'react'

export default function App() {
    const [visible, setVisible] = useState(true)
    const [N, setN] = useState(0)
    return (
        <div>
            <p style={{display: visible ? 'block' : "none"}}>
                <button onClick={() => {
                    N > 0 && setN(N - 1)
                }}>-</button>
                <span>{N}</span>
                <button onClick={() => {
                    setN(N + 1)
                }}>+</button>
            </p>
            <button onClick={()=>{
                setVisible(!visible)
            }}>显示/隐藏</button>
        </div>
    )
}

``` 

```js
import React, { useState } from 'react'

export default function App() {
    const [N, setN] = useState(0)
    return (
        <div>
             <button onClick={() => {
                    N > 0 && setN(N - 1)
                }}>-</button>
                <span>{N}</span>
                <button onClick={() => {
                    setN(parent => parent + 1)
                    setN(parent => parent + 1)
                }}>+</button>
        </div>
    )
}

```