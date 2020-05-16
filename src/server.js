require('dotenv').config();

const express = require('express');
const cors = require('cors');
const http = require('http');
const socketIO = require("socket.io");
const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/api', require('./routes'));

const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', socket => {

    socket.on('update_parking', parking => {
        io.emit('update_parking', parking);
    });

    socket.on('request_routing_parking', parking => {
        io.emit('request_routing_parking', parking);
    });

    socket.on('cancel_routing_parking', parking => {
        io.emit('cancel_routing_parking', parking);
    });

    socket.on('finish_routing_parking', parking => {
        io.emit('finish_routing_parking', parking);
    });

    socket.on('disconnect', () => {

    });
});


server.listen(process.env.PORT || 3001);