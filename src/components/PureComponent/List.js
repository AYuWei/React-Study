import React, { Component } from 'react'
import PropTypes from "prop-types"

export default class List extends Component {
    static propTypes = {
        dataList : PropTypes.shape({
            name : PropTypes.string,
            value : PropTypes.number,
        }),
    }
    componentDidMount(){
        console.log("子组件List")
    }
    render() {
        return (
          <li>{this.props.dataList.name}--{this.props.dataList.value}</li>
        )
    }
}
