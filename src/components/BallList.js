import React from "react";
import getRandom from "../util";
import Ball from "./Ball";

export default class BallAll extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            ballInfoes : []
        }

        this.timer = setInterval(() => {
            const dom =  getRandom(100,50)
            const info = {
                width : dom,
                height : dom,
                xSpeed : getRandom(500,50),
                ySpeed : getRandom(500, 50),
                left : getRandom(500,50),
                top : getRandom(500, 50),
                bg : `rgb(${ getRandom(255, 0)},${getRandom(255, 0)},${getRandom(255, 0)})`
            }
            this.setState({
                ballInfoes : [...this.state.ballInfoes, info]
            })
            if(this.state.ballInfoes.length >= 10){
                clearInterval(this.timer)
            }

        }, 1000)

    }
    
    render(){
        const balls = this.state.ballInfoes.map((ele,i) => {
           return  <Ball key={i} {...ele} />
        })
        console.log(balls)
        return (
            <>
                {balls}
            </>
        )
    }
}