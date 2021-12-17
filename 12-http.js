const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.end('Welcome to our home page!!')
    }

    if (req.url == '/about') {
        res.end('Here is a short history about us!!')
    }

    res.end(`
    <h1>Oops!!</h1>
    <p>We can't find the page you are looking for!!</p>
    <a href='/'>Home</a>
    `)
})

server.listen(5000)