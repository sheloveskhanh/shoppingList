import React from 'react';
import ShoppingItem from './ShoppingItem';

function ShoppingList({ items, editItem, deleteItem }) {
  return (
    <ul>
      {items.map((item, index) => (
        <ShoppingItem
          key={index}
          item={item}
          editItem={(newName) => editItem(index, newName)}
          deleteItem={() => deleteItem(index)}
        />
      ))}
    </ul>
  );
}

export default ShoppingList;
