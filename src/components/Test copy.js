import React, { Component } from 'react'
import MovablePanel from "./MovablePanel"
import MouseListener from "./MouseListener"

export default class Test extends Component {
    render() {
        return (
            <div>
                <MovablePanel />
                <MouseListener/>
            </div>
        )
    }
}
