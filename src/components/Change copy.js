import React from 'react';

export default class changeClick extends React.Component{

    state = {
        number : 3
    }
    constructor(props){
        super(props);
        
        this.timer = setInterval(() => {
            this.setState({
                number : this.state.number -1
            })
            if(this.state.number === 0){
                clearInterval(this.timer);
                // 然后执行父级事件
                this.props.onClick();
            }
        },1000)
    }

    render(){
        console.log(this)
        return (
            <>
                <h3>计时器 { this.state.number }</h3>
                <button onClick={this.props.onClick}>按钮</button>
            </>
        )
    }
}