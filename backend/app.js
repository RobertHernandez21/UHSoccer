const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan') 
const Event = require('./models/event')

const cors = require('cors')

require('dotenv').config()
const app = express()

app.use(
    cors({
      origin: '*'
    })
  )

  mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Database connection Success!')
  })
  .catch((err) => {
    console.error('Mongo Connection Error', err)
  })


  const PORT = process.env.PORT
  
app.use(express.json())
app.use(morgan('dev'))

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})

app.get('/event', async(req,res) =>{
  try {
    const event = await Event.find({})
    res.status(200).json(event)
  } catch (error) {
    console.log(error.message);
    res.status(500).json({message: error.message})
  }
})

app.post('/event', async(req,res) =>{
  try {
    const event = await Event.create(req.body)
    res.status(200).json(event)
  } catch (error) {
    console.log(error.message);
    res.status(500).json({message: error.message})
  }
})

app.get('/eventdetails/:id', async(req,res) =>{
  try {
    const {id} = req.params
    const event = await Event.findById(id)
    res.status(200).json(event)
    console.log(event)
  } catch (error) {
    console.log(error.message);
    res.status(500).json({message: error.message})
  }
})

app.put('/event/:id', async(req,res) =>{
  try {
    const {id} = req.params
    const event = await Event.findByIdAndUpdate(id, req.body)
    if (!event){
      return res.status(404).json({message: `can not find event with ID ${id}`})
    }
    res.status(200).json(event)
    console.log(event)
  } catch (error) {
    console.log(error.message);
    res.status(500).json({message: error.message})
  }
})

// error handler
app.use(function (err, req, res, next) {
  // logs error and error code to console
  console.error(err.message, req)
  if (!err.statusCode) {
    err.statusCode = 500
  }
  res.status(err.statusCode).send(err.message)
})