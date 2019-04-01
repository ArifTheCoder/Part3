const mongoose = require('mongoose')

const url = `mongodb+srv://arif12345:arif12345@cluster0-lfntq.mongodb.net/test?retryWrites=true`

mongoose.connect(url, { useNewUrlParser: true }, function (err) {
  if (err) throw err;
  console.log('connected with database')
})

let db = mongoose.connection

const Person = mongoose.model('Person', {
  name: String,
  number: String,
  id: String
})

const person = new Person({
  name: process.argv[2],
  number: process.argv[3]
})

if (process.argv[2]) {
  person
      .save()
      .then(response => {
          console.log(`person with name ${process.argv[2]}  & number ${process.argv[3]} has been added`)
          db.close()
      })
} else {
  Person
      .find({})
      .then(result => {
          console.log('phonebook:')
          result.forEach(person => {

              console.log(person.name, person.number)
          })
          db.close()
      })

}
