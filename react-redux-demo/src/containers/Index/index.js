import React, { Component } from 'react'
import { connect } from 'react-redux'
import RedColor from '../component/RedColor'
import BlueColor from '../component/BlueColor'
import ToOtherPage from '../component/ToOtherPage'
const mapStateToProps = (state) => ({
    // color: state.color
    // color: state.colorPage.color
    colorPage:state.get('colorPage')
})

class Index extends Component {
    toPage = () => {
        const path = {
            pathname: "/list",
            state: "test-state", //参数会存储在内存中。可以在新页面中window.history.state.state中查看。router会从中取出放到this.props.loctionz中
            search: "a=123"    //新页面的url中会拼接“?a=123”
        }
        this.props.history.push(path)  
    }
    render() {

        // console.log("color",this.props.color.toJS())
        let colorPage=this.props.colorPage.toJS()
        return <div  >
            {/* <div style={{ color: this.props.color }}>这里是内容，颜色会随着点击按钮改变.只涉及一些简单操作。不涉及接口等异步操作</div> */}
            <div style={{ color:colorPage.color }}>这里是内容，颜色会随着点击按钮改变.只涉及一些简单操作。不涉及接口等异步操作</div>
          
            <RedColor />
            <BlueColor />
            <ToOtherPage name="去列表页" url="/list"/>
            {/* <button onClick={this.toPage}>去列表页</button> */}
        </div>
    }
}
export default connect(mapStateToProps)(Index)