###  上下文的应用场景

编写一套组件（有很多组件），这些组件之间需要相互配合才能最终完成功能

比如：我们要开发一套表单组件，使用方式如下。
```js
render(){
    return (
        <Form>
            <div onSubmit={(datas)=>{
                console.log(datas)
            }}>
                账号：<Form.Input name="loginId"/>
            </div>
            <div>
                密码：<Form.Input name="loginPwd" type="password"/>
            </div>
            <div>
                <Form.Button>提交</Form.Button>
            </div>
        </Form>
    )
}
```

-----------------------

index.js
```js
import React, { Component } from 'react'
import {Provider} from "./formContext.js"
import FormInput from "./FormInput"
import FormButton from "./FormButton"
export default class Form extends Component {
    state = {
       formData : {},
       changeFormData : (name, val) => {
           this.setState({
               formData : {
                   ...this.state.formData,
                   [name] : val
               }
           })
       },
       submit : () => {
           this.props.onSubmit && this.props.onSubmit(this.state.formData)
       }
     }
    render() {
        return (
            <div>
                <Provider value={{
                    ...this.state
                }}>
                    {this.props.children}
                </Provider>
            </div>
        )
    }
}

Form.Input = FormInput; 
Form.Button = FormButton;
```

text.js
```js
import React, { Component } from 'react'
import Form from "./index.js"

export default class text extends Component {
    render() {
        return (
            <div>
                <Form onSubmit={datas => {
                    console.log(datas);
                }}>
                    <div>
                        账号：<Form.Input name="loginId" />
                    </div>
                    <div>
                        密码：<Form.Input name="loginPwd" type="password" />
                    </div>
                    <div>
                        <Form.Button>提交</Form.Button>
                    </div>
                </Form>
            </div>
        )
    }
}

```

formContext.js
```js
import React from "react"
const ctx = React.createContext();

export const {Provider, Consumer} = ctx;

export default ctx;
```

FormButton.js
```js
import React from 'react'
import ctx, { Consumer } from "./formContext"
export default function FormButton(props) {
    return (
        <Consumer>
            {
                value => {
                    return (<button onClick={(e) => {
                        value.submit && value.submit();
                    }}>{props.children}</button>)
                }
            }
        </Consumer>
    )
}

```

FormInput.js
```js
import React, { Component } from 'react'
import ctx from "./formContext"
import PropTypes from "prop-types"
export default class FormInput extends Component {
    static contextType = ctx;

    static defaultProps = {
        type : "text"
    }
    static propTypes = {
        name : PropTypes.string.isRequired,
        type : PropTypes.string.isRequired,
    }

    render() {
        return (
                <input 
                    name={this.props.name} 
                    type={this.props.type}
                    value = {this.context.formData[this.props.name] || ''}
                    onChange = {(e)=>{
                        this.context.changeFormData(this.props.name, e.target.value)
                    }}
                ></input>
        )
    }
}

```