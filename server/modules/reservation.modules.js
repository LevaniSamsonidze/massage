const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    massageType: {
        type: String,
        required: true
    },
    comment: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }

})

const Reservation = mongoose.model("reservation", reservationSchema);

module.exports = Reservation;