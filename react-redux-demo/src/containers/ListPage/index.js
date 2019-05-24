import React,{PureComponent} from 'react'
import {connect} from 'react-redux'


class List extends PureComponent{

render(){
    return <div>
        <button>获取列表</button>
    </div>
}
}

export default connect()(List)