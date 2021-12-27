const { createReadStream } = require('fs')
const { join } = require('path')

const stream = createReadStream(join(__dirname, 'content', 'big.txt'), { highWaterMark: 8000, encoding: 'utf-8' })

// last buffer -> remaining data
// highWaterMark -> control size

stream.on('data', (result) => {
    console.log(result);
})

stream.on('error', (err) => {
    console.log(err);
})