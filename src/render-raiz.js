var express = require('express');
var app = express();
var path = require('path');


app.set('views', __dirname + 'views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public/'));

var server = app.listen(8080, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Running at -> http://%s:%s', host, port);
});

app.get('/', function (req, res) {
    res.render('index');
});
