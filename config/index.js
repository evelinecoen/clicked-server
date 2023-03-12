// We reuse this import in order to have access to the `body` property in requests
const express = require("express");

// ℹ️ Responsible for the messages you see in the terminal as requests are coming in
// https://www.npmjs.com/package/morgan
const logger = require("morgan");

// ℹ️ Needed when we deal with cookies (we will when dealing with authentication)
// https://www.npmjs.com/package/cookie-parser
const cookieParser = require("cookie-parser");

// ℹ️ Needed to accept requests from 'the outside'. CORS stands for cross origin resource sharing
// unless the request is made from the same domain, by default express wont accept POST requests
const cors = require("cors");

const FRONTEND_URL = process.env.ORIGIN || "http://localhost:5173";

// Middleware configuration
module.exports = (app) => {
  // Because this will be hosted on a server that will accept requests from outside and it will be hosted ona server with a `proxy`, express needs to know that it should trust that setting.
  // Services like Fly use something called a proxy and you need to add this to your server
  app.set("trust proxy", 1);

  // controls a very specific header to pass headers from the frontend
  app.use(
    cors({
      origin: [FRONTEND_URL],
    })
  );

  // In development environment the app logs
  app.use(logger("dev"));

  // To have access to `body` property in the request
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());


  //Socket OI 
  const http = require('http')  // for the chat
  const {Server} = require("socket.io")
  const server = http.createServer(app);


const io = new Server(server, {
    cors: {
        origin: FRONTEND_URL, 
        method: ["GET", "POST"],
   },
});

io.on("connection", (socket) => {
    console.log(`User connected`)

    socket.on("id", (userId) => {
      socket.join(userId)
   /*    console.log(`User with ID: ${socket.id}`) */
    })

    socket.on("message", (message) => {
      socket.to(userId).emit('message', message)
      /* console.log(`User with ID: ${socket.id}`) */
    })

    socket.on("disconnect", () =>{
        console.log("User Disconnected")
    })
});

};





// END CHAT CODE