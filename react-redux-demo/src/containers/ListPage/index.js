import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { getList ,reverseList} from '../../actions/listPage'

const mapStateToProps = (state) => ({
    listPage: state.get('listPage')
})

/*注意这里getList()返回的是一个函数。而默认的dispatch接受一个对象形式的action。所以代码会报错

解决办法： 使用名为redux-thunk的中间件(具体用法参考根目录index.js中createStore)。这样dispatch可以接受一个函数。
此时action会经过redux-thunk处理。先执行这个函数。待函数返回后再发送一个action.
*/
const mapDispatchToProps = (dispatch) => ({
    getList: (data) => dispatch(getList(data)),
    reverseList: () => dispatch(reverseList())
})
class List extends PureComponent {

    handleClick = () => {
        this.props.history.push({
            pathname: "/",
            state: {
                "test": "1111111111"
            }
        })
    }

    render() { 
        let data  = this.props.listPage.toJS().data
        return <div>
            <button onClick={() => this.props.getList()}>获取列表</button>
            <button onClick={this.handleClick}>返回</button>
            <div>{data.map(item => (<div key={item}>{item}</div>))}</div>
            {data.length > 0 && <button onClick={()=>this.props.reverseList()}>倒序列表</button>}
        </div>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)