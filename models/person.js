const mongoose = require('mongoose')
const keys = require('../keys')

const url = `mongodb+srv://harif:${keys}@cluster0-eabtm.mongodb.net/test?retryWrites=true`

mongoose.connect(url, { useNewUrlParser: true }, function (err) {
    if (err) throw err;
    console.log('connected')
})

let db = mongoose.connection

const Person = mongoose.model('Person', {
    name: String,
    number: String,
    id: String
})

module.exports = Person