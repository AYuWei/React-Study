import React from "react";

export default function Student(props){
    return (
        <li>
            【用户名】{props.name}  =-=
            【手机号】{props.phone}  =-=
            【邮箱】{props.email}  =-=
            【地区】{props.address} =-=
            【性别】{props.sex === 1 ? '男' : '女'}
        </li>
    )
}