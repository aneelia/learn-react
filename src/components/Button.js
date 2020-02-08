import React from 'react';

const Button = ({ handleClick }) => (
  <button className="btn" onClick={handleClick}>
    Count finished tasks
  </button>
);

export default Button;
