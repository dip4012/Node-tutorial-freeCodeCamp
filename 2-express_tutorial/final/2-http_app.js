const http = require('http')
const { readFileSync } = require('fs')
const { join } = require('path')

// get all the files
const homePage = readFileSync(join(__dirname, 'navbar-app', 'index.html'))
const homeStyles = readFileSync(join(__dirname, 'navbar-app', 'styles.css'))
const homeLogo = readFileSync(join(__dirname, 'navbar-app', 'logo.svg'))
const homeLogic = readFileSync(join(__dirname, 'navbar-app', 'browser-app.js'))

const server = http.createServer((req, res) => {
    // console.log(req.method);
    // console.log(req.url);
    const url = req.url

    // home page
    if (url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(homePage)
        res.end()
    }
    // about page
    else if (url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<h1>About Page</h1>')
        res.end()
    }
    // styles
    else if (url === '/styles.css') {
        res.writeHead(200, { 'content-type': 'text/css' })
        res.write(homeStyles)
        res.end()
    }
    // image/logo
    else if (url === '/logo.svg') {
        res.writeHead(200, { 'content-type': 'image/svg+xml' })
        res.write(homeLogo)
        res.end()
    }
    // logic
    else if (url === '/browser-app.js') {
        res.writeHead(200, { 'content-type': 'text/javascript' })
        res.write(homeLogic)
        res.end()
    }
    // error page
    else {
        res.writeHead(400, { 'content-type': 'text/html' })
        res.write(`<h1>404</h1>
                    <br>
                    <p>Resource not found</p>`)
        res.end()
    }
})

server.listen(5000)