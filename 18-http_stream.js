const { readFileSync, createReadStream } = require('fs')
const http = require('http')
const { join } = require('path')

http.createServer((req, res) => {
    // const text = readFileSync(join(__dirname, 'content', 'big.txt'), 'utf-8')
    // res.end(text)

    const fileStream = createReadStream(join(__dirname, 'content', 'big.txt'), 'utf-8')
    fileStream.on('open', () => {
        fileStream.pipe(res)
    })
    fileStream.on('error', (err) => {
        res.end(err)
    })
}).listen(8080)