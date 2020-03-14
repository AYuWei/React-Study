import React from "react";
import "./Ball.css";

export default class Bali extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            left : props.left || 0,
            top : props.top || 0,
            xSpeed : props.xSpeed,  // 速度
            ySpeed : props.ySpeed,

        }
        
        // 每隔今个16毫秒运动一次
        const distance = 16;

        setInterval(()=>{
            const xDis = ( this.state.xSpeed * distance / 1000 ); // 移动的位置
            const yDis = (this.state.ySpeed * distance / 1000); 
            // 根据速度移动的位置
            let newLeft = this.state.left + xDis;
            let newTop = this.state.top + yDis;


            // 边界判断
            if(newLeft <= 0){
                newLeft = 0;
                this.setState({
                    xSpeed : -this.state.xSpeed
                })
            } else if(newLeft >= document.documentElement.clientWidth - this.props.width){
                newLeft = document.documentElement.clientWidth - this.props.width;
                this.setState({
                    xSpeed : -this.state.xSpeed
                })
            }
        
            if(newTop <= 0){
                newTop = 0;
                this.setState({
                    ySpeed : -this.state.ySpeed
                })
            } else if(newTop >= document.documentElement.clientHeight - this.props.height){
                newTop = document.documentElement.clientHeight - this.props.height;
                this.setState({
                    ySpeed : -this.state.ySpeed
                })
            }

            this.setState({
                left : newLeft,
                top : newTop,
            })
        },distance)

    }

    render(){
        
        return(
            <div className="ball" style={{
                width : this.props.width,
                height : this.props.height,
                backgroundColor : this.props.bg || "#f40",
                left : this.state.left,
                top : this.state.top,
            }}></div>
        )
    }
}