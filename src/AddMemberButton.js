import React, { useState } from 'react';

function AddMemberButton({ onAddMember }) {
  const [newMemberName, setNewMemberName] = useState('');

  const handleAddMember = () => {
    if (newMemberName.trim() === '') {
      return;
    }

    onAddMember(newMemberName);
    setNewMemberName('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter member's name"
        value={newMemberName}
        onChange={(e) => setNewMemberName(e.target.value)}
      />
      <button onClick={handleAddMember}>Add Member</button>
    </div>
  );
}

export default AddMemberButton;
