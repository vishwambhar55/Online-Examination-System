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

const StudentUser = module.module('StudentUser',userStudentSchema);
module.export = StudentUser;
