 //这里用来对改变颜色的页面做管理
 import Immutable from 'immutable'
 const initState = Immutable.fromJS({
    color: 'black'
})

export default function (state = initState, action) {
    switch (action.type) {
        case "Change_Color":
            return state.merge({color:action.payload})
            // return Object.assign({}, state, { color: action.payload })
        default: return state
    }

}