import React, { Component } from 'react'
import Select from "./index.js"
import withDataGroup from "./../hoc/withDataGroup.js"


export default class Test extends Component {
    state = {
        name: "select",
        chooseDatas: 'basketball'
    }
    datas = [
        { value: 'football', text: '足球' },
        { value: "basketball", text: "篮球" },
        { value: "movie", text: "电影" }
    ];
    onChange = (res) => {
        this.setState({
            chooseDatas: res
        })
    }
    render() {
        return (
            <div>
                <Select
                    datas={this.datas} {...this.state}
                    onChange={this.onChange}
                />
            </div>
        )
    }
}
