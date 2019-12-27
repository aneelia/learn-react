import React, {useEffect, useState} from 'react';
import TodoItem from "./TodoItem"
import Button from './Button'

const todo = [{ name: 'Action 1', checked: false, id: 1},
    { name: 'Action 2', checked: false, id: 2},
    { name: 'Action 3', checked: false, id: 3}]

 const TodoListWithHooks  = () => {
    const [elements, setElements] = useState([])
     useEffect(() => setElements(todo),[])

    const handleCheck = ({ name, checked, id }) => {
        const time = new Date()
        console.log(`Action "${name}" was changed at ${time.toLocaleTimeString()}`)

        const elems = elements.map(item => item.id === id ? ({...item, checked: !checked }) : item)

        setElements(elems)
    };

   function handleClick(){
        let count = 0
        elements.forEach(item => item.checked && count++)
        console.log(`Finished tasks: ${count}`)
    }

    return (
        <>
            <div className="todo-list">
                {elements.map((item) => (
                    <TodoItem key={item.id} handleCheck={handleCheck}>{item}</TodoItem>
                ))}
            </div>
            <div className="btn-wrapper">
                <Button handleClick={handleClick} />
            </div>
        </>
     )
}

export default TodoListWithHooks;
