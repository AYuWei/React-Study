import React from "react";

export default class Tick extends React.Component{

    state = {
        number : this.props.number
    }

    constructor(props){
        super(props);

        // this.state = {
        //     number : this.props.number
        // }

        this.timer = setInterval(()=>{
            this.setState({
                number : this.state.number - 1
            })
            if(this.state.number <= 0){
                clearInterval(this.timer)
            }
        }, 1000)
    }

    render(){
        return (
            <h2>计时器：{this.state.number}</h2>
        )
    }
}