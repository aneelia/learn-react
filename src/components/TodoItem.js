import React from "react"

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
        };
    };

    handleCheck = (children) => {
        const time = new Date()
        console.log(`Action "${children}" was changed at ${time.toLocaleTimeString()}`)
        this.setState({checked: !this.state.checked});
    };

    render() {
        const { children } = this.props;
        return (
            <div className="todo-item">
                <input
                    type="checkbox"
                    defaultChecked={this.state.checked}
                    onChange={e => this.handleCheck(children)}
                />
                <span>{children}</span>
            </div>
        );
    }
}

export default TodoItem