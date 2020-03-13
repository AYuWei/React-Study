import React from "react"
function MyFunction(props){
    
    if(props.number){
        return (
        <div>
            <p>我是函数组件中的p元素</p>
            <h4>我是函数组件中的H4元素</h4>
            <h1>我是父级传递的元素：{ props.number }</h1>
        </div>)
    } else if(props.obj){
        return (
            <>
                <p>{props.obj.name}</p>
                <p>{props.obj.sex}</p>
            </>
        )
    }
    
}

export default MyFunction;