import React from 'react';
import styled from 'styled-components/macro';
import { Flex, Box } from 'reflexbox';

const StyledTodoItem = styled.div`
  border-bottom: 1px solid #cecece;
  font-family: Roboto, sans-serif;
  font-weight: 100;
  font-size: 15px;
  color: #333333;

  &:first-child {
    padding-top: 0;
  }
`;

const StyledInput = styled.input`
  font-size: 30px;

  &:focus {
    outline: 0;
  }
`;

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }

  handleCheck = children => {
    const time = new Date();
    console.log(
      `Action "${children}" was changed at ${time.toLocaleTimeString()}`,
    );
    this.setState({ checked: !this.state.checked });
  };

  render() {
    const { children } = this.props;
    return (
      <Flex
        as={StyledTodoItem}
        justifyContent="flex-start"
        alignItems="center"
        p="30px 20px 0"
        width="70%"
      >
        <Box
          as={StyledInput}
          mr="10px"
          type="checkbox"
          defaultChecked={this.state.checked}
          onChange={e => this.handleCheck(children)}
        />
        <span>{children}</span>
      </Flex>
    );
  }
}

export default TodoItem;
