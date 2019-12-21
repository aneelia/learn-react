import React from "react"

class SharedComponent extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

const enhancer = (Component) => {
    return class Enhancer extends React.Component {
        render() {
            return (
                <Component>
                    <h1>My HOC</h1>
                </Component>
            )
        }
    }
}

const SimpleHOC = enhancer(SharedComponent)

export default SimpleHOC;