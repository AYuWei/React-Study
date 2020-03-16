import React from "react";

export default class NewLiftTest extends React.Component{
    state = {
        n : this.props.n
    }
    // 旧版的可以这样问，但是严禁的，因为数据不是单一的了
    componentWillReceiveProps(){
        this.setState({
            n : this.props.n + 1
        })
    }
    


      // 销毁
    componentWillUnmount(){
        console.log("销毁组件")
    }
    render(){
        return (<div>

            <p> 
                子集的N { this.state.n }
            </p>
            <button onClick={()=>{
                this.setState({
                    n : this.state.n + 1
                })
            }}>子集N + 1</button>
        </div>)
    }
}