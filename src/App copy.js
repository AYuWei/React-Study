import React, { Component } from 'react'

var isE ;
function CompA(){
   
    return (
        <div>
            <h6 onClick={(e)=>{
                console.log(e === isE); // 判断为true
                console.log("我是h6中的点击事件！！！")
            }}>我是CompA中的h6元素
                <span onClick={(e)=>{
                     isE = e;
                    console.log("我是span元素")
                }}>  =======我是span元素</span>
            </h6>
        </div>
    )
}

export default class App extends Component {
    render() {
        return (
           <div >
               <p>我是App中的P元素！</p>
               <CompA />
           </div>
        )
    }
}
