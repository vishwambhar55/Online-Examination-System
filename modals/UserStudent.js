const mongoose = require('mongoose');
const userStudentSchema = new mongoose.Schema({
    email :{
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
    }
},{
    timestamps: true
})

const SUser = mongoose.model('SUser', userStudentSchema);
module.exports = SUser;
