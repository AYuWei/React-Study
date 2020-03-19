import React from 'react'
import PropTypes from 'prop-types'
import utils from "./../../util"

CheckBoxGroup.propTypes = {
    // datas : utils.groupDatas.isRequired,
    name : PropTypes.string,
    chooseDatas : utils.chooseDatas,
    info : utils.singleData.isRequired,
}

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
        //  return props.datas.map(it => (
        //      <label  key={it.value}>
        //          <input 
        //             type="checkbox" 
        //             name={props.name} 
        //             value={it.value}
        //             checked={props.chooseDatas.includes(it.value)}
        //             onChange={handleChange}
        //             />
        //          {it.text}
        //      </label>
        //  ))

        return (
            <label>
                <input 
                   type="checkbox" 
                   name={props.name} 
                   value={props.info.value}
                   checked={props.chooseDatas.includes(props.info.value)}
                   onChange={handleChange}
                   />
                   {props.info.text}
            </label>
        )
    }

    return getCheckBoxes();
}

