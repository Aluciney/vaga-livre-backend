require('dotenv').config();

const express = require('express');
const cors = require('cors');
const http = require('http');
const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/api', require('./routes'));

const server = http.createServer(app);

server.listen(process.env.PORT || 3001);