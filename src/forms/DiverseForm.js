import React from 'react';
import UncontrolledComponent from './UncontrolledComponent';
import './style.css';

class DiverseForm extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.componentRef = React.createRef();

    this.state = { isLie: false, statement: '' };
  }

  handleChange = event => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    const { isLie, statement } = this.state;

    alert(`Ложно ли утверждение: ${statement}? Ответ: ${isLie ? 'Да' : 'Нет'}`);
    event.preventDefault();
  };

  handleClick = () => {
    // 1 - log input value
    // console.log(this.inputRef.current.value);

    // 2 - see the differences between DOM and React.Component elements
    console.log(this.inputRef.current);
    console.log(this.componentRef.current);
  };

  render() {
    return (
      <div>
        <h1>Forms</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Введите утверждение:
            <input
              name="statement"
              type="text"
              value={this.state.statement}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Ложно ли утверждение выше?
            <input
              name="isLie"
              type="checkbox"
              checked={this.state.isLie}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Никакого контроля!
            <input ref={this.inputRef} type="text" value="baaaad input" />
          </label>

          <label>
            Абсолютная анархия
            <UncontrolledComponent ref={this.componentRef} />
          </label>

          <button onClick={this.handleClick}>Отправка формы</button>
        </form>
      </div>
    );
  }
}

export default DiverseForm;
