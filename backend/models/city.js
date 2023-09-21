const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  state: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'State', // Reference to the State model
    required: true,
  },
  country: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Country', // Reference to the Country model
    required: true,
  },
  state: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'state', // Reference to the Country model
    required: true,
  },
  city: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'city', // Reference to the Country model
    required: true,
  },
});

const City = mongoose.model('City', citySchema);

module.exports = City;
