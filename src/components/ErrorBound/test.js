import React, { PureComponent } from 'react'
import ErrorBound from "./index"

function ComA(){
    return (<>
        <h3>我是ComA组件！</h3>
        <ErrorBound>
            <ComB/>
        </ErrorBound>
    </>)
}
function getData(){
    return ;
}

class ComB extends PureComponent{
    render(){
        const data = this.getData().map(ele => <span key={ele}>{ele}</span>)
        return (<>
            <h4>我是ComB组件！</h4>
        </>)
    }
}

export default class Test extends PureComponent {
    render() {
        return (
            <div>
                <ComA />
            </div>
        )
    }
}
