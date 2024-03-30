const mongoose = require('mongoose');
const password = "abcdefgh";
const uri = `mongodb+srv://abcdefgh:${password}@cluster0.jpoyoge.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const connect = async () => {
    try {
        await mongoose.connect(uri);
        console.log("DataBase Connection Established");
    } catch (error) {
        console.log(error)
    }
}

connect();

module.exports = connect;