### 属性默认值 和 类型检测

**属性默认值**

通过一个静态属性```defaultProps```告知react属性默认值。

静态属性：函数本身的属性

默认属性就像和混合一像`Object.assign`

先混合，在初始化

**属性类型检查**

使用库``prop-types``

对组件使用静态属性propTypes告知react如何检查属性。

加isRequired为必填属性

```js
PropTypes.any：//任意类型
PropTypes.array：//数组类型
PropTypes.bool：//布尔类型
PropTypes.func：//函数类型
PropTypes.number：//数字类型
PropTypes.object：//对象类型
PropTypes.string：//字符串类型
PropTypes.symbol：//符号类型

PropTypes.node：//任何可以被渲染的内容，字符串、数字、React元素
PropTypes.element：//react元素
PropTypes.elementType：//react元素类型
PropTypes.instanceOf(构造函数)：//必须是指定构造函数的实例
PropTypes.oneOf([xxx, xxx])：//枚举
PropTypes.oneOfType([xxx, xxx]);  //属性类型必须是数组中的其中一个
PropTypes.arrayOf(PropTypes.XXX)：//必须是某一类型组成的数组
PropTypes.objectOf(PropTypes.XXX)：//对象由某一类型的值组成
PropTypes.shape(对象): //属性必须是对象，并且满足指定的对象要求
PropTypes.exact({...})：//对象必须精确匹配传递的数据

//自定义属性检查，如果有错误，返回错误对象即可
属性: function(props, propName, componentName) {
   //...
}


```


------------------------------------------

默认属性
```js
import React from 'react'

export default function FuncDefault(props) {
    return (
        <div>
             a = {props.a}  b = {props.b} c = {props.c}
        </div> 
    )          
}

FuncDefault.defaultProps = {
    a : 1, 
    b : 2,
    c : 3
}

```

------------------------------------------------

validationComp.js
```js
import React from 'react'
import PropTypes from "prop-types"

export class A{

}
export class B extends A{

}

export default function ValidationComp(props) {

    const K = props.k;
    return (
        <div>
           {props.a}
           {props.b}
           <K />
        </div>
    )
   
}
 // 类型验证
ValidationComp.propTypes = {
    a : PropTypes.number.isRequired , // a : 必须是一个number类型，而且必填
    b : PropTypes.string.isRequired , // b ： 必须是一个字符串类型，且必填
    c : PropTypes.array, // c ： 必须是一个数组类型
    d : PropTypes.object, // d ：必须是一个对象类型
    e : PropTypes.any , // e ： 是任意类型的
    f : PropTypes.bool, // f : 为布尔类型
    j : PropTypes.symbol,  // j : 必须是Symbol类型
    h : PropTypes.func, // h ： 必须是函数类型

    // -----------------------------------------
    i : PropTypes.node, // i : 必须是可以被渲染的内容
    g : PropTypes.element, // g : 必须是React元素
    k : PropTypes.elementType , // k ：必须是React元素类型。
    l : PropTypes.instanceOf(A), // l : 必须是A的实例
    sex : PropTypes.oneOf(['男',"女"]), // sex : 枚举 sex必须具有威子
    n : PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // n 属性类型必须是数组中的其中一个 
    m : PropTypes.arrayOf(PropTypes.number), // n 必须满足的类型
    p : PropTypes.objectOf(PropTypes.number), // 每一项属性值必须满足要求
    q : PropTypes.shape({  //属性必须满足该对象的要求
        name : PropTypes.string.isRequired,
        age : PropTypes.number , 
        address : PropTypes.shape({
            province : PropTypes.string,
            city : PropTypes.string
        })
    }),

    // 自定义检测，参一：整个props, 参二，名字如score, 参三：组件名
    score : function(props, propName, componentName){
        const val = props[propName];
        // 必填
        if(val === null || val === undefined){
            return new Error(`invalid prop ${propName} in ${componentName}，${propName} is Required`)
        }
        // 该属性必须是一个数字类型
        if(typeof val !== 'number'){
            return new Error(`invalid prop ${propName} in ${componentName}，${propName} is not a number`)
        }
    }
}

```

App.js
```js
import React, { Component } from 'react'
// import Func from "./FuncDefault.js"
import ValidationComp ,{ A }from "./ValidationComp.js"

export default class App extends Component {
    state = {
        a : 1,
        b : "this is String" ,
        c : [],
        d : {},
        e : 12,
        f : false,
        j : Symbol('sdfasd'),
        h : this.handerChange,
        i : <h2>我是一个可以被渲染的React元素！</h2>,
        g : <h2>我是一个可以被渲染的React元素！</h2>,
        k : this.FuncK,
        l : (new A()),
        sex : '男',
        n : 123,
        m : [1,2,3,4],
        p : {
            "a" : 3
        },
        q : {
            name : "鱼尾",
            age : 12
        },
        score : 11
    }

    handerChange(){

    }

    FuncK(){
        return <h1>我是react元素类型</h1>
    }

    render() {
        return (
            <ValidationComp {...this.state}/>
        )
    }
}
```