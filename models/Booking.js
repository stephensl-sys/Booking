const mongoose = require('mongoose');

const STATUS = ['PENDING', 'CONFIRMED', 'FULLY_BOOKED', 'CANCELLED'];

const BookingSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  time_from: { type: String, required: true },
  time_to: { type: String, required: true },
  status: { type: String, enum: STATUS, default: 'PENDING' },
  client_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Client' },
  agency_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Agency' },
  notes: { type: String }
});

module.exports = mongoose.model('Booking', BookingSchema);
module.exports.STATUS = STATUS;
