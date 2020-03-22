import React, { Component } from 'react'
import "./movable.css"

export default class MouseListener extends Component {
    state = {
        top : 0,
        left : 0,
    }

    divRef = React.createRef();

    handleMouseMove = e => {
       // 获取正方形的信息
       const {top, left} = this.divRef.current.getBoundingClientRect();
       const x = e.clientX - left;
       const y = e.clientY - top;
       this.setState({
           top : y - 50,
           left : x - 50,
       })
    }

    render() {
        return (
            <div ref={this.divRef} className="point" onMouseMove={this.handleMouseMove}>
               {this.props.render(this.state)}
            </div>
        )
    }
}
