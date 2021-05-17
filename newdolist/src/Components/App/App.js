import React, { useState } from "react";
import "./App.css";
import Input from "../Input/index";
import List from "../List/Index";
// import ListItems from "../List/ListItems/index";

let myList = ["Wear a mask", "Wash your hands", [2, 3, "up", true, "Stay home"]]; // modify this please

function App() {
  const [nameText, setNameText] = useState("");
  const [URLText, setURLText] = useState("");
  const [list, setList] = useState(myList);

  function getNameText(e) {
    let textValue = e.target.value;
    setNameText(textValue);
    console.log({textValue});
  }
  function getURLText(e) {
    let URLValue = e.target.value;
    setURLText(URLValue);
    console.log({URLValue});
  }

  function addButton() {
    let addItemToList = [...list, [nameText, URLText]];
    setList(addItemToList);
    console.log(addItemToList);
    console.log([nameText, URLText]);
  }

  function setLst(item) {
    console.log((item));
    return setList(item);
  }

  return (
    <div>
      <Input getNameText={getNameText} getURLText={getURLText} addButton={addButton} />
      <List list={list} setLst={setLst} />
    </div>
  );
}

export default App;
