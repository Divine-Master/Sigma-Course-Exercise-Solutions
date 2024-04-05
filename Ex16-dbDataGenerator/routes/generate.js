import express from 'express'
import mongoose from 'mongoose'
import {dummy} from "./../models/dummydb.js"
const router = express.Router()
let con = await mongoose.connect("mongodb://localhost:27017/dummy")

const randObj = (a) => {
    let r = Math.floor(Math.random()*(a.length-1))
    return a[r]
  } 

router.get('/',async(req,res)=>{
  let nam = ['Devdutt', 'Shiva', 'Rishabh','dm']
  let lang = ['Python', 'Java', 'MEAN', 'MERN','']
  let city = ['Jaipur', 'Jodhpur', 'Delhi', 'Bombay','ny']
  await dummy.deleteMany({})
  for (let i = 0; i < 10; i++) {
    let dumdb = await dummy.create({
      name: randObj(nam),
      salary: Math.floor(Math.random()*100000),
      language: randObj(lang),
      city: randObj(city),
      isManager: (Math.random() > 0.5)?true: false
    })
    console.log(dumdb)
  }
  res.render('index')
})

export default router