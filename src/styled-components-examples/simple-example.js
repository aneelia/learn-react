import React from 'react';
import styled, { css } from 'styled-components';

const MyHoverStyle = css`
  &:hover {
    background-color: red;
  }
`;

const MyFirstComponent = styled.a`
  text-decoration: none;
  ${MyHoverStyle}
`;

const MyFirstButton = styled.button`
  ${MyHoverStyle}
`;

const StyledComponents = () => (
  <>
    <MyFirstComponent href="#">MyFirstComponent</MyFirstComponent>
    <br />
    <MyFirstButton>MyFirstButton</MyFirstButton>
  </>
);

export default StyledComponents;
