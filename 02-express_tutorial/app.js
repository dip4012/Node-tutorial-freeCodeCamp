const express = require('express')
const app = express()
const people = require('./routes/people')
const auth = require('./routes/auth')

// static assets
app.use(express.static('./methods-public'))
// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())

// people router
app.use('/api/people', people)
// auth router
app.use('/login', auth)


app.listen(8080, () => {
    console.log('Server listening at port 8080....');
})