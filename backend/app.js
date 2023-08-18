const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan') 
const Event = require('./models/event')
let multer = require('multer'),
  bodyParser = require('body-parser'),
  path = require('path');
var fs = require('fs'); // file system, to save files
let Detail = require('./models/detail');
let dir = './uploads';
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

app.delete('/event/:id', async(req,res) =>{
  try {
    const {id} = req.params
    const event = await Event.findByIdAndDelete(id, req.body)
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

let upload = multer({
  storage: multer.diskStorage({

    destination: (req, file, callback) => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
      }
      callback(null, './uploads');
    },
    filename: (req, file, callback) => { callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)); }

  }),

  fileFilter: (req, file, callback) => {
    let ext = path.extname(file.originalname)
    if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
      return callback(/*res.end('Only images are allowed')*/ null, false)
    }
    callback(null, true)
  }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/uploads', express.static('uploads'));

// view engine setup


app.get('/updateroster', async (req, res) => {
  try {
    const detail = await Detail.find({})
    res.status(200).json(detail)
  } catch (error) {
    console.log(error.message);
    res.status(500).json({message: error.message})
  }
});

app.post('/createroster', upload.any(), async (req, res) => {
  try {
    if (!req.body && !req.files) {
      return res.json({ success: false });
    }

    const data = await Detail.findOne().sort({ _id: -1 }).limit(1);
    const c = data ? data.unique_id + 1 : 1;

    const detail = new Detail({
      unique_id: c,
      Name: req.body.title,
      Position: req.body.position, 
      Number: req.body.number, 
      image1: req.files[0] && req.files[0].filename ? req.files[0].filename : ''
    });

    await detail.save();
    res.redirect('/createroster');
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'An error occurred' });
  }
});


app.post('/createroster', (req, res) => {

  Detail.findByIdAndRemove(req.body.prodId, (err, data) => {

    // console.log(data);
    // remove file from upload folder which is deleted
    fs.unlinkSync(`./uploads/${data.image1}`);
    

  })
  res.redirect('/');
});


