const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' },
  seats: [String],
  showtime: String,
  totalPrice: Number
});

module.exports = mongoose.model('Booking', BookingSchema);
