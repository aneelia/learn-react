import React from 'react';
import styled from "styled-components";
import TodoItem from "./TodoItem"
import Button from './Button'

const todo = ['Action 1', 'Action 2','Action 3' ]

const StyledTodoList = styled.div`
  background-color: white;
  margin: auto;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #efefef;
  box-shadow:
    /* The top layer shadow */
          0 1px 1px rgba(0,0,0,0.15),
            /* The second layer */
          0 10px 0 -5px #eee,
            /* The second layer shadow */
          0 10px 1px -4px rgba(0,0,0,0.15),
            /* The third layer */
          0 20px 0 -10px #eee,
            /* The third layer shadow */
          0 20px 1px -9px rgba(0,0,0,0.15);
  padding: 30px;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`

class List extends React.Component {
    render() {
        return (
            <>
                <StyledTodoList>
                    {todo.map((item, index) => (
                        <TodoItem key={index}>{item}</TodoItem>
                    ))}
                </StyledTodoList>
                <ButtonWrapper>
                    <Button />
                </ButtonWrapper>
            </>
        )
    }
}

export default List;
