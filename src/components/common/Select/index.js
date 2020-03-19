import React from 'react'
import PropTypes from "prop-types"
import utils from "./../../util"
import withDataGroup from '../hoc/withDataGroup'

class Option extends React.Component {
    static propTypes = {
        info: utils.singleData
    }
    render() {
        return <option
            value={this.props.info.value}
        >
            {this.props.info.text}
        </option>
    }
}

const OptGroup = withDataGroup(Option)

export default function Select(props) {
    console.log(props)
    return (
           <select name={props.name}
            onChange={(e) => {
                props.onChange && props.onChange(e.target.value)
            }}
           >
               <OptGroup {...props}></OptGroup>
           </select>
    )
    // return null
}


Select.propTypes = {
    datas: utils.groupDatas,
    name: PropTypes.string,
    chooseDatas: PropTypes.string,
    onChange: PropTypes.func,
    info: utils.singleData
}