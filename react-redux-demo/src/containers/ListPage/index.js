import React,{PureComponent} from 'react'
import {connect} from 'react-redux'


class List extends PureComponent{
componentDidMount(){
    console.log("this.props",this.props)
}
handleClick=()=>{
    this.props.history.push({
        pathname:"/",
        state:{
            "test":"1111111111"
        }
    })
}
render(){
    return <div>
        <button>获取列表</button>
        <button onClick={this.handleClick}>返回</button>
    </div>
}
}

export default connect()(List)