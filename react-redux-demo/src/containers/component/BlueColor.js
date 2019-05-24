import React,{PureComponent} from 'react'
import {connect} from 'react-redux'
import  {changeColor} from '../../actions/colorPage'
const mapDispatchToProps=(dispatch)=>({
    handleClick:(data)=>dispatch(changeColor(data))
})

class BlueColor extends  PureComponent{


    render(){
        return <button  onClick={()=>this.props.handleClick("blue")}>蓝色</button>
    }
}

export default connect('',mapDispatchToProps)(BlueColor)