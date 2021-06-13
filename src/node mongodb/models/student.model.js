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
        required: 'This fiels is reqired'
    }
}) 


const Student=mongoose.model("Student", userSchema);

module.exports = Student