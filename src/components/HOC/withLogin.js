import React from 'react'

export default function withLogin(Comp) {
    return class Login extends React.Component{
        render(){
            if(this.props.isLogin){
                return <Comp {...this.props}/>
            }
            return null;
        }
    }
}
