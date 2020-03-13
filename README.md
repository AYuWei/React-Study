### React概述

**什么是React？**

React是由Facebook研发的、由于**决定UI复杂度**的开源JavaScript库、目前由React联合社区维护。

> 它不是框架，只是为了解决UI复杂度而诞生的一个库。

框架的特点：就是侵入性强，限制了你写代码的语法。

React不是框架，所以侵入性弱，可以很好的结合第三方库使用。

**React特点**

1. 轻量：React的开发版本有源码（包含注释）仅3000多行。

2. 原生：所有的React的代码都是用原生的JS书写而成的，不依赖其他任何库。

3. 易扩展：React对代码的封装程度较低，也没有过多的使用魔法（如defineportey）。所以React中的很多功能都可以扩展。

4. 不依赖宿主环境：React只依赖原生JS语言，不依赖任何其他的东西，包括运行环境，因此他可以被轻松的移植到游览器，桌面应用，移动端。

5. 渐进式：React并非框架，对整个工程没有强制的约束力，这对于那些已存在的工程，可以逐步的将其改造为React，二不是需要全盘覆盖重写。

6. 单项数据流：所有的数据自顶而下的流动。

7. 用JS代码声明界面。

8. 组件化。


**对比vue**

| 对比项     |	Vue     | React |
| :------:  | :-------:|:------:|
| 全球使用量 | 	        | ✔
| 国内使用量 | 	✔	    |       |  
| 性能       | 	✔       | 	✔  | 
| 易上手	 | ✔	    |          | 
| 灵活度	 | 	        | ✔     | 
| 大型企业	 | 	         | ✔    | 
| 中小型企业 | 	✔	 |  | 
| 生态	     |  | 	✔ | 


### Hello World 

直接在页面上使用React，引用下面的代码。

```js
// React的核心库，与宿主环境无关。
<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
// 依赖核心库，将核心的功能与页面结合。
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
// 编译JSX
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
```

**React.createElement**

创建一个React元素，称作虚拟DOM，本质上是一个普通的对象。
1. 参数1：元素类型，如果是字符串，是一个普通的HTML元素。

2. 参数2：元素的属性，一个对象。

3. 参数3：后续参数，元素的子节点。

**JSX**

JS的扩展语法，需要使用babel进行转义。