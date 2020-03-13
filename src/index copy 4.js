import React from 'react';
import ReactDOM from 'react-dom';

const O_img = 'O_img';

const span = "<span>我是一个span元素！</span>"

const div = (
    <>      
            {/* 表达式作为元素的属性 */}
            <img type={O_img} style={{width:'200px', 'marginLeft':"200px"}} src="http://img3.imgtn.bdimg.com/it/u=1845113465,3148013960&fm=26&gp=0.jpg" alt=""/>
            
            {/* 属性使用小驼峰命名 */}
            <p className='p'>hello! 我是路飞</p>
           
            {/* 防止注入攻击 --> 则 p 标签内显示<span>我是一个span元素！</span>元素 */}
            <p> { span } </p>
            
            {/* 防止注入攻击 --> 但是知道是html元素也想让显示在页面中 */}
            <p dangerouslySetInnerHTML={{
                __html : span
            }}></p>
    </>
)

ReactDOM.render(div , document.getElementById('root'));