const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);
const port = process.env.PORT || 3000;

io.on("connection", socket => {  
    console.log("a user connected :D");
socket.on("taxiRequest", route => {    
    console.log(route);    
    });
});

app.get('/', (req,res) => {
    res.send('Welcome')
})


server.listen(port, () => console.log('server is running on port ' + port));
