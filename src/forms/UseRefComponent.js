import React, { useRef } from 'react';

function UseRefComponent() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus it!</button>
    </>
  );
}

export default UseRefComponent;
