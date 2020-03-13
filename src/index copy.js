import React from 'react';
import ReactDOM from 'react-dom';

const span = <span>我是一个span标签！</span>

const h3 = React.createElement("h3" , {type : 'classh3'},'this is h3', span);

console.log(typeof h3) ; // object
console.log(typeof span); // object

ReactDOM.render(h3, document.getElementById('root'));
