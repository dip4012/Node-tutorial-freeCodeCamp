// MODULES

// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only for share minimum)

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative_flavor')
require('./7-mind_grenade')

console.log(data);

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)