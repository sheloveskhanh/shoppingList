import React, { useState } from 'react';

function ShoppingItem({ item, editItem, deleteItem }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(item.name);
  const [isChecked, setIsChecked] = useState(false); 

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editItem(newName);
    setIsEditing(false);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); 
  };

  return (
    <li>
      {isEditing ? (
        <div className="edit-mode">
          <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div className="display-mode">
          <div className="item-details">
            <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} /> {item.name}
          </div>
          <div className="button-container">
            <button className="edit-button" onClick={handleEdit}>Edit</button>
            <button className="delete-button" onClick={deleteItem}>Delete</button>
          </div>
        </div>
      )}
    </li>
  );
}

export default ShoppingItem;
