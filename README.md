### 组件和组件属性

组件：包含内容，样式和功能的UI单元。

插件：包含行为样式结构的功能模块，能在页面中单独使用。

模块：模块是将某一特定的元素封装起来，行为和样式的单元功能。

**创建一个组件**

**特别注意：组件的名称首字母必须大写**

不大写会当成html元素执行。

1. 函数组件： 返回一个React元素

2. 类组件：必须继承React.Component,、必须提供render函数，用于渲染组件。

**组件的属性**

1. 对函数组件，属性会作为一个对象的属性，传递给函数的参数。

2. 对于类组件，属性会作为一个对象的属性，传递给构造函数的参数。

注意：属性的书写，应该使用小驼峰命名法。

**组件无法改变自身的属性**

之前学习的React元素，本质上就是一个组件（内置组件）

React中的哲学：数据属于谁，谁才有权修改。

React中的数据：自顶而下流动。

----------------------------------

**函数组件的调用区别**
```js
import MyFunction from "./myFunc_component.js";
import MyClass from "./myClass_component.js";

// 执行函数组件
// ReactDOM.render(MyFunction(), document.getElementById('root'));

// 或者这样执行
ReactDOM.render((
    <div>
        <MyFunction />
        {MyFunction()}
        <MyClass />
    </div>
), document.getElementById('root'));

```
用函数执行的方式调用函数组件，在页面虽然看不出什么区别，但是在浏览器扩展应用程序React中可以看到，函数用`<MyFuntion />`形式调用的话会在React结构中显示出这个组件的名，用函数调用则不会显示。

----------------------------------------

函数中传递属性：直接书写，然后在组件中函数传递参数传进去。

类中传递属性：直接书写，然后在类中的propt中,这样使用this.props['属性名']
