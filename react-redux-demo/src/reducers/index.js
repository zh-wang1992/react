const initState = {
    color: 'red'
}

export default function (state = initState, action) {
    switch (action.type) {
        case "Chage_Color":
            return Object.assign({}, state, { color: action.payload })
        default: return { ...state }
    }

}