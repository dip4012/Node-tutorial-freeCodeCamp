// using require('fs').promises to get promises for async file access
// will be using this for the reat course

const { readFile, writeFile } = require('fs').promises
const { join } = require('path')

const start = async () => {
    try {
        const first = await readFile(join(__dirname, 'content', 'first.txt'), 'utf-8')
        const second = await readFile(join(__dirname, 'content', 'second.txt'), 'utf-8')
        await writeFile(join(__dirname, 'content', 'result-mind-grenade.txt'), `THIS IS AWESOME TEXT: ${first} ${second}`, { flag: 'a' })
        console.log(first, second);
    } catch (error) {
        console.log(error);
    }
}

start()

// creating our own wrapper function to get promises

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf-8', (err, data) => {
//             if (err) {
//                 reject(err)
//             }
//             else {
//                 resolve(data)
//             }
//         })
//     })
// }

// getText(join(__dirname, 'content', 'first.txt'))
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))






// using util.promisify to perform the same
// .....better and easier than building own wrapper function to async acces files.....

// const util = require('util')

// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)


// const start = async () => {
//     try {
//         const first = await readFilePromise(join(__dirname, 'content', 'first.txt'), 'utf-8')
//         const second = await readFilePromise(join(__dirname, 'content', 'second.txt'), 'utf-8')
//         await writeFilePromise(join(__dirname, 'content', 'result-mind-grenade.txt'), `THIS IS AWESOME TEXT: ${first} ${second}`)
//         console.log(first, second);
//     } catch (error) {
//         console.log(error);
//     }
// }

// start()