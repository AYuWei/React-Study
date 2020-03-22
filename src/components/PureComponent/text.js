import React, { Component } from 'react'
import PureComponent from "./index.js"
import datas from "./data.js"

export default class Text extends Component {
    render() {
        return (
            <PureComponent data={datas}/>
        )
    }
}
