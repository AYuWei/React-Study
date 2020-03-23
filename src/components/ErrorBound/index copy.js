import React, { Component } from 'react'

export default class Error extends Component {
    state = {
        handerError : false,
    }
    static getDerivedStateFromError(err){
        console.log('发生了错误',err)
        return {
            handerError : true,
        }
    }
    componentDidCatch(err,info ){
        console.log("记录错误信息。")
    }
    render() {
        return (
            <>
                { this.state.handerError ? <p>艾若伟，发生错误了！</p> : this.props.children}
            </>
        )
    }
}
