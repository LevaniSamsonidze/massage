const Reservation = require("../modules/reservation.modules");
const VerifiedUsers = require("../modules/verifiedUsers.modules");
const catchAsync = require("../utils/cathcAsync");
const { AppError } = require("../utils/ErrorHeandlers");

const getUsers = catchAsync(async(req, res, next) => {
    const users = await Reservation.find();
    const verifiedUsers = await VerifiedUsers.find();
    if(!users && !verifiedUsers){
        return next(new AppError("მომხმარებლები ვერ მოიძებნა", 404))
    }

    res.status(200).json({
        ok: true,
        users,
        verifiedUsers
    })
})

const deleteUser = catchAsync(async(req, res, next) => {
    const { id } = req.params;
    const user = await Reservation.findByIdAndDelete(id);
    if(!user){
        return next(new AppError("მომხმარებელი ვერ მოიძებნა", 404))
    }

    res.status(200).json({
        ok: true,
        message: "მომხმარებელი წარმატებით წაიშალა"
    })
})

const verifyUser = catchAsync(async(req, res, next) => {
    const { id } = req.params;

    const user = await Reservation.findById(id);
    if(!user){
        return next(new AppError("მომხმარებელი ვერ მოიძებნა", 404))
    }
    const newVerifiedUsers = VerifiedUsers({
        name: user.name,
        phone: user.phone,
        massageType: user.massageType,
        comment: user.comment
    })
    await newVerifiedUsers.save();
    await Reservation.findByIdAndDelete(id);

    res.status(200).json({
        ok: true,
        message: "მომხმარებელი წარმატებით დადასტურდა"
    })
})

const deleteVerifyUser = catchAsync(async(req, res, next) => {
    const { id } = req.params;
    const user = await VerifiedUsers.findByIdAndDelete(id);
    if(!user){
        return next(new AppError("მომხმარებელი ვერ მოიძებნა", 404))
    }
    res.status(200).json({
        ok: true,
        message: "მომხმარებელი წარმატებით წაიშალა"
    })
})

module.exports = {
    getUsers,
    deleteUser,
    verifyUser,
    deleteVerifyUser
}