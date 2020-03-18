import React, { Component } from 'react'

// HOC高阶组件的栗子

export class A extends Component {
    render() {
        return (
            <div>
                I am component A -->参数{this.props.name}
            </div>
        )
    }
}

export class B extends Component{
    render(){
        return (
            <div>
                I am component B -->参数{this.props.name}
            </div>
        )
    }
}