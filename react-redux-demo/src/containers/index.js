import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeColor } from '../actions'
const mapStateToProps=(state)=>({
    color:state.color
})
const mapDispatchToProps=(dispatch)=>({
    handleClick:(data)=>dispatch(changeColor(data))
})

class Index extends Component {

    render() {
        return <div 
        onClick={()=>this.props.handleClick('blue')} 
        style={{color:this.props.color}}
        >变色</div>
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Index)