import React from 'react'
import "./index.css"
export default function Modal(props) {
    var defaultProps = {
        bg : "rgba(0,0,0,0.4)"
    }
    var datas = Object.assign({},defaultProps, props)
    onclose = (e) => {
        if(e.target.className === 'Modal'){
            datas.onClose();
        }
        return;
    }
    return (
        <div
        onClick={onclose}
        className="Modal" style={{backgroundColor:datas.bg}}>
            <div className="children" >
                 {datas.children}
            </div>
        </div>
    )
}
