import React from 'react';
import Student from "./Student.js";


export default function StudentList(props){
    var stulist = props.stus.map(ele=><Student key={ele.id} {...ele}/> )
    return <ul>{ stulist }</ul>
}