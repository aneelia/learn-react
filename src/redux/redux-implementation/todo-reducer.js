function todoReducer(state, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    commpleted: false
                }
            ];
        case  'TOGGLE_TODO':
            return state.map(todo =>{
                if (todo.id === action.id) {
                    return { ...todo, completed: !todo.completed}
                }
                return todo
            })
        default:
            return state
    }
}

export default todoReducer;