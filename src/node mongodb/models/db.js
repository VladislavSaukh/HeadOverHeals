const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/users', {
    useNewUrlParser: true
},
err => {
    if (!err){
        console.log('Connection succeeded')
    } else {
        console.log('Erros in connection' +err)
    }
})

require('./student.model')