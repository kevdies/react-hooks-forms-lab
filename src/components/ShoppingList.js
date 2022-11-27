import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (search.toLowerCase() === item.name.toLowerCase()) {
      return item.name
    }
    else {
      if (item.category === selectedCategory) {
        return selectedCategory;
      }
    }
  });


  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter
        onCategoryChange={handleCategoryChange}
        search={search}
        onSearchChange={setSearch}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
