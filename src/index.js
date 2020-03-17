import React from "react";
import ReactDOM from "react-dom";
import CheckBox from "./components/common/CheckBoxGroup/Test.js"
import Select from "./components/common/Select/Test.js"
import Radio from "./components/common/RadioBoxGroup/Test.js"
ReactDOM.render(<>
    <Select />  
    <CheckBox/>  
    <Radio/>
</> , document.getElementById('root'))