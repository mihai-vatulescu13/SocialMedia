const express = require('express')
const authRouters = require('./routes/auth')
const usersRoute = require('./routes/users')
const mongoose = require('mongoose');

//get the access to .env file:
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000

app.use(express.json());
app.use('/api/auth', authRouters);
app.use('/api/user', usersRoute);


//connect the server to the database:
mongoose.connect(process.env.DATABASE_MONGO_URL);

//check if the app it is in the production mode:
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  //module user for working with folder or files paths
  const path = require('path')

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

app.listen(port, () => console.log(`Server is running on port: ${port}`))