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
