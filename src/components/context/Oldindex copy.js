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
