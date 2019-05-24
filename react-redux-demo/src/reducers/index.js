//  当有多个页面的时候， 这种写法就不合适了
//  const initState = {
//     color: 'black'
// }

// export default function (state = initState, action) {
//     switch (action.type) {
//         case "Chage_Color":
//             return Object.assign({}, state, { color: action.payload })
//         default: return { ...state }
//     }

// }

/*当有多个页面的时候，这里应该作为一个入口，引入各页面的reducer。 各页面的reducer只接受他负责的state中的部分属性

可以利用redux提供的一个函数  combineReducers
*/
import {combineReducers} from 'redux'
import colorPage from './colorPage'


/*  这里以colorPage为例
 combineReducers会在state上增加colorPage属性。传给colorPage这个reducer的状态也是state.colorPage,
 同时在该页面上操作的state会映射在state.colorPage上
 在containers/Index/index.js中获取color值得方式也要做相应的改变（ color: state.color->color: state.colorPage.color）
 */
const reducer=combineReducers({
    colorPage     
})

export default reducer