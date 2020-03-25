import React ,{ useState } from 'react'

export default function App() {
    // const n = useState(0)
    // const N = n[0];
    // const setN = n[1];
    const [N, setN] = useState(0)
    return (
        <div>
            <button onClick={()=>{
                N >0 && setN(N - 1)
            }}>-</button>
            <span>{N}</span>
            <button onClick={()=>{
                setN(N + 1)
            }}>+</button>
        </div>
    )
}
