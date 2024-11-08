require('dotenv').config();
const express = require("express");
const jsonwebtoken = require('jsonwebtoken');
const app = express();
const http = require('http');

const server = http.createServer(app);

app.get('/', (req,res) => {
    res.send("<h1>Hello World</h1>")
})

server.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
