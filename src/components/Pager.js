import React from 'react'
import "./page.css"


export default function Pager(props){

    const pNumber = Math.ceil( props.limit / props.pageCapacity ); // 总页数
    const min = getMinNumber(props); // 获取最小数字
    const max = getMaxNumber(props); // 获取最大数字
    const number = [];
    for(let i = min; i <= max; i++){
    number.push(<span key={i} className={i === props.current ? "item active" : "item"} onClick={()=>{
        props.onChangePage(i)
    }}>{i}</span>)
    }

    return ( 
        <>
            <span className={props.current === 1 ? "item disabled" : "item"} onClick={ () => {
                props.onChangePage(1)
            } }>首页</span>
            <span className={props.current === 1 ? "item disabled" : "item"} onClick={ () => {
                props.onChangePage(props.current  === 1 ? 1 : props.current -1)
            } }>上一页</span>
            {/* 数字页码 */}

            {number}

            {/* 尾页 */}
            <span className={props.current === pNumber ? "item disabled" : "item"} onClick={()=>{
                props.onChangePage(props.current === pNumber ?  pNumber : props.current + 1 )
            }}>下一页</span>
            <span className={props.current === pNumber ? "item disabled" : "item"} onClick={()=>{
                props.onChangePage(pNumber)
            }}>尾页</span>

            {/* 总页数比 */}
            <span>{ props.current }</span>
            /
            <span>{ pNumber }</span>
        </>
     )
}

// 最小数字
function getMinNumber(props){
    var min = props.current - Math.floor(props.pagelNumber / 2);
    if(min < 1){
        min = 1;
    } 
    return min;
}

// 最大数字
function getMaxNumber (props){
    var max = props.current + Math.floor(props.pagelNumber / 2) ;
    if(max > Math.ceil(props.limit / props.pageCapacity)){
        max = Math.ceil(props.limit / props.pageCapacity)
    }
    return max;
}