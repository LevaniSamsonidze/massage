const mongoose = require("mongoose");

const verifiedUsersSchema = new mongoose.Schema({
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

const VerifiedUsers = mongoose.model("verifiedUsers", verifiedUsersSchema);

module.exports = VerifiedUsers;