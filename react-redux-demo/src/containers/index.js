import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeColor } from '../actions'
import RedColor from './component/RedColor'
import BlueColor from './component/BlueColor'
const mapStateToProps=(state)=>({
    color:state.color
})

class Index extends Component {

    render() {
        return <div  > 
            <div style={{color:this.props.color}}>这里是内容，颜色会随着点击按钮改变</div>
            <RedColor/>
            <BlueColor/>
            </div>
    }
}
export default connect(mapStateToProps)(Index)