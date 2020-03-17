import React from "react";
import ReactDOM from "react-dom";
import Test from "./common/Test.js"

ReactDOM.render(<>
    <div style={{color:"red"}}>我是父组件！</div>
    <Test>
    </Test>
</> , document.getElementById('root'))