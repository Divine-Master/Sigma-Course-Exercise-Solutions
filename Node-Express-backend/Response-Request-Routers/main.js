const express = require('express')
const blog = require('./routes/blog')
const shop = require('./routes/shop')

const app = express()
const port = 3000
app.use('/blog',blog)
app.use('/shop',shop)
app.use(express.static("public"))

app.get('/', (req, res) => {
    console.log("Its a Get request");
    res.send('Hello World Get!')
})

app.post('/',(req,res)=>{
    console.log('It\'s A Post request')
    res.send('Hello World Post!')
})
app.put('/',(req,res)=>{
    console.log('It\'s A Put request')
    res.send('Hello World Put!')
})

app.get('/index',(req,res)=>{
    res.sendFile('tempelates/index.html',{root:__dirname}) //send the file.
})

app.get("/api", (req, res) => {
    res.json({ a: 1, b: 2, c: 3, d: 4, name: ["harry", "jerry"] })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})