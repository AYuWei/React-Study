import React, { Component } from 'react'
import PropTypes from "prop-types"

export default class ImgContainer extends Component {

    // WrapperHeight 容器总长度
    // WrapperWidth 容器总宽度
    // SonHeight 子集的单张图的高度 
    // SonWidth 子集的单张图的宽度
    static defaultProps = {
        SomHeight : 280,
        SomWidth : 520,
        duration : 500,
    }

    static propTypes = {
        SomHeight : PropTypes.number.isRequired,     // 单张图片的宽度
        SomWidth : PropTypes.number.isRequired,      // 单张图片的宽度
        ImgSrcs : PropTypes.arrayOf(PropTypes.string).isRequired,  // 图片路径数组
        duration : PropTypes.number.isRequired // 在多长时间内完成动画切换
    }

    WrapperHeight = this.props.SomHeight;
    WrapperWidth = this.props.ImgSrcs.length * this.props.SomWidth;

    Imgrefernce = e => {
        this.div = e;  // 利用ref获取内置组件
    }

    // 计时器的时间间隔
    tick = 16;

    switchTo(index){
        // 设置正确的index
        if(index < 0) {
            index = 0;
        }
        else if(index > this.props.ImgSrcs.length - 1){
            index = this.props.ImgSrcs.length - 1;
        }

        // 1. 更具index 计算DIV 的最终marginLeft
        const targetLeft = -(this.props.SomWidth * index);
        // 2. 获取当前的marginLeft
        let currentLeft = parseFloat(window.getComputedStyle(this.div).marginLeft)
        // 3. 运动次数
        const motionNumber = Math.ceil( this.props.duration / this.tick );
        const dis = targetLeft - currentLeft;
        // 4. 每次运动的距离
        const everDistance = dis / motionNumber;
        // 记录当前运动次数
        let isDis = 0;
        clearInterval(this.timer)
        this.timer = setInterval(()=>{
            isDis++;
            currentLeft += everDistance;
            this.div.style.marginLeft = currentLeft + "px";

            if(isDis === motionNumber){
                this.div.style.marginLeft = targetLeft + "px";
                clearInterval(this.timer)
            }
        },this.tick)
    }

    

    render() {
        const Imgs = this.props.ImgSrcs.map((ele, index) => {
            return (<img src={ele} key={index} alt=""
                    style={{
                        width : this.props.SomWidth , 
                        height : this.props.SomHeight ,
                        float : "left"
                    }}
                    />)
        })
        return (
            <div
                ref = {this.Imgrefernce}
                style={{width : this.WrapperWidth ,
                    height : this.WrapperHeight,}}
            >
                {Imgs}
            </div>
        )
    }
}
