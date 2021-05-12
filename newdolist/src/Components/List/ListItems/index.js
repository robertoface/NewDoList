import React from "react";

function ListItems({ text, deleteItems, index }) {
  return (
    <>
      <button onClick={() => deleteItems(index)}> O </button>
    </> //deleteItems used to have 2 parameters, text and index. Here button doesnt make sense, although it's now valid.
  );
}

export default ListItems;

//delete this whole component? Now redundant.
// nuke from orbit if so
//It's kind of working now
