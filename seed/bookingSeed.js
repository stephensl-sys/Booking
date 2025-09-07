const mongoose = require('mongoose');
const Booking = require('../models/Booking');

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/booking';

async function seed() {
  try {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    await Booking.deleteMany({});

    await Booking.insertMany([
      {
        date: new Date('2024-09-01'),
        time_from: '10:00',
        time_to: '12:00',
        status: 'CONFIRMED',
        client_id: new mongoose.Types.ObjectId(),
        agency_id: new mongoose.Types.ObjectId(),
        notes: 'Initial confirmed booking'
      },
      {
        date: new Date('2024-09-02'),
        time_from: '14:00',
        time_to: '16:00',
        status: 'PENDING',
        client_id: new mongoose.Types.ObjectId(),
        agency_id: new mongoose.Types.ObjectId(),
        notes: 'Initial pending booking'
      }
    ]);

    console.log('Seeding completed');
  } catch (err) {
    console.error('Seeding error', err);
  } finally {
    await mongoose.disconnect();
  }
}

seed();
