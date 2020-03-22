import React, { Component } from 'react'
import PropTypes from 'prop-types'


// 创建上下文， 默认值生效
const  cot = React.createContext({
    name : "张三",  // 默认值
    sex : 1
});

class A extends Component{
    static contextType = cot;
    render(){
        console.log(this)
        return <h1>我是A组件</h1>
    }
}


export default class Context extends Component {
    
    render() {
        return (
            <A/>
        )
    }
}
