import createStore from "./create-store";
import todoReducer from "./todo-reducer";

const initialTodoItems = []

const store = createStore(todoReducer, initialTodoItems)

// add todo

store.dispatch({
    type: 'ADD_TODO',
    id: 1,
    text: 'Add todo item'
})

let state = store.getState()

console.log(state)

// toggle todo

store.dispatch({
    type: 'TOGGLE_TODO',
    id: 2
})

state = store.getState()

console.log(state)