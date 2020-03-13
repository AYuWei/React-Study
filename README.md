### 使用脚手架搭建工程。

下载React脚手架
> npm install -g create-react-app

创建项目
> create-react-app my-app

package.json中的`eslintConfig`为代码风格检查。


### 编辑器配置,设置一下emmet

编辑器配置，方便后面在js元素中书写jsx对象，如
`<h1>this is h1</h1>`

设置：file -> preferences -> Setings -> 然后搜emmet -> 然后在Setings.json文件中配置
```json
    "emmet.includeLanguages" : {
        "wxml" : "html",
        "javascript" : "javascriptreact"
    }
```

有了这个设置，方便了我们书写jsx对象。

### VSCode插件安装

- ESLint： 代码风格检查。

- ES7 React/Redux/GraphQL/React-Native snippets: 快速编写代码。

### Chrome插件安装

React Developer Tools: React开发者工具

可以去谷歌商店下载。