import React from 'react'

export default function RadioBoxGroup(props) {
    const handleChange = (e) => {
        props.onChange && props.onChange(e.target.value, e.target.name , e);
    }

    var getCheckBoxes = () =>{
         return props.datas.map(it => (
             <label  key={it.value}>
                 <input 
                    type="radio" 
                    name={props.name}
                    value={it.value}
                    checked={props.chooseDatas.includes(it.value)}
                    onChange={handleChange}
                    />
                 {it.text}
             </label>
         ))
    }

    var bs = getCheckBoxes();
    return (
        <div>
            {bs}
        </div>
    )
}
