import React from 'react';
import './style.css';

class Button extends React.Component {
  handler = () => {
    console.log(`Finished task: `);
  };
  render() {
    return <button className="btn">Count finished tasks</button>;
  }
}

export default Button;
