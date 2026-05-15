const Reservation = require("../modules/reservation.modules");
const catchAsync = require("../utils/cathcAsync");

const sendReservation = catchAsync(async(req, res) =>{
    const { name, phone, massageType, comment } = req.body;
    
    if (!name || !phone || !massageType) {
        return res.status(400).json({ message: 'სახელის, ტელეფონის და კურსის ტიპის ველის შევსება აუცილებელია' });
    }
    const user = await Reservation.findOne({ phone });
    if(user){
        return res.status(400).json({ message: 'მომხმარებელი ამ ტელეფონის ნომრით უკვე არსებობს. დაგიკავშირდებით მალე <3' });
    };
    
    const reservation = await Reservation({
        name,
        phone,
        massageType,
        comment
    })
    await reservation.save();

    res.status(201).json({
        ok: true,
        message: 'თქვენი მოთხოვნა მიღებულია. დაგიკავშირდებით მალე <3',
        reservation
    })
})

module.exports = {
    sendReservation
}