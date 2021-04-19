const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
const proxy = require("http-proxy-middleware");


const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log("Connected to DB!");
})

const meetRouter = require('./routes/meets');

app.use('/meets', meetRouter);
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
}

app.listen(port, ()=>{
    console.log(`Server running on port: ${port}`)
})