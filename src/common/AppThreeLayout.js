import React from "react"
import ThreeLayout from "./ThreeLayout"

export default class AppThreeLayout extends React.Component{
    date ={
        leftWidth : 150,
        rightWidth : 150,
    }
    LeftComtaner = <h1>我是left内容</h1>;
    RightComtaner = <h1>我是right内容</h1>;
    render(){
        return  <ThreeLayout {...this.date} LeftComtaner={this.LeftComtaner} RightComtaner={this.RightComtaner} >
                <h1>this is main</h1>
        </ThreeLayout>
    }
}