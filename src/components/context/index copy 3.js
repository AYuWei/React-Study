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
    render() {
        return (<>
            <h1>我是类组件A</h1>
            <p>我是上下文中的值==>姓名：{this.context.name}, 年龄：{this.context.sex}</p>
        </>)
    }
}

function B() {
    return (<>
        <cot.Consumer>
            {value => {
                return (<>
                    <h1>我是函数组件B</h1>
                    <p>我是上下文中的值==>姓名：{value.name}, 年龄：{value.sex}</p>
                    <button onClick={()=>{
                        value.onChange && value.onChange();
                    }}>上下文年龄 + 3</button>
                </>)
            }}
            {/* 使用上下文2 */}
        </cot.Consumer>
        <cottwo.Provider value={{
            name : "海玲",
            sex : 31,
            onChange : function(){
                console.log(this)
                this.sex += 2;
            }
        }}>
            <C />
        </cottwo.Provider>
    </>)
}

class C extends Component {
    static contextType = cottwo;
    render() {
        console.log(this)
        return (<>
            <h1>我是类组件C</h1>
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
                    this.sex += 3;
                }
            }}>
                <A></A>
                <B />
            </cot.Provider>
        )
    }
}
