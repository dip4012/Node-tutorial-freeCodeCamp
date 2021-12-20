const { writeFileSync } = require('fs')
const { join } = require('path')

for (let i = 0; i < 100000; i++) {
    writeFileSync(join(__dirname, 'content', 'big.txt'), `hello world ${i}\n`, { flag: 'a' })
}