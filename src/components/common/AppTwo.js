import React from "./node_modules/react"
import TwoLayout from "./TwoLayout"

export default class AppThreeLayout extends React.Component{
    date ={
        leftWidth : 150,
        rightWidth : 150,
    }
    LeftComtaner = <h1>我是left内容</h1>;
    RightComtaner = <h1>我是right内容</h1>;
    render(){
        return  <TwoLayout {...this.date} LeftComtaner={this.LeftComtaner} RightComtaner={this.RightComtaner} >
        </TwoLayout>
    }
}