import React, { Component } from 'react'

function A(props,ref){
    return <h1 ref={ref}>我是A组件 ---> 姓名：{ props.name }</h1>
}

const NewA = React.forwardRef(A);

export default class App extends Component {
    state = {
        name : "宇威"
    }
    componentDidMount(){
        console.log(this.ARef.current); // 获取的值h1
    }
    ARef = React.createRef();
    render() {
        return (
           <>
              <h2>我是父组件</h2>
              <NewA ref={this.ARef} name={this.state.name}/>
           </>
        )
    }
}
