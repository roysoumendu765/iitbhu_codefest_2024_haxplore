const mongoose = require('mongoose');

const connect = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/usersdb');
        console.log("DataBase Connection Established");
    } catch (error) {
        consdle.log(error)
    }
}

connect();

module.exports = connect;