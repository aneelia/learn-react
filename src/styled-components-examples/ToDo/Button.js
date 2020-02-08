import React from 'react';
import styled from 'styled-components/macro';

const StyledButton = styled.button`
  font: inherit;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  margin: 2px 0;
  border: solid 1px transparent;
  border-radius: 4px;
  padding: 0.5em 1em;
  color: #ffffff;
  background-color: #9555af;
  cursor: pointer;

  &:hover {
    color: #9555af;
    border-color: currentColor;
    background-color: white;
  }
`;

class Button extends React.Component {
  handler = () => {
    console.log(`Finished task: `);
  };
  render() {
    return <StyledButton>Count finished tasks</StyledButton>;
  }
}

export default Button;
