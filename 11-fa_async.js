const { readFile, writeFile } = require('fs')
const { join } = require('path')

console.log('Start!!');
readFile(join(__dirname, 'content', 'first.txt'), 'utf-8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result
    readFile(join(__dirname, 'content', 'second.txt'), 'utf-8', (err, result) => {
        if (err) {
            console.log(err);
            return
        }
        const second = result
        writeFile(join(__dirname, 'content', 'result-async.txt'), `Here is the result : ${first}, ${second}`, (err, result) => {
            if (err) {
                console.log(err);
                return
            }
            console.log('Done with this task!!');
        })
    })
})

console.log('Starting the next one!!');