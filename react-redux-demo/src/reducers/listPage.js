import Immutable from 'immutable'

const initState = Immutable.fromJS({
    data: []
})

export default function (state = initState, action) {

    switch (action.type) {
        case "UPDATE_LIST":
            // return { ...state, data: action.payload }
            return state.merge({data:action.payload})
        case "REVERSE_LIST":
            //这里必须先将data复制出来。给一个新变量。 否则仍然操作data本身。页面不会重新渲染
            // let data = [...state.data]
            // return { ...state, data: data.reverse() }
            let res=[...state.get('data')]
            return state.merge({data:res.reverse()})

        default: return state
    }

}