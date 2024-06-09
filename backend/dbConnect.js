const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/News', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection


connection.on('connected', () => {
    const timestamp = new Date().toLocaleString()
    console.log(`Mongo DB Connection Successfull at ${timestamp}`)
})

connection.on('error', () => {
    console.log('Mongo DB Connection Failed')
})

module.exports = mongoose