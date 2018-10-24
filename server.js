const express = require("express");
let app = express();


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views/');
app.use(express.static(__dirname + '/views/'));
app.use(express.static(__dirname + '/out/'));


app.use('/', require('./routers/home'));
app.use('/blog', (req, res)=>{
    res.sendFile(__dirname + "/views/blog.html");
});
app.use('/blackboard', (req, res) => {
    res.sendFile(__dirname + "/views/blackboard/blackboard.html");
});

let server = app.listen(3000, ()=> {
    console.log("Server live on port 3000: ");
});

var io = require('socket.io')(server);

// WebSocket Portion
// WebSockets work with the HTTP server

// Register a callback function to run when we have an individual connection
// This is run for each individual user that connects
io.sockets.on('connection',
  // We are given a websocket object in our function
  function (socket) {
  
    console.log("We have a new client: " + socket.id);
  
    // When this user emits, client side: socket.emit('otherevent',some data);
    socket.on('mouse',
      function(data) {
        // Data comes in as whatever was sent, including objects
        console.log("Received: 'mouse' " + data.x + " " + data.y);
      
        // Send it to all other clients
        socket.broadcast.emit('mouse', data);
        
        // This is a way to send to everyone including sender
        // io.sockets.emit('message', "this goes to everyone");

      }
    );
    
    socket.on('disconnect', function() {
      console.log("Client has disconnected");
    });
  }
);

