import React, { useState, useEffect } from "react";
import './App.css';
import AddItem from "./components/AddItem";
import ItemList from "./components/ItemList";
import {
  getItems,
  addItem as apiAddItem,
  deleteItem as apiDeleteItem,
  updateItem as updateItemAPI,
} from "./api";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems()
      .then((res) => setItems(res.data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  const addItem = ({ text, quantity }) => {
    if (text.trim() === "" || quantity.trim() === "") return;

    apiAddItem({ text, quantity })
      .then((res) => setItems([...items, res.data]))
      .catch((err) => console.error("Add error:", err));
  };

  const deleteItem = (id) => {
    apiDeleteItem(id)
      .then(() => {
        setItems(items.filter((item) => item._id !== id));
      })
      .catch((err) => console.error("Delete error:", err));
  };

  const updateItem = async (id, updatedData) => {
    try {
      const res = await updateItemAPI(id, updatedData);
      const updatedList = items.map((item) =>
        item._id === id ? res.data : item
      );
      setItems(updatedList);
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  return (
    <div className="App">
      <h1>Grocery Manager</h1>
      <AddItem onAdd={addItem} />
      <ItemList  
        items={items}  
        deleteItem={deleteItem}  
        updateItem={updateItem}  
      />
    </div>
  );
}

export default App;