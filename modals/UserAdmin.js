const mongoose = require('mongoose');
const userAdminSchema = new mongoose.Schema({
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

const AdminUser = module.module('AdminUser',userAdminSchema);
module.export = AdminUser;
