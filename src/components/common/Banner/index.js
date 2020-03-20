import React, { Component } from 'react'
import "./index.css"
import ImgContainer from "./ImgContainer/ImgContainer"
import SwitchArrot from "./SwitchArrow"
import SwitchDot from "./SwitchDot"

import PropType from "prop-types"

export default class Bander extends Component {
    static defaultProps = {
        // width : 520,    // 默认宽度，父级
        height: 280,   // 默认高度，父级
        ImgSrcs: [],   // 默认图片数组
        autoDuration: 2000, // 默认自动切换时间
        duration: 500,  // 默认切换图片的持续时间。
    }
    state = {
        curIndex : 0,
    }
    static propTypes = {
        width: PropType.number.isRequired,
        height: PropType.number.isRequired,
        ImgSrcs: PropType.arrayOf(PropType.string),
        autoDuration: PropType.number,
        duration: PropType.number,
    }


    createdRef = e => {
        this.ImgRef = e;
    }

    handerChange = (type) => {
        let cur = this.state.curIndex;
        if (type === 'left') {
             cur--;
             if(cur < 0) {
                 cur = this.props.ImgSrcs.length -1;
             }
        } else if (type === 'right') {
            cur ++;
            if(cur > this.props.ImgSrcs.length - 1){
                cur = 0;
            }
        }
        this.handleSwitch(cur)
    }

    handleSwitch = (index) => {
        this.setState({
            curIndex : index
        })
        this.ImgRef.switchTo(index);
    }

    componentDidMount(){
        this.autoSwitch();
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }

    // 自动切换
    timer = null;
    autoSwitch(){
        clearInterval(this.timer)
        this.timer = setInterval(()=>{
            let cur = this.state.curIndex;
            cur = (cur + 1) % this.props.ImgSrcs.length;
            this.handleSwitch(cur)
        },this.props.autoDuration)
    }

    render() {
        return (
            <div
                className="bander-wrapper"
                style={{
                    width: this.props.width,
                    height: this.props.height,
                }}
               onMouseEnter={()=>{
                   clearInterval(this.timer)
               }}
               onMouseLeave={()=>{
                   this.autoSwitch();
               }}
            >
                <ImgContainer
                    ref={this.createdRef}
                    SomWidth={this.props.width}
                    SomHeight={this.props.height}
                    ImgSrcs={this.props.ImgSrcs}
                    duration={this.props.duration}
                />
                <SwitchArrot onChange={this.handerChange} />
                <SwitchDot 
                    total={this.props.ImgSrcs.length}
                    curIndex={this.state.curIndex}
                    onChange={this.handleSwitch}
                />
            </div>
        )
    }
}
