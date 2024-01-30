//! Portfolio Website Main Server
require('dotenv').config();                     
const express = require('express');
const connectDB = require('./db/connection');   // DB connection
const app = express();

//? Middlewares
app.set('view engine', 'ejs'); 
app.use(express.static('public'));

//? Routes 
app.get('/', (req, res) => {
    res.render('index');
})

//? Server & DB
// connectDB();
const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`Server Listening on Port ${port}`);
})