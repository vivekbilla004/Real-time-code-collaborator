const express = require('express');
const app = express();
require('dotenv').config();
const connectDB = require('./config/db');
const User = require('./models/User');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
})

const startServer = async()=>{
  try{
    await connectDB();
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });

  }catch(err){
    console.log('Error in starting server or connecting DB',err);
  }
}

startServer();