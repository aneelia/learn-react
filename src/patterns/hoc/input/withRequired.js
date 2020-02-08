import React from 'react';
import { InputGroup } from './inputGroup';

import './style.css';

const withRequired = (Component, requiredKeys) => {
  return class withRequired extends React.Component {
    constructor(props) {
      super(props);
      this.state = { isInvalid: false };
    }
    handleInput(event) {
      this.setState({ [event.target.name]: event.target.value });
    }
    handleClick() {
      const isInvalid = requiredKeys.some(key => !this.state[key]);
      this.setState({ isInvalid });
    }
    render() {
      return (
        <>
          <Component
            onChange={e => this.handleInput(e)}
            onClick={() => this.handleClick()}
          />
          {this.state.isInvalid ? 'Error' : null}
        </>
      );
    }
  };
};

export const InputWithNameValidation = withRequired(InputGroup, ['first_name']);
export const InputWithNameAndEmailValidation = withRequired(InputGroup, [
  'first_name',
  'email',
]);
