import React from "react";
import ReactDOM from "react-dom";
// import App from "./App.js"

const app = <div className="app">
    <h1>
        标题
        {['abc',null,<p>段落</p>]}
    </h1>
    <p>
        {undefined}
    </p>
</div>

console.log(app)

ReactDOM.render(app, document.getElementById('root'))
