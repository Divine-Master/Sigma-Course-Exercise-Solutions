const express = require("express")
const router = express.Router()

//Middleware specific to this route.
router.use((req,res,next)=>{
    console.log('Time: ', Date.now())
    next()
})

router.get('/',(req,res) => {
    res.send("Blog page")
})
router.get('/about',(req,res)=>{
    res.send('About blog')
})

module.exports = router