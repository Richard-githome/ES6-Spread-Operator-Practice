import React, { useState } from "react";

function App() {
const [inputItem, setInputItem] = useState("");
const [items, setAddedItem] = useState([]);

function handleInput(event) {
  const newInputItem = event.target.value;
  setInputItem(newInputItem);
}

function handleClick() {
  setAddedItem((prevItems) =>{return [...prevItems, inputItem]});
  setInputItem("");
}

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <div className="form">
        <input onChange={handleInput} value={inputItem} type="text" />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>

      <div>
        <ul>
          <li>A Item</li>
          {items.map((item) =>{ return <li>{item}</li>})}
        </ul>
      </div>
    </div>
  );
}

export default App;
