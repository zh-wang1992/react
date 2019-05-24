import React, { Component } from 'react'
import { connect } from 'react-redux'
import RedColor from '../component/RedColor'
import BlueColor from '../component/BlueColor'
const mapStateToProps = (state) => ({
    // color: state.color
    color: state.colorPage.color
})



class Index extends Component {
    toPage = () => {
        this.props.history.push('/list')
    }
    render() {
        return <div  >
            <div style={{ color: this.props.color }}>这里是内容，颜色会随着点击按钮改变.只涉及一些简单操作。不涉及接口等异步操作</div>
            <RedColor />
            <BlueColor />
            <button onClick={this.toPage}>去列表页</button>
        </div>
    }
}
export default connect(mapStateToProps)(Index)