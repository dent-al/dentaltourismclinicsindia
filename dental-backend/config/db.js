// ...existing code...
// This file will contain MongoDB connection logic if you want to separate it from server.js
const mongoose= require('mongoose')

const db=()=>{
    mongoose.connect()
}