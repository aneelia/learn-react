import React from 'react';
import styled from 'styled-components/macro';

const StyledTodoItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 30px 20px 0;
  width: 70%;
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
  margin-right: 10px;
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
      `Action "${children}" was changed at ${time.toLocaleTimeString()}`
    );
    this.setState({ checked: !this.state.checked });
  };

  render() {
    const { children } = this.props;
    return (
      <StyledTodoItem>
        <StyledInput
          type="checkbox"
          defaultChecked={this.state.checked}
          onChange={e => this.handleCheck(children)}
        />
        <span>{children}</span>
      </StyledTodoItem>
    );
  }
}

export default TodoItem;
