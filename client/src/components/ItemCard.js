import React, { useState } from "react";
import './ItemCard.css';

function ItemCard({ index, text, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(text.text);
  const [newQuantity, setNewQuantity] = useState(text.quantity);

  const handleUpdate = () => {
    if (newText.trim() && newQuantity.trim()) {
      onUpdate(text._id, { text: newText, quantity: newQuantity });
      setIsEditing(false);
    }
  };

  return (
    <div className="item-card">
      {isEditing ? (
  <div className="item-row">
    <span>{index + 1}</span>
    <input
      type="text"
      value={newText}
      onChange={(e) => setNewText(e.target.value)}
    />
    <input
      type="number"
      value={newQuantity}
      onChange={(e) => setNewQuantity(e.target.value)}
    />
    <div className="actions">
      <button className="save-btn" onClick={handleUpdate}>Save</button>
    </div>
  </div>
) : (
  <div className="item-row">
    <span>{index + 1}</span>
    <span>{text.text}</span>
    <span>{text.quantity}</span>
    <div className="actions">
      <button className="edit-btn" onClick={() => setIsEditing(true)}>Edit</button>
      <button className="delete-btn" onClick={() => onDelete(text._id)}>Delete</button>
    </div>
  </div>
)}
    </div>
  );
}

export default ItemCard;