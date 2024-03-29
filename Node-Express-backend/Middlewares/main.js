const express = require('express')
const fs = require('fs')
const blog = require('./routes/blog.js')
const app = express()
const port = 3000

//middleware can be used to get several information like a log and can be used for cookies validation , to check if user is logged in or not.
//this is Logger for my express app.
//if you want amything to be done for every routes you can use middleware.

app.use('/blog',blog)
app.use(express.static('public'))
app.use((req,res,next)=>{
    fs.appendFileSync('logs.txt',`started at ${Date.now()} Type is ${req.method}\n`)
    console.log(`started at ${Date.now()} Type is ${req.method} `);
    next()
})
app.use((req,res,next)=>{
    console.log('Logged in m2')
    next()
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.send('Hello about!')
})
app.get('/contact', (req, res) => {
  res.send('Hello contact!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})