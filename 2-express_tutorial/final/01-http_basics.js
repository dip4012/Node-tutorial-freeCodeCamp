const http = require('http')

const server = http.createServer((req, res) => {
    // console.log(req.method);
    // console.log(req.url);
    const url = req.url
    
    // home page
    if (url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<h1>Home Page</h1>')
        res.end()
    }
    // about page
    else if (url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<h1>About Page</h1>')
        res.end()
    }
    //error page
    else {
        res.writeHead(400, { 'content-type': 'text/html' })
        res.write(`<h1>404</h1>
                    <br>
                    <p>Resource not found</p>`)
        res.end()
    }
})

server.listen(5000)