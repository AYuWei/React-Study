import React, { useState, useEffect } from 'react'
const refBox = React.createRef();
const refText1 = React.createRef();
const refText2 = React.createRef();
function ModuleBox(props) {
    useEffect(() => {
        console.log("处理副作用！")
        clearInterval( window.timer )
        window.timer = null;
        const Odisx = props.left / 100;
        const Odisy = props.top / 100;
        let curnumber = 0;
        window.timer = setInterval(() => {
            curnumber ++;
            const newTop = curnumber * Odisy;
            const newLeft = curnumber * Odisx;
            refBox.current.style.left = newLeft + 'px';
            refBox.current.style.top = newTop  + 'px';
            if(curnumber === 100) {
                clearInterval( window.timer )
            }
        }, 10);
        return ()=>{
            console.log("清理副作用")
            clearInterval(window.timer)
            window.timer = null;
        }
    })
    console.log("组件渲染")
    return (<div ref={refBox} style={{
        width: 100,
        height: 100,
        background: "#f40",
        position: "fixed",
        left: 0,
        top: 0
    }}></div>)
}

export default function App() {
    const [props, setProps] = useState({x :0, y : 0})
    return (
        <div>
            <div style={{paddingLeft:'200px'}}>
                X轴：<input type="number" value={props.x} onChange={(e)=>{
                    setProps({
                        ...props,
                        x : parseInt(e.target.value)
                    })
                }}/>
                Y轴：<input type="number" value={props.y} onChange={(e)=>{
                    setProps({
                        ...props,
                        y : parseInt(e.target.value)
                    })
                }}/>
            </div>
            <ModuleBox left={props.x} top={props.y} />
        </div>
    )
}
