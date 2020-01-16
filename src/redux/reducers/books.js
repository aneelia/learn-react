const initialState =  ['1']

export function books(state = initialState, action) {
    if(action.type === 'ADD_BOOK') {
        return [
            ...state,
            action.payload
        ]
    } else if (action.type === 'DELETE_BOOK') {
        return state
    }

    return state
}