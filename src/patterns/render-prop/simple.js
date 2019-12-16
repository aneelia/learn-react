import React from "react"

class SharedComponent extends React.Component {
    render() {
        return (
            <div>
                {this.props.render({ prop: 'my default prop' })}
            </div>
        );
    }
}

const RenderPropComponent = () => (
    <SharedComponent
        render={({ prop }) => (
            <h1>
                <b>{prop}</b>
            </h1>
        )}
    />
);

export default RenderPropComponent