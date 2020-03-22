import React from 'react'
import ctx, { Consumer } from "./formContext"
export default function FormButton(props) {
    return (
        <Consumer>
            {
                value => {
                    return (<button onClick={(e) => {
                        value.submit && value.submit();
                    }}>{props.children}</button>)
                }
            }
        </Consumer>
    )
}
