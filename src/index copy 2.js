import React from 'react';
import ReactDOM from 'react-dom';

const div1 = (
    // 必须要使用父级包裹
    <div>
        <h2>我是h2标题</h2>
        <p>this is p</p>
    </div>
)

const div2 = (
    // 要是不想有父级，因为加上父级可能会更改元素结构和样式，我们可以给一个空的父级
    // <>本质是<React.Fragment>
    <>
        <h2>我是h2标题！</h2>
        <p>我是P标签！</p>
    </>
)

ReactDOM.render(div2 , document.getElementById('root'));