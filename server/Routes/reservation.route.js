const express = require('express')
const catchAsync = require('../utils/cathcAsync');
const Reservation = require('../modules/reservation.modules');
const { sendReservation } = require('../controller/reservation.controller');

const reservationRouter = express.Router()

reservationRouter.post('/', sendReservation);


module.exports = reservationRouter