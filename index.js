const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);
const port = process.env.PORT || 3000;

let taxiRequest = null;

io.on("connection", socket => {  
    console.log("a user connected :D");
    socket.on("taxiRequest", routeResponse => {  
        console.log('Someone is looking for a taxi')  
        if(taxiRequest != null){
            taxiRequest.emit('taxiRequest', routeResponse)
        }  
    });

    socket.on("lookingForPassenger", ()=>{
        console.log("Someone is looking for a passenger");
        taxiRequest = socket;
    });
});

app.get('/', (req,res) => {
    res.send('Welcome')
})


server.listen(port, () => console.log('server is running on port ' + port));
