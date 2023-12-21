import React, { useRef, useEffect } from "react";

// Importing the CSS styles
import "./items.css";

function Item({ inputCount, onEnterPress }) {

  const lastInputRef = useRef(null);

  // useEffect hook to focus on the last input whenever inputCount changes
  useEffect(() => {
    if (lastInputRef.current) {
      lastInputRef.current.focus();
    }
  }, [inputCount]); 

  // Focusing on the last input when the "Enter" key is pressed
  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      onEnterPress();
    }
  };

// Creating an array of input elements based on the value of inputCount 
const inputs = Array.from({ length: inputCount }, (_, index) => (
  <input
    key={index} // Unique key
    type="text" 
    placeholder={`Item ${index + 1}`}
    ref={index === inputCount - 1 ? lastInputRef : null} 
    onKeyUp={handleKeyUp} 
  />
));

  return (
    <>
      <div className="itemContainer">
        <h4>Items</h4>
        <div>{inputs}</div>
      </div>
      <p>No. of Items: {inputCount}</p>
    </>
  );
}

// Exporting the Item component as the default export
export default Item;
