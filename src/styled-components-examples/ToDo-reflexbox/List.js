import React from 'react';
import styled from "styled-components/macro";
import { Flex } from 'reflexbox';
import TodoItem from "./TodoItem"
import Button from './Button'

const todo = ['Action 1', 'Action 2','Action 3' ]

const StyledTodoList = styled.div`
  background-color: white;
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
`

class List extends React.Component {
    render() {
        return (
            <>
                <Flex
                    as={StyledTodoList}
                    flexDirection="column"
                    alignItems="center"
                    width="50%"
                    m="auto"
                    p="30px">
                    {todo.map((item, index) => (
                        <TodoItem key={index}>{item}</TodoItem>
                     ))}
                </Flex>
                <Flex
                    justifyContent="center"
                    mt="20px">
                    <Button />
                </Flex>
            </>
        )
    }
}

export default List;
