const express = require('express')
const app = require()

// req => middleware => res

const logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    const time = new Date()
    console.log(method, url, time);
    next()
}

app.get('/', logger, (req, res)=>{
    res.status(200).send(`Home`)
})

app.get('/about', logger, (req,res)=>{
    res.status(200).send(`About`)
})

app.listen(8080, ()=>{
    console.log(`Server listening at port 8080`);
})