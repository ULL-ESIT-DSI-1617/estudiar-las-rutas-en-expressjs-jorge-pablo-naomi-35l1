var express = require('express');
var app = express();
var path = require('path');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));

var server = app.listen(8080, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Running at -> http://%s:%s', host, port);
});

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/prueba/p', function (req, res) {
    res.send('Got a GET REQUEST');
});

app.post('/form/post', function (req, res) {
    res.send('Got a POST REQUEST');
});

app.all('/secreto',function(req,res){
   console.log("Se ha accedido a la zona secreta.");
   res.send('Has accedido  un lugar que no deberías conocer.');
});

