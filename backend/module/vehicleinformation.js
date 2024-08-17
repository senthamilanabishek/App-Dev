const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    vehiclebrand: {
        type: String,
        required: true
    },
    vehiclemodel: {
        type: String,
        required: true
    },
    features: {
        type: String,
        required: true
    },
    vehiclenumber: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    phonenumber: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

const Vehicle = mongoose.models.Vehicle || mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;
    