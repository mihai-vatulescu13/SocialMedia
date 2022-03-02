const express = require('express');
const authRouters = require('./routes/auth');
const usersRoute = require('./routes/users');
const postsRoute = require('./routes/posts');
const mongoose = require('mongoose');
const helmet = require('helmet');
const { createServer } = require('http');
const { Server } = require('socket.io');

//get the access to .env file:
require('dotenv').config();

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:3000',
  },
});
const port = process.env.PORT || 5000;
let OnlineUsers = [];

// app.use(express.json());
//add a limit inside of json parser for files storing:
app.use(express.json({ limit: '50mb' }));
app.use(helmet());
app.use('/api/auth', authRouters);
app.use('/api/user', usersRoute);
app.use('/api/post', postsRoute);

//connect the server to the database:
mongoose.connect(process.env.DATABASE_MONGO_URL);

// socket part
// functions
const addUser = (socketId, userId) => {
  if (socketId && userId) {
    !OnlineUsers.includes(userId) && OnlineUsers.push({ socketId, userId });
  }
};
const deleteUser = (socketId) => {
  OnlineUsers = OnlineUsers.filter((elem) => elem.socketId !== socketId);
};
const getUser = (userId) => {
  return OnlineUsers.find((user) => user.userId === userId);
};
//connection
io.on('connection', (socket) => {
  socket.on('newUser', (userId) => {
    addUser(socket.id, userId);
    io.emit('getUsers', OnlineUsers);
  });
  socket.on('sendMessage', ({ senderId, receiverId, text }) => {
    const user = getUser(receiverId);
    io.to(user.socketId).emit('getMessage', {
      senderId,
      text,
    });
  });
  socket.on('disconnect', () => {
    deleteUser(socket.id);
    io.emit('getUsers', OnlineUsers);
  });
});

//check if the app it is in the production mode:
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  //module user for working with folder or files paths
  const path = require('path');

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
httpServer.listen(port, () =>
  console.log(`Server is running on port: ${port}`)
);
