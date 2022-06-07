const { response } = require('express');
const express = require('express');

const app = express();


app.get('/currenttime', function(req, res) {
    res.send('<h1>' + new Date().toISOString() + '</h1>');
});

app.get('/', function(req, res) {
    res.send('<form><label>Your Name</label><input type="text"></form>')
});

app.listen(3000);

