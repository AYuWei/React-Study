import React from "react";
import NewLiftTest from "./NewLiftTest.js";

export default class NewLift extends React.Component{
    state = {
        n : 1,
        isShow : true
    }

    static getDerivedStateFromProps(props, state){
        console.log("getDerivedStateFromProps",props,state)
        return {
            n : state.n
        }
    }

    // 需要和componentDidUpdate一同使用
    getSnapshotBeforeUpdate = (prevProps, prevState) => {
        console.log("getSnapshotBeforeUpdate");
        return 132;
    }
    componentDidUpdate(res,s,r){
        console.log('componentDidUpdate',r)
    }

    render(){
        const res = this.state.isShow ?  <NewLiftTest n={this.state.n} /> : null;
        return (<div>
            {res}
            <p> 
                <span>父级的N { this.state.n }</span>
                <br/>
                <button onClick={()=>{
                    this.setState({
                        n : this.state.n + 1
                    })
                }}>父级组件n + 1</button>
                <button onClick={()=>{
                    this.setState({
                        isShow : !this.state.isShow
                    })
                }}>删除子组件</button>
            </p>
        </div>)
    }
}