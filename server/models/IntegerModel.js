const mongoose = require('mongoose');

const IntegerSchema = new  mongoose. Schema({
    field1: {
        type: Number
    },
    field2:{
        type: Number
    },
    field3:{
        type: Number
    }
})

module.exports = mongoose.model("IntegerData", IntegerSchema);