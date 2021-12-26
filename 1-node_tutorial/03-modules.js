// MODULES

// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only for share minimum)

const names = require('./04-names')
const sayHi = require('./05-utils')
const data = require('./06-alternative_flavor')
require('./07-mind_grenade')

console.log(data);

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)