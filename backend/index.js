// import express from 'express';
// import cors from 'cors';
// import {connectDB} from './config/config.js'
// import foodRouter from './routes/vehicalroutes.js';
// import router from './routes/routes.js';


// const app=express() //creating an object;

// const port = 4000;

// app.use(express.json());//body parser;

// app.use(cors());

// app.get("/",(req,res)=>
// {
//   res.send("Api is working")
// })

// // db Connection 
// connectDB();


// //Api connections
// app.use("/api/food",foodRouter);

// app.use('/app',router);

// app.listen(port,()=>{
//   console.log(`Server started on http://localhost:${port}`);
// })

const express = require('express');
const routes = require('./routes/routes.js');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./config/db');
const vehicleroutes = require('./routes/vehicalroutes.js');
const multer = require('multer');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Database connection
db.connectDB();

// Set up view engine and views path
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

// CORS setup
app.use(cors());

// Static file serving
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});
const upload = multer({ storage: storage });

// Middleware setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // For parsing application/json
// If you want to use body-parser, replace the above two lines with:
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// Route setup
app.use('/app', routes);
app.use('/images', express.static('uploads'));

app.use('/app/vehicles', vehicleroutes);


// Server setup
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});
