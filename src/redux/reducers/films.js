const initialState =  ['11']

export function films(state = initialState, action) {
    if(action.type === 'ADD_FILM') {
        return [
            ...state,
            action.payload
        ]
    } else if (action.type === 'DELETE_FILM') {
        return state
    }

    return state
}