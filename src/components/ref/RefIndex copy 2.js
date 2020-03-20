import React, { Component } from 'react'
// 我们来一个例子，就是点击鼠标聚焦状态。
export default class RefIndex extends Component {
    
    state = {
        val : ''
    }

    tet = React.createRef();

    handerChange = () => {
        const inp = this.tet.current;
        this.setState({
            val : inp.value
        })
    }
    render() {
        return (
            <div>
                <input type="text"
                 name="text" 
                 ref={this.tet}
                 value={this.state.val}
                 onChange={this.handerChange}
                 />
                <button onClick={()=>{
                   this.tet.current.focus()
                   this.setState({
                       
                   })
                }}>聚焦</button>
            </div>
        )
    }
}
