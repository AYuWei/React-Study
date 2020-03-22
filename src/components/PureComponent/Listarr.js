import React, { Component } from 'react'
import List from "./List.js"
import PropTypes from "prop-types"

export default class Listarr extends Component {
    static propTypes = {
        dataArr : PropTypes.arrayOf(PropTypes.shape({
            name : PropTypes.string,
            value : PropTypes.number,
        })).isRequired,
    }
    state = {
        listArr : []
    }
    componentDidMount(){
      console.log("Listarr ====== 数据渲染")
      const tr = this.props.dataArr.map((ele, i)=>{
          return <List dataList={ele} key={i}/>
      })
      this.setState({
          listArr : tr,
      })
      
    }

    render() {
        console.log(this.state.listArr)
        return (
            <ul>
              {this.state.listArr}
            </ul>
        )
    }
}
