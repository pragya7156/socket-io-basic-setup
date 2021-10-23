const express = require("express");
const app = express();
const http = require("http");
const socketio = require("socket.io")

const server = http.createServer(app);    //This means that express initializes app to be a function handler that you can supply to an HTTP server 

const io = socketio(server);  // socket.io library return me a function that I pass it to my server. It makes that socket library available to the frontend ( run http://localhost:3000/socket.io/socket.io.js)

app.use('/', express.static(__dirname + '/public'))     // We define a route handler / that gets called when we hit our website home

io.on('connection', (socket) => {
    console.log("Socket id connected: ", socket.id);

    socket.on('button clicked', () => {
        console.log("Event emitted by button click with socket id: ", socket.id);   // for server to know when the event emitted on frontend
    })

    setInterval(() => {
        socket.emit('emitting from server side')
    }, 2000)
})

server.listen(3000, () => {                                 // We make the http server listen on port 3000
    console.log("App started on http://localhost:3000");        
})