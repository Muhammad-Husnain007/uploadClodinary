const mongoose = require('mongoose');

const apiSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String, 
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
});

const cloudModel = mongoose.model('clodinaryImage', apiSchema);

module.exports = cloudModel;
