import React from 'react'

export default function withLog(Comp) {
    return class LogWrapper extends React.Component{
        componentDidMount(){
            console.log(`日志：${Comp.name}组件，被创建了${Date.now()}`)
        }
        componentWillUnmount(){
            console.log(`日志：${Comp.name}组件，被销毁！`)
        }
        render(){
            return (<>
                    <Comp {...this.props}/>
                </>)
        }
    }
}
