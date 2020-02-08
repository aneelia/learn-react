import React from 'react';

class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }
  componentDidMount() {
    // вызвать, когда компонент уже в DOM
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  componentWillUnmount() {
    // вызвать, когда компонент будет уже удален из DOM
    clearInterval(this.timerID);
  }

  render() {
    const { date } = this.state;

    return <div>{date.toLocaleTimeString()}</div>;
  }
}

export default Time;
