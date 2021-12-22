const express = require('express')
const { join } = require('path')

const app = express()

// setup static and middleware
app.use(express.static(join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.status(200).sendFile(join(__dirname, 'navbar-app', 'index.html'))
})

app.all('*', (req, res) => {
    res.status(404).send(`Resource not found.`)
})

app.listen(5000, () => {
    console.log(`Server listening at port 5000...`);
})