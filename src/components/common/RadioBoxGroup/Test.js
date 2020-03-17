import React, { Component } from 'react'
import RadioBox from "./index.js"

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
                <RadioBox 
                    datas={this.datas} 
                    name = "Radio"
                    {...this.state}
                    onChange={this.onChange}
                />
            </div>
        )
    }
}
