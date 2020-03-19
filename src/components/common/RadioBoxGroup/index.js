import React from 'react'
import PropTypes from "prop-types"
import utils from "./../../util"

export default function RadioBoxGroup(props) {
    const handleChange = (e) => {
        props.onChange && props.onChange(e.target.value, e.target.name, e);
    }
    return (<label>
        <input
            type="radio"
            name={props.name}
            value={props.info.value}
            checked={props.chooseDatas.includes(props.info.value)}
            onChange={handleChange}
        />
        {props.info.text}
    </label>)
}

RadioBoxGroup.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    info : utils.singleData
}