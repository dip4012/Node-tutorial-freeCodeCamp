const express = require('express')
const app = express()
const { products } = require('../data.js')

app.get('/', (req, res) => {
    res.json(products)
})

app.listen(8080, () => {
    console.log('Server listening at port 8080');
})