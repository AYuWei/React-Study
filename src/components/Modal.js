import React from "react";
import './Modal.css';

export default function Modal(props){
    if(!props.isShow){
        return null;
    }
    return <div className="modal">
        <p>加载中...</p>
    </div>
}