import React from 'react';
import { connect }  from 'react-redux';

class ReduxApp extends React.Component{
    render(){
        console.log(this.props)
        return (
            <div>
                <input type="text" />
                <button>Click me</button>
                <ul>
                    {this.props.testStore.map(item => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default connect(
    // mapStateToProps
    state => ({
        testStore: state
    }),
    // mapDispatchToProps
    dispatch => ({})
)(ReduxApp)

