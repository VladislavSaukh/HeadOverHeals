const mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: 'This field is required'
    },
    password: {
        type: String,
        required: 'This field is required'
    
    },
    isLogged: {
        type: Boolean, 
        required: 'This field is reqired'
    },
    firstname:{
        type: String,
        required: 'This field is reqired'
    },
    lastname:{
        type: String,
        required: 'This field is reqired'
    },
    photo:{
        type: String,
        required: 'This field is reqired'
    },
    status:{
        type: String,
        required: 'This field is reqired'
    }
}) 


const Student=mongoose.model("Student", userSchema);

module.exports = Student