const mongoose = require('mongoose');

const StudentuserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    outlook: {
        type: String
    },
    registration: {
        type: Number
    },
    batch: {
        type: Number
    },
    address: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    country: {
        type: String
    }

},{
    timestamps: true
});


const StudentUser = mongoose.model('StudentUser', StudentuserSchema);

module.exports = StudentUser;