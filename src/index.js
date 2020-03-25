import React from "react";
import ReactDOM from "react-dom";

function Comp1(props) {
    return <h1>Comp1 {props.n}</h1>
}
function App(){
    return (
        <div>
            <Comp1 n={5}/>
        </div>
    )
}

const app = <App />

console.log(app)

ReactDOM.render(app, document.getElementById('root'))
