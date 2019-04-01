const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)
const Person = require('./models/person')


app.use(cors());
app.use(bodyParser.json());
app.use(express.static('build'));


const personModel = (person) => {
    return {
        name: person.name,
        number: person.number,
        id: person._id
    }
}



app.get('/api/persons', (req, res) => {
    Person
        .find({})
        .then(persons => {
            res.json(persons.map(personModel))
        })
        .catch(error => {
        res.status(400).send({error: `error in search`})
    })
})

app.get('/api/persons/:id', (req, res) => {
    const id = (req.params.id)
    Person.findById(id)
        .then(person => {
            if (person) {
                res.json(person)
            } else { res.status(404).end()}
        })
        .catch(error => {
            res.status(400).send({error: `no person found with ID ${id}`})
        })
})

app.delete('/api/persons/:id', (req, res) => {
    const id = (req.params.id)
    Person
        .findByIdAndRemove(id)
        .then(result => {
            res.status(204).end()
        })
        .catch(error => {
            res.status(400).send({error: `no person found with ID ${id}`})
        })
})

const generateId = () => {
    let random = Math.random()+1
    return parseInt(random*10000)
}

app.post('/api/persons', (req, res) => {
    const person = new Person(req.body)
    console.log(`person in reguest body: ${person}`)


    if (person.name === '') {
        return res.status(400).json({error: 'name missing'})
    }

    if (person.number === '') {
        return res.status(400).json({error: 'number missing'})
    }

    person
        .save()
        .then(personSaved => {
            res.json(personModel(personSaved))
        })
        .catch( error => {
            res.status(400).send({error: `error in saving person`})
        })
    

})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})