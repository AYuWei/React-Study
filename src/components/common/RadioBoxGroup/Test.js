import React, { Component } from 'react'
import RadioBox from "./index.js"
import withDataGroup from "./../hoc/withDataGroup.js"
// 经过高阶组件
const ORadioBox = withDataGroup(RadioBox);

export default class Test extends Component {
    state = {
        chooseDatas :''
    }
    datas = [
        {value : 'football' ,  text : '足球'},
        {value : "basketball" , text : "篮球"},
        {value : "movie" , text : "电影"}
    ]
    onChange = (ele) => {
        this.setState({
            chooseDatas : ele
        })
    }
    render() {
        return (
            <div>
                <ORadioBox 
                    datas={this.datas} 
                    name = "Radio"
                    {...this.state}
                    onChange={this.onChange}
                />
            </div>
        )
    }
}
