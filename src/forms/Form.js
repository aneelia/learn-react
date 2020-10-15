import React from 'react';
import './style.css';

class Form extends React.Component {
  state = { isLie: false, statement: '' };

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

          <button>Отправка формы</button>
        </form>
      </div>
    );
  }
}

export default Form;
