import React from 'react'
import types from "./../../util"

export default function withDataGroup(Comp) {
   
    return class WithComponent extends React.Component{
        static defaultProps = {
            datas : [],
        }
        static propTypes = {
            datas : types.groupDatas,
        }
        render(){
            const domElement = this.props.datas.map(ele => <Comp key={ele.value} info={ele} {...this.props}/>)
            return <>
            {domElement}
            </>
        }
    }
}
