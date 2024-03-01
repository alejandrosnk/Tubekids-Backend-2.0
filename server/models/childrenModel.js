const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const children = new Schema({
  name: { type: String },
  pin: { type: String },
  avatar: { type: String },
  user: {type: String},
  age: {type: Number}
});

module.exports = mongoose.model('childrens', children);