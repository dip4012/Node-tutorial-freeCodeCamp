const express = require('express')
const app = express()

// or,
// directly we can write
// const app = require('express')()

// home page
app.get('/', (req, res) => {
    res.status(200).send(`Home page`)
})

// about page
app.get('/about', (req, res) => {
    res.status(200).send('About page')
})

// error page
app.all('*', (req, res) => {
    res.status(404).send('<h1>Resource not found</h1>')
})

app.listen(5000, () => {
    console.log(`Server listening at port 5000.`);
})



// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen