import React, { useState } from 'react';
import ShoppingList from './ShoppingList';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [newItemName, setNewItemName] = useState('');
  const [isAddingItem, setIsAddingItem] = useState(false);

  const [members, setMembers] = useState([]); 
  const [newMemberName, setNewMemberName] = useState('');
  const [isAddingMember, setIsAddingMember] = useState(false); 

  const addItem = () => {
    if (newItemName.trim() === '') {
      return;
    }

    setItems([...items, { name: newItemName }]);
    setNewItemName('');
    setIsAddingItem(false);
  };

  const editItem = (index, newName) => {
    const updatedItems = [...items];
    updatedItems[index].name = newName;
    setItems(updatedItems);
  };

  const deleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const addMember = () => {
    if (newMemberName.trim() === '') {
      return; 
    }

    setMembers([...members, { name: newMemberName }]);
    setNewMemberName(''); 
    setIsAddingMember(false); 
  };

  const deleteMember = (index) => {
    const updatedMembers = members.filter((_, i) => i !== index);
    setMembers(updatedMembers);
  };

  return (
    <div>
      <h1>Shopping List</h1>
      <p>Owner: Khanh</p>
      <p>
        Members: {members.map((member, index) => (
          <span key={index}>
            {member.name}
            <i
              className="fas fa-times-circle delete-button-member"
              onClick={() => deleteMember(index)}
            ></i>
            {index < members.length - 1 ? ', ' : ''}
          </span>
        ))}
      </p>
      {isAddingItem ? (
        <div>
          <input
            type="text"
            placeholder="Enter item name"
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
          />
          <button className="add-button" onClick={addItem}>
            Add
          </button>
        </div>
      ) : (
        <button className="add-new-item-button" onClick={() => setIsAddingItem(true)}>
          Add New Item
        </button>
      )}

      {/* Add Member button */}
      <button className="add-member-button" onClick={() => setIsAddingMember(!isAddingMember)}>
        Add Member
      </button>

      {/* Member input */
      isAddingMember && (
        <div>
          <input
            type="text"
            placeholder="Enter member's name"
            value={newMemberName}
            onChange={(e) => setNewMemberName(e.target.value)}
          />
          <button onClick={addMember}>Save</button>
        </div>
      )}

      <ShoppingList items={items} editItem={editItem} deleteItem={deleteItem} />
    </div>
  );
}

export default App;
