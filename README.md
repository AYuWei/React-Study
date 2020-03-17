### 表单 

受控组件和非受控组件

受控组件：组件的使用者，有能力完全控制该组件的行为和内容。通常情况下受控组件往往没有自身的状态，其内容完全受到属性的控制。

非受控组件：组件的使用者，没有能力控制该组件的行为和内容，组件的行为和内容完全自行控制。

表单组件：默认情况下是非受控组件，一旦设置了表单组件的value属性，则其变为受控组件（单选和对选需要设置checked）

---------------------------------------------
设置了value属性还需添加onChange事件
```js
export default class NumberInput extends Component {
    state = {
        val : '',
    }
    henderChange =(e)=>{
        var text = e.target.value;
        this.setState({
            val : text
        })
    }
    render() {
        return (
            <div>
                <input type="text"  value={this.state.val} onChange={this.henderChange}></input>
                <button onClick={()=>{
                    console.log(this.state)
                }}>获取state内容</button>
            </div>
        )
    }
}
```

```js
import React, { Component } from 'react'

export default class NumberInput extends Component {
    state = {
        val: '',
        sex : "male",
        chooseLoves : [], // 爱好
        loves : [
            { value: "football", text: "足球" },
            { value: "basetball", text: "篮球" },
            { value: "movie", text: "电影" },
            { value: "music", text: "音乐" },
            { value: "other", text: "其他" },
        ],
        city : "heyuan"
    }
    henderChange = (e) => {
        let val = e.target.value;
        let name = e.target.name;
        if(e.target.type === 'checkbox'){
            // 选中
            if(e.target.checked){
                val = [...this.state.chooseLoves, val]
            }else{
                val = this.state.chooseLoves.filter(ele => ele !== val)
            }
        }
        this.setState({
            [name] : val
        })
    }

    // 爱好的多选框
    getLoveCheckBoxes(){
        var bs = this.state.loves.map(ele => {
            return (<label key={ele.value}>
                <input type="checkbox" name="chooseLoves" checked={this.state.chooseLoves.includes(ele.text)} id="" value={ele.text} onChange={this.henderChange}/>
                {ele.text}
            </label>)
        })
        return bs;
    }

    render() {
        var bs = this.getLoveCheckBoxes();
        return (
            <div>
                {/* 文本框 */}
                <p>
                    <input type="text" name="val" value={this.state.val} onChange={this.henderChange}></input>
                </p>
               
               {/* 单选框 */}
                <p>
                    <label>
                        <input type="radio" name="sex" value="male" checked={this.state.sex === 'male'} onChange={this.henderChange} />
                        男
                    </label>
                    <label>
                        <input type="radio" name="sex" value='famale' checked={this.state.sex === 'famale'  } onChange={ this.henderChange } />
                        女
                    </label>
                </p>
                
                {/* 多选框 */}
                <p>
                    {bs}
                </p>

                {/* 下拉列表 */}
                <p>
                    <select name="city" id="" value={this.state.city} onChange={this.henderChange}>
                        <option value="beijing">北京</option>
                        <option value="heyuan">河源</option>
                        <option value="shenzhen">深圳</option>
                        <option value="guangzhou">广州</option>
                    </select>
                </p>

                <button onClick={() => {
                    console.log(this.state)
                }}>获取state内容</button>
            </div>
        )
    }
}

```