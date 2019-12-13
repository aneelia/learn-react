import React from "react"

const Button = ({ handleClick }) =>
  <button className="btn" onClick={handleClick}>
    Count active tasks
  </button>



export default Button