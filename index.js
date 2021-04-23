const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://yohan:asd030709!!@alpaca.hsndp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connect...'))
 .catch(err =>console.log(err))



app.get('/',(req, res) => res.send('Hello Word! hihi'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))