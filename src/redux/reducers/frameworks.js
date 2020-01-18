const initialState =  ['angular']

function frameworks(state = initialState, action) {
    switch (action.type) {
        case 'ADD_FRAMEWORK':
            return [...state,  action.payload]
            break;
        case 'DELETE_FRAMEWORK':
            return state
            break;
        default:
            return state
    }
}

export default frameworks;