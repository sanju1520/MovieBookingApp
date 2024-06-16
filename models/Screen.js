const mongoose = require('mongoose');

const ScreenSchema = new mongoose.Schema({
  screenName: { type: String, required: true },
  totalSeats: { type: Number, required: true }
});

module.exports = mongoose.model('Screen', ScreenSchema);
