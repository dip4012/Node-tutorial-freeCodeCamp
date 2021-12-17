//npm - global command, comes with node
//npm --version

//local dependency - use it only in this particular project
//npm i <package name>

//global dependency - use it in any project
//npm install -g <package name>
//sudo npm install -g <package name>     (mac)

//package.json - manifest file (stores important information about project/package)
//manual approach (create package.json in the root, create properties etc.)
//npm init (step by step, press enter to skip)
//npm init -y (everything default)

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)

console.log(newItems);
console.log("Hello World!!");