// import express (after npm install express)
const express = require('express');
const bodyParser = require("body-parser")

// create new express app and save it as "app"
const app = express();

app.use(bodyParser.json())

// server configuration
const PORT = process.env.PORT || 8080;

var val = 'No value yet';

// create a route for the app
app.get('/', (req, res) => {
    res.send(val);
});

app.post('/save', (req, res) => {
    val = req.body;
    res.status(200).end()

});

app.post('/chat', (req, res) => {
    val = req.body;
    res.status(200).end()

});

// make the server listen to requests
app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}/`);
});