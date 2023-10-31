const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  _date: {
    type: Date,
    required: true,
  },
  _member: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Member', 
    required: true,
  },
  _copy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Copy', 
    required: true,
  },
});

class Booking {
  constructor(date, member, copy) {
    this._date = date;
    this._member = member;
    this._copy = copy;
  }

  get date() {
    return this._date;
  }

  set date(value) {
    this._date = value;
  }

  get member() {
    return this._member;
  }

  set member(value) {
    this._member = value;
  }

  get copy() {
    return this._copy;
  }

  set copy(value) {
    this._copy = value;
  }
}

bookingSchema.loadClass(Booking);

const BookingModel = mongoose.model('Booking', bookingSchema);

module.exports = BookingModel;
