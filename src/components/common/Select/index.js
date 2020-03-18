import React from 'react'
import PropTypes from "prop-types"
import utils from "./../../util"

export default function Select(props) {
    const handleChange = (e) => {
        props.onChange && props.onChange(e.target.value)
    }

    var getCheckBoxes = () =>{
         return props.datas.map(it => (     
             <option 
                value={it.value}
                key={it.value}   
            >
                 {it.text}
             </option>
         ))
    }

    var bs = getCheckBoxes();
    return (
        <div>
            <select value={props.chooseDatas}
             name={props.name}
             onChange={handleChange}
             >
                {bs}
            </select>
        </div>
    )
}

Select.propTypes = {
    datas : utils.groupDatas,
    name : PropTypes.string,
    chooseDatas : PropTypes.string,
    onChange : PropTypes.func,
}