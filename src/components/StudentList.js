import React from "react";
import Student from './Student'

export default class StudentList extends React.Component {
    
    render(){
        console.log(this.props)
        return (
            <ul>
                {this.props.stus.map(ele => <Student key={ele.id} {...ele}/> )}
            </ul>
        )
    }
}