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
