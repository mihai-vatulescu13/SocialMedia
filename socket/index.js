const io = require("socket.io")(2022, {
  cors: {
    origin: "http://localhost:3000",
  },
});

//create a socket connection:
io.on("connection", (socket) => {
  console.log("user connected");
});
