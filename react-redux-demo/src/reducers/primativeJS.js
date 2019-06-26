 
 const initState = {
     value:0
 }

export default function (state = initState, action) {
    switch (action.type) {
        case "ADD":
            return {...state,value:action.payload}
            // return Object.assign({}, state, { color: action.payload })
        default: return state
    }

}