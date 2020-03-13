import React from 'react';
import ReactDOM from 'react-dom';

// const name = '宇威！'
// let num = 99;
// setInterval(()=>{
//     num +=1;
//     const div = (
//     <div>{name}报表度：{num}</div>
//     );
//     ReactDOM.render(div , document.getElementById('root'));
// },1000)

// console.log(div.props.children); // 宇威！

// 一下修改则会报错。不可以修改只读属性。如需修改则需要重新赋值
// div.props.children = '很帅！';


// Object.freeze(obj) 冻结对象。
let obj = {"name" : "宇威", set : 18}
console.log(obj)
obj.set = 21;
console.log(obj)
Object.freeze(obj)
console.log(obj)
