var express = require("express");
var app = express();
var socket = require("socket.io");
var server = app.listen(process.env.PORT||4000, function(){console.log("Listening on port 4000!")});

app.use(express.static("public"));
var io = socket(server);

io.on("connection", function(socket){
  console.log("made socket connection");

  socket.on("chat", function(data){
    io.sockets.emit("chat", data);
  });

  socket.on("typing", function(data){
    socket.broadcast.emit("typing", data);
  });
});
