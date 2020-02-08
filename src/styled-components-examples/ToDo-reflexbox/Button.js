import React from 'react';
import { Box } from 'reflexbox';
import styled from 'styled-components/macro';

const StyledButton = styled.button`
  font: inherit;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  border: solid 1px transparent;
  border-radius: 4px;
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
    return (
      <Box as={StyledButton} p="0.5em 1em" m="2px 0">
        Count finished tasks
      </Box>
    );
  }
}

export default Button;
