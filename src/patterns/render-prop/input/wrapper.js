import React from 'react';
import { InputGroup } from './inputGroup';

import './style.css';

class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isInvalid: false };

    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleClick() {
    const { requiredKeys } = this.props;
    const isInvalid = requiredKeys.some(key => !this.state[key]);
    this.setState({ isInvalid });
  }
  render() {
    return (
      <>
        <div>
          {this.props.render({
            onChange: this.handleInput,
            onClick: this.handleClick,
          })}
        </div>
        {this.state.isInvalid ? 'Error' : null}
      </>
    );
  }
}

export const InputWithNameValidation = () => {
  return (
    <Wrapper
      requiredKeys={['first_name']}
      render={({ onClick, onChange }) => {
        return (
          <InputGroup onClick={() => onClick()} onChange={e => onChange(e)} />
        );
      }}
    />
  );
};

export const InputWithNameAndEmailValidation = () => {
  return (
    <Wrapper
      requiredKeys={['first_name', 'email']}
      render={({ onClick, onChange }) => {
        return (
          <InputGroup onClick={() => onClick()} onChange={e => onChange(e)} />
        );
      }}
    />
  );
};
