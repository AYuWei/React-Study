import React, { Component } from 'react'
import {A, B} from "./components/common/Comps.js"
import withLog from "./components/HOC/withLog.js"
import withLogin from "./components/HOC/withLogin.js"


let WithA = withLogin(A);
let WithB = withLogin(B);
WithA = withLog(WithA)
WithB = withLog(WithB)



export default class App extends Component {
    state = {}

    render() {
        return (
           <>
                <WithA name="11" isLogin/>
                <WithB name="22"/>
                <button onClick={()=>{
                    this.setState({
                        n : 1
                    })
                }}>属性</button>
           </>
        )
    }
}
