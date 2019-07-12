
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Ahorcado
let User = new Schema({
  
  id: {
    type: Number
  },
    name: {
      type: String
    },
    last_name: {
      type: String
    },
    email: {
      type: String
    },
    code_contry:{
      type: String
    },
    address:{
      type: String
    },
    phone:{
      type: Number
    }

},{
    collection: 'user'
});

module.exports = mongoose.model('User', User);