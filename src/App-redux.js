import React from 'react';
import { connect }  from 'react-redux';

class ReduxApp extends React.Component{
    handleClick(){
        console.log('clicked', this.inputValue.value)
        this.props.addElement(this.inputValue.value)
        this.inputValue.value = ''
    }

    render(){
        console.log(this.props)
        return (
            <div>
                <input type="text" ref={input => this.inputValue = input } />
                <button onClick={this.handleClick.bind(this)}>Click me</button>
                <ul>
                    {this.props.books.map(item => (
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
        books: state.books,
        films: state.films,
    }),
    // mapDispatchToProps
    dispatch => ({
        addElement: (elem) => {
            dispatch({ type: 'WRITE', payload: elem })
        }
    })
)(ReduxApp)

