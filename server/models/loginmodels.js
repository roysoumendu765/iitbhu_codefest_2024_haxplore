const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

modules.export = mongoose.model("logindata", loginSchema);