const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  quantity: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Item', ItemSchema);