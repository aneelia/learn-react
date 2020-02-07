import React from 'react';
import TodoItem from './TodoItem';
import Button from './Button';
import './style.css';

const todo = ['Action 1', 'Action 2', 'Action 3'];

class List extends React.Component {
  render() {
    return (
      <>
        <div className="todo-list">
          {todo.map((item, index) => (
            <TodoItem key={index}>{item}</TodoItem>
          ))}
        </div>
        <div className="btn-wrapper">
          <Button />
        </div>
      </>
    );
  }
}

export default List;
