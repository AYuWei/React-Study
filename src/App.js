import React, { useState } from 'react'

window.arr = [];
export default function App() {
    const [N, setN] = useState(0)
    return (
        <div>
             <button onClick={() => {
                    N > 0 && setN(N - 1)
                }}>-</button>
                <span>{N}</span>
                <button onClick={() => {
                    window.arr.push(setN)
                }}>+</button>
        </div>
    )
}
