const {readFile} = require("fs")
const {join} = require("path")

console.log("Started a first task!!");

readFile(join(__dirname, "content", "first.txt"), "utf-8", (err, result)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(result);
    console.log("Finished first task!!");
})

console.log("Starting second task!!");