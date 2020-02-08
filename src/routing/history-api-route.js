import React from 'react';

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const NotFound = () => <div>404</div>;

class HistoryAPIRoute extends React.Component {
  state = { location: window.location };

  handleClick = event => {
    event.preventDefault();
    window.history.pushState(null, null, event.target.href);
    this.setState({ location: window.location });
  };

  handlePopState = () => {
    this.setState({ location: window.location });
  };

  componentDidMount() {
    window.addEventListener('popstate', this.handlePopState);
  }

  render() {
    let RouteItem;
    const { location } = this.state;

    switch (location.pathname) {
      case '/':
        RouteItem = Home;
        break;
      case '/about':
        RouteItem = About;
        break;
      default:
        RouteItem = NotFound;
    }

    return (
      <div>
        <ul>
          <li>
            <a href="/" onClick={this.handleClick}>
              Home
            </a>
          </li>
          <li>
            <a href="/about" onClick={this.handleClick}>
              About
            </a>
          </li>
        </ul>
        <RouteItem />
      </div>
    );
  }
}

export default HistoryAPIRoute;
