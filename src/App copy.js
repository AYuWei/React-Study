import React,{useState, useEffect} from 'react'

export default function App() {
    const [N, setN] = useState(0);
    useEffect(()=>{
        console.log("使用：副作用")
        document.title=N;
    })
    return (
        <div>
            <span>{N}</span>
            <button onClick={()=>{
                setN(N + 1)
            }}>+</button>
        </div>
    )
}
