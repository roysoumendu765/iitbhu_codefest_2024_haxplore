const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    gender:{
        required: true,
        type: String
    },
    age: {
        required: true,
        type: String
    },
    mobile:{
        required: true,
        type: Number,
    },
    email:{
        type: String
    },
    idname: {
        required: true,
        type: String
    },
    idnum: {
        required: true,
        type: Number,
    },
    no_of_person:{
        required: true,
        type: Number
    }    
});

module.exports = mongoose.model('Data', userSchema)