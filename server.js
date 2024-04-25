var express = require('express');
var app = express();
var fs = require('fs');

app.get('/users', function (req, res) {
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
})

app.get('/', (req, res) => {
    res.send('Selamat datang di API kami!');
});

var server = app.listen(8080, function () {
    console.log("REST API demo app listening at http://localhost:8080");
})