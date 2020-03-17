import React from 'react'

export default function CheckBoxGroup(props) {
    const handleChange = (e) => {
        let newArr;
        if(e.target.checked){
            newArr = [...props.chooseDatas, e.target.value];
        } else {
            newArr = props.chooseDatas.filter(it => it !== e.target.value);
        }
        props.onChange && props.onChange(newArr,props.name, e);
    }

    var getCheckBoxes = () =>{
         return props.datas.map(it => (
             <label  key={it.value}>
                 <input 
                    type="checkbox" 
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
