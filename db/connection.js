//! MongoDB connection
// require('dotenv').config()
const mongoose = require('mongoose');

// Creating DB connection
const connectDB = async () => {
    // return mongoose.connect("mongodb://127.0.0.1:27017/Dynamic1DB");    // Local
    return mongoose.connect(process.env.MONGO_URL)                         // Cloud
        .then(() => {
            console.log("Connected To DB");
        }).catch((err) => {
            console.log(err);
        });
}

module.exports = connectDB;