import React from "react";

function Input({ getNameText, getURLText, getType, addButton }) {
  return (
    <div>
      <input 
        className="item-name"
        placeholder="List item here!" 
        defaultValue={null}
        onChange={getNameText} />
      <input 
        className="item-url"
        placeholder="URL goes here"
        defaultValue={null}
        onChange={getURLText} />
      <input
        className="item-type"
        placeholder="Select an option"
        defaultValue={null} />
        {// label for="type" Choose a car:
        }
        <select id="dropdown" name={getType}>
          <option value="guest">Guest</option>
          <option value="solo">Solo</option>
          <option value="group">Group</option>
          <option value="paired">Paired</option>
          <option value="other">Other</option> 
        onChange={getType} </select>
        <input 
        className="item-type"
        placeholder="Select Type"
        defaultValue={null}
        onChange={getURLText} />
      <button onClick={addButton}>Add To List</button>
    </div>
  );
}

export default Input;
