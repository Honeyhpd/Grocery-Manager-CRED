import React from "react";
import ItemCard from "./ItemCard";
import './ItemCard.css';

function ItemList({ items, deleteItem, updateItem }) {
  return (
    <div className="item-list">
      {items.length > 0 && (
        <div className="item-header item-row">
          <span>S.No</span>
          <span>Product</span>
          <span>Qty</span>
          <span>Actions</span>
        </div>
      )}

      {items.length === 0 ? (
        <p>No items added</p>
      ) : (
        items.map((item, index) => (
          <ItemCard
            key={item._id}
            index={index}
            text={item}
            onDelete={deleteItem}
            onUpdate={updateItem}
          />
        ))
      )}
    </div>
  );
}

export default ItemList;