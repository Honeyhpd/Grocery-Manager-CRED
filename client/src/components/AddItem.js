import React, { useState } from "react";
import './AddItem.css';

function AddItem({ onAdd }) {
  const [text, setText] = useState("");
  const [quantity, setQuantity] = useState("");
  

  const handleAdd = (e) => {
    e.preventDefault(); // prevent page reload
    if (text.trim() && quantity.trim()) {
      onAdd({ text, quantity }); // send both fields as object
      setText("");
      setQuantity("");
    }
  };

  return (
    <form className="add-item-form" onSubmit={handleAdd}>
      <input
  type="text"
  placeholder="Item name"
  value={text}
  onChange={(e) => setText(e.target.value)}
  required
  pattern="^[A-Za-z\s]+$"
  title="Only Letters"
/>

      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddItem;