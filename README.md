### JSX

**什么是JSX**

- Facebook起草的JS扩展语法。

- 本质是一个JS对象，会被babel编译，最终会被妆花为React.crteateElement,最好用（）括起来，js表达式。

- 每个JSX表达式，有且仅有一个根节点。
    - React.Fragment 为一个空的节点。

- 每个JSX元素必须结束。（XML规范）

**在JSX中嵌入式表达式 {}**

- 将JSX中使用注释。{}

- 将表达式作为内容的一部分。
    - null、undefined、false不会显示。
    - 普通对象、不可以作为子元素。
    - 可以放置React元素对象。

- 将表达式作为元素的属性。`{{}}`第一个`{}`为JSX对象，第二个`{}`为js对象。

- 属性使用小驼峰命名法**如写class类名的时候：className='p' === class='p'**

- 防止注入攻击
    - 自动编译。
    - dangerouslySetInnerHTML

**属性不可变性**

- 虽然JSX元素是一个对象，但是该对象中的所有属性不可更改

- 如果确实需要更改元素的属性，需要重新创建JSX元素。

**就和设置了ES6中的Object.freeze(obj)一样。**

---------------------------
**JSX本质是一个对象**

```js
    const span = (<span>我是一个span标签！</span>)

    const h3 = (React.createElement("h3" , {type : 'classh3'},'this is h3', span));

    console.log(typeof h3) ; // object
    console.log(typeof span); // object

    ReactDOM.render(h3, document.getElementById('root'));

```
------------------------------

**仅又一个根节点**

```js
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
```

-------------------------

**嵌入式表达式{}**

```js
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
```

在遍历的时候需要添加key值，key不像是在`:key=""`，而是`key={}`

-----------------------------------------

**表达式作为元素属性,小驼峰命名，防止注入攻击！**

```js
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
```

---------------------------

**属性不可变性**
```js
const name = '宇威！'
let num = 99;
setInterval(()=>{
    num +=1;
    const div = (
    <div>{name}报表度：{num}</div>
    );
    ReactDOM.render(div , document.getElementById('root'));
},1000)

// console.log(div.props.children); // 宇威！

// 一下修改则会报错。不可以修改只读属性。如需修改则需要重新赋值
// div.props.children = '很帅！';
```