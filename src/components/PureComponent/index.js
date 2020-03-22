import React, { Component , PureComponent} from 'react'
import ListArr from "./Listarr.js"
export default class PureComp extends PureComponent {
    state = {
        data : this.props.data,
        value : ''
    }
    onChange=()=>{
        this.setState({
            data : [...this.state.data, { name : this.state.value, value : 22}]
        })
        this.setState({
            value : '',
        })
    }
    render() {
        console.log("index===开始渲染")
        console.log(this.state.data)
        
        return (
            <div>
                <div>
                    <input type="text" value={this.state.value} onChange={(e)=>{
                        this.setState({
                            value : e.target.value
                        })
                    }}/>
                    <button onClick={this.onChange}>添加</button>
                </div>
                <ListArr dataArr={this.state.data}  />
            </div>
        )
    }
}
