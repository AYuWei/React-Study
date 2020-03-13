import React from "react";

export default class MyClass extends React.Component {

    // 内部自动完成
    // constructor(props){
    //     super(props) ;// this.props = props
    // }

    render(){
        return (
            <div>
                <p>我是类组件p元素</p>
                <h3>我是类组件h3元素！</h3>
                <h1>我是父级传递的书写：{this.props.number}</h1>
            </div>
        )
    }
};