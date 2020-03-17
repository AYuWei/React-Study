import React from "react"
import Modal from "./Modal"
export default class Test extends React.Component {
    state = {
        bg: "pink",
        isShowModal: true,
    }

    // 关闭蒙层 或显示蒙层
    onclose = () => {
        this.setState(res => ({
            isShowModal: !res.isShowModal
        }))
    }

    render() {
        return (
            <>
                {this.state.isShowModal ?
                    (<Modal onClose={this.onclose}>
                        <h1 style={{background:"#fff"}}>我是蒙层</h1>
                    </Modal>)
                    : null}
                <button onClick={()=>{
                    this.onclose()
                }}>显示蒙层</button>
            </>
        )
    }
}
