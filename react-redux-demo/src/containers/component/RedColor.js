import React,{PureComponent} from 'react'
import {connect} from 'react-redux'
import  {changeColor} from '../../actions/colorPage'
const mapDispatchToProps=(dispatch)=>({
    handleClick:(data)=>dispatch(changeColor(data))
})

class RedColor extends  PureComponent{


    render(){
        return <button  onClick={()=>this.props.handleClick("red")}>红色</button>
    }
}

export default connect('',mapDispatchToProps)(RedColor)