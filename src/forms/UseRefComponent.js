import React, { useRef } from 'react';

function UseRefComponent() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h1>Forms</h1>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus it!</button>
    </div>
  );
}

export default UseRefComponent;
