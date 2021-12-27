const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')

// req => middleware => res

app.use([authorize, logger])

app.get('/', (req, res) => {
    res.send(`Home`)
})

app.get('/about',(req, res) => {
    res.send(`About`)
})

app.get('/api/products', (req, res) => {
    res.send(`Products`)
})

app.get('/api/items', (req, res) => {
    res.send(`Items`)
})

app.listen(8080, () => {
    console.log('Server listening at port 8080....');
})