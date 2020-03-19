import React, { Component } from 'react'
import CheckBox from "./index.js"
import withDataGroup from "./../hoc/withDataGroup.js"
// 经过高阶组件
const OCheckBox = withDataGroup(CheckBox);

export default class Test extends Component {
    state = {
        name : "checkBox",
        chooseDatas : ["movie"]
    }
    datas = [
        {value : 'football' ,  text : '足球'},
        {value : "basketball" , text : "篮球"},
        {value : "movie" , text : "电影"}
    ];
    onChange = (newArr) => {
        this.setState({
            chooseDatas : newArr
        })
    }

    

    render() {
        return (
            <div>
                <OCheckBox 
                    datas={this.datas} {...this.state}
                    onChange={this.onChange}
                />
            </div>
        )
    }
}
