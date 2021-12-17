const { readFileSync, writeFileSync } = require('fs')
const { join } = require('path')

console.log('Start!!');
const first = readFileSync(join(__dirname, 'content', 'first.txt'), 'utf-8')
const second = readFileSync(join(__dirname, 'content', 'second.txt'), 'utf-8')

writeFileSync(join(__dirname, 'content', 'result-sync.txt'), `Here is the result : ${first}, ${second}`, { flag: 'a' })

console.log('Done with this task!!');
console.log('Starting the next one!!');