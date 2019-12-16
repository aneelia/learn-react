import React from 'react';

class UserInfo extends React.Component {
    state = {
        username: 'John Doe',
        isFetching: false,
    }

    componentDidMount() {
        // show different variants
        const username = this.props.username || this.state.username;

        if (!this.state.isFetching) {
            this.fetchData(username);
        }
    }

    // fetch request mock
    fetchData(username) {
        this.setState({ isFetching: true });

        this.timerID = setTimeout(
            () => this.setUserInfo(username),
            2000
        )
    }

    setUserInfo = (username) => {
        this.setState({ username, isFetching: false})
    }

    componentWillUnmount() {
        clearTimeout(this.timerID)
    }

    render() {
        if (this.state.isFetching) {
            return (
                <div>Loading...</div>
            )} else {
            return(<div>
                Username is {this.state.username}
            </div>
            )}
    }
}

class SharedProp extends React.Component {
    render() {
        const user = 'Margaret Mitchell'

        return (
            <div>
                {this.props.render({ username: user })}
            </div>
        );
    }
}

class Container extends React.Component {
    render() {
        return (
            <SharedProp
                render={({ username }) => {
                    return (
                        <UserInfo username={username} />
                    )
                }}
            />
        );
    }
}

export default Container