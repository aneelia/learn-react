import React from 'react';
import Title from '../Title/Title';
import Time from '../Time/Time';
import PropTypes from 'prop-types';

class BlogPost extends React.Component {
  state = { clicked: false };

  static defaultProps = {
    title: 'Default string',
  };

  static propTypes = {
    title: PropTypes.string,
  };

  handleClick = e => {
    this.setState(state => ({
      clicked: true,
    }));
  };

  render() {
    const { clicked } = this.state;
    const { title } = this.props;

    if (clicked) {
      return 'Clicked';
    }

    return (
      <div>
        <Title>{title}</Title>
        <Time />
        <button onClick={e => this.handleClick(e)}>Click me</button>
      </div>
    );
  }
}

export default BlogPost;
