import React from "react"
import './style.css'

class Button extends React.Component {
    render() {
        return (
            <button className="btn">
              Count active tasks
            </button>
        );
    }
}

export default Button