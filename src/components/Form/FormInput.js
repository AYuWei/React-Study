import React, { Component } from 'react'
import ctx from "./formContext"
import PropTypes from "prop-types"
export default class FormInput extends Component {
    static contextType = ctx;

    static defaultProps = {
        type : "text"
    }
    static propTypes = {
        name : PropTypes.string.isRequired,
        type : PropTypes.string.isRequired,
    }

    render() {
        return (
                <input 
                    name={this.props.name} 
                    type={this.props.type}
                    value = {this.context.formData[this.props.name] || ''}
                    onChange = {(e)=>{
                        this.context.changeFormData(this.props.name, e.target.value)
                    }}
                ></input>
        )
    }
}
