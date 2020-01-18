const initialState = ['redux', 'react']

function libraries(state = initialState, action) {
    switch (action.type) {
        case 'ADD_LIBRARY':
            return [...state,  action.payload]
        case 'DELETE_LIBRARY':
            return state
        default:
            return state
    }
}

export default libraries