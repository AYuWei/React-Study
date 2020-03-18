import React from 'react'
import PropTypes from "prop-types"

export class A{

}
export class B extends A{

}

export default function ValidationComp(props) {

    const K = props.k;
    return (
        <div>
           {props.a}
           {props.b}
           <K />
        </div>
    )
   
}
 // 类型验证
ValidationComp.propTypes = {
    a : PropTypes.number.isRequired , // a : 必须是一个number类型，而且必填
    b : PropTypes.string.isRequired , // b ： 必须是一个字符串类型，且必填
    c : PropTypes.array, // c ： 必须是一个数组类型
    d : PropTypes.object, // d ：必须是一个对象类型
    e : PropTypes.any , // e ： 是任意类型的
    f : PropTypes.bool, // f : 为布尔类型
    j : PropTypes.symbol,  // j : 必须是Symbol类型
    h : PropTypes.func, // h ： 必须是函数类型

    // -----------------------------------------
    i : PropTypes.node, // i : 必须是可以被渲染的内容
    g : PropTypes.element, // g : 必须是React元素
    k : PropTypes.elementType , // k ：必须是React元素类型。
    l : PropTypes.instanceOf(A), // l : 必须是A的实例
    sex : PropTypes.oneOf(['男',"女"]), // sex : 枚举 sex必须具有威子
    n : PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // n 属性类型必须是数组中的其中一个 
    m : PropTypes.arrayOf(PropTypes.number), // n 必须满足的类型
    p : PropTypes.objectOf(PropTypes.number), // 每一项属性值必须满足要求
    q : PropTypes.shape({  //属性必须满足该对象的要求
        name : PropTypes.string.isRequired,
        age : PropTypes.number , 
        address : PropTypes.shape({
            province : PropTypes.string,
            city : PropTypes.string
        })
    }),

    // 自定义检测，参一：整个props, 参二，名字如score, 参三：组件名
    score : function(props, propName, componentName){
        const val = props[propName];
        // 必填
        if(val === null || val === undefined){
            return new Error(`invalid prop ${propName} in ${componentName}，${propName} is Required`)
        }
        // 该属性必须是一个数字类型
        if(typeof val !== 'number'){
            return new Error(`invalid prop ${propName} in ${componentName}，${propName} is not a number`)
        }
        // 数据在 0 - 100
        if(val < 0 || val > 100){
            return new Error(`invalid prop ${propName} in ${componentName}，${propName} is 0 ~ 100`)
        }
    }
}
