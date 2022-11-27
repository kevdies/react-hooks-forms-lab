import React, { useState } from "react";
import { v4 as uuid } from "uuid";

//create a new item with the target values of the submit form
//handle the submit event
//us that submit data thats held in state to make a new object
//ref side for obj keys values
//
//add that new item object to the list of items
//via a callback function named onItemFormSubmit
//itemFormSubmit is passed down as a prop from where out items are stored
//add new ele to an array in state.  use spread setArray([...array, ele])
function ItemForm({ onItemFormSubmit }) {
  const [itemCategory, setItemCategory] = useState("Produce");
  const [itemName, setItemName] = useState("")

  function handleCategoryChange(event) {
    if (event.target.value !== itemCategory) {
      setItemCategory(event.target.value);
    }
  }

  function itemNameChange(event) {
    if (event.target.value !== itemName) {
      setItemName(event.target.value);
    }
  }

  function handleSubmitEvent(event) {
    event.preventDefault();
    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory,
    }
    onItemFormSubmit(newItem);
  }


  return (
    <form
      className="NewItem"
      onSubmit={handleSubmitEvent}
    >
      <label>
        Name:
        <input
          type="text"
          name={itemName}
          onChange={itemNameChange}
        />
      </label>

      <label>
        Category:
        <select
          name={itemCategory}
          onChange={handleCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
