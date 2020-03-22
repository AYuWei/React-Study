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
