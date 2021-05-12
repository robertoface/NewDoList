import React from "react";

function Input({ getNameText, getURLText, addButton }) {
  return (
    <div>
      <input 
        className="item-name"
        placeholder="List item here!" 
        onChange={getNameText} />
      <input 
        className="item-url"
        placeholder="URL goes here"
        onChange={getURLText} />
      <button onClick={addButton}>Add To List</button>
    </div>
  );
}

export default Input;
