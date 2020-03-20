import React from "react"
import Banner from "./index.js"
import ImgSrc1 from "./img/1.jpg"
import ImgSrc5 from "./img/5.webp"
import ImgSrc2 from "./img/2.webp"
import ImgSrc3 from "./img/3.jpg"
import ImgSrc4 from "./img/4.jpg"


export default class Test extends React.Component{
    state = {
        ImgSrcs : [ImgSrc1,ImgSrc2,ImgSrc3,ImgSrc4,ImgSrc5]
    }
    render(){
        return <Banner width={520} ImgSrcs={this.state.ImgSrcs} />
    }
}