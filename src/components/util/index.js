import PropTypes from "prop-types"
export default {    
    // 共用属性的约束
    children : PropTypes.node, // children必须是可渲染的元素
    groupDatas : PropTypes.arrayOf(PropTypes.shape({
        value : PropTypes.string.isRequired,
        text : PropTypes.string.isRequired
    })),
    chooseDatas : PropTypes.arrayOf(PropTypes.string)
}