import React, { Component } from 'react'
// 我们来一个例子，就是点击鼠标聚焦状态。
export default class RefIndex extends Component {
    
    state = {
        val : ''
    }

    handerChange = () => {
        const inp = this.refs.tet;
        this.setState({
            val : inp.value
        })
    }

    componentDidMount(){
        console.log("componentDidMount------","refs初始化")
    }
    componentDidUpdate(){
        console.log("componentDidUpData------","销毁！！！")
    }

    render() {
        return (
            <div>
                <input type="text"
                 name="text" 
                 ref="tet" 
                 value={this.state.val}
                 onChange={this.handerChange}
                 />
                <button onClick={()=>{
                   this.refs.tet.focus()
                   this.setState({
                       
                   })
                }}>聚焦</button>
            </div>
        )
    }
}
