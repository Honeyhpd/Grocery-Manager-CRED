const express = require('express');
const router = express.Router();
const Item = require('../models/Item'); // adjust path as needed

// GET all items
router.get('/', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error fetching items' });
  }
});

// POST add new item
router.post('/', async (req, res) => {
  const { text, quantity } = req.body;

  if (!text || !quantity) {
    return res.status(400).json({ message: 'Text and quantity are required' });
  }

  try {
    const newItem = new Item({ text, quantity });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error adding item' });
  }
});

// PUT update item by id
router.put('/items/:id', async (req, res) => {
  const { text, quantity } = req.body;
  try {
    const updated = await Item.findByIdAndUpdate(req.params.id, { text, quantity }, { new: true });
    if (!updated) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(updated);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error updating item' });
  }
});

// DELETE item by id
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Item.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json({ message: 'Deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error deleting item' });
  }
});

module.exports = router;