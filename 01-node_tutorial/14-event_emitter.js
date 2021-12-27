const eventEmitter = require('events')

const customEmitter = new eventEmitter()

customEmitter.on('response', (name, id) => {
    console.log(`Data received from ${name} with id ${id}.`);
})

customEmitter.on('response', () => {
    console.log(`Some other logic`);
})

customEmitter.emit('response', 'John', 34)