import React from 'react';
import ReactDOM from 'react-dom';

const a = 123, b = 456;

const obj = { "name" : 'yuwei', "sex" : 18 } ; // 不可以传递普通对象

// 实现 123 + 456 = 123*456
const p1 = (<p>{a} + {b} = { a * b }</p>) ; //123 + 456 = 56088

const p2 = (
    <>
        {/* 下面语句不会输出任何内容！ */}
        <p>{ null }</p>
        <p>{ undefined }</p>
        <p>{ false }</p>
        <p>{ true }</p>
    </>
)

const number = new Array(30);
number.fill(1);
const arrList = number.map((ele,i) => <li key={ele + '_' + i}>{ i }</li>)

const ul = <ul>{ arrList }</ul>

const div = React.createElement('div',{}, p1, p2,ul);


ReactDOM.render(div , document.getElementById('root'));