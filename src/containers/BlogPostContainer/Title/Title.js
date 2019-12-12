import React from 'react';
import './Title.css'
import PropTypes from 'prop-types'

export default function Title({ children }) {
    return <h2 className="title-color background">{children} !!!</h2>
}

Title.propTypes = {
    children: PropTypes.string
}

