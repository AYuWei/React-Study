import React, { useState } from 'react'

export default function App() {
    const [visible, setVisible] = useState(true)
    const [N, setN] = useState(0)
    return (
        <div>
            <p style={{display: visible ? 'block' : "none"}}>
                <button onClick={() => {
                    N > 0 && setN(N - 1)
                }}>-</button>
                <span>{N}</span>
                <button onClick={() => {
                    setN(N + 1)
                }}>+</button>
            </p>
            <button onClick={()=>{
                setVisible(!visible)
            }}>显示/隐藏</button>
        </div>
    )
}
