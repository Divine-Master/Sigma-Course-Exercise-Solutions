const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public')) //name of folder to be made available for distribution so that files dikh sake website par in bracket.

app.get('/', (req, res) => {
  res.send('Hello World2!')
})
app.get('/about', (req, res) => {
  res.send('About me!')
})
app.get('/blog', (req, res) => {
  res.send('Hello blog')
})
app.get('/blog/intro-to-rust',(req,res)=>{
    res.send('Intro to Rust')
})
app.get('/contact', (req, res) => {
  res.send('Contact Me!')
})
//here :second and :slug are url parameters.
// app.get('/blog/:slug/:second',(req,res)=>{
//     res.send(`Welcome to ${req.params.slug} and ${req.params.second}`)
// })
app.get('/blog/:slug',(req,res)=>{
    // for URL = http://localhost:3000/blog/trisj?mode=light&info=Heev
    console.log(req.params) //will output { slug: 'trisj'}
    console.log(req.query) //will output { mode: 'light', info: 'Heev' }
    res.send(`Welcome to ${req.params.slug}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})