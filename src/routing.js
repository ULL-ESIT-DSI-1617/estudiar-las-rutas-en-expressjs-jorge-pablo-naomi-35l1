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

app.get('/in+fo?',function(req,res){
    res.send('La cadena coincide con la expresión regular: /in+fo?');
});


app.get('/ejemplo/a', function (req, res, next) {
  console.log('La respuesta será enviada por la siguiente función ...');
  next();
}, function (req, res) {
  res.send('Esta es la respuesta.');
});

var f0 = function (req, res, next) {
  console.log('Funcion 0');
  next();
};

var f1 = function (req, res, next) {
  console.log('Funcion 1');
  next();
};

var f2 = function (req, res) {
  res.send('Soy la última función.');
};

app.get('/ejemplo/b', [f0, f1, f2]);


app.get('/users/:userId/books/:bookId', function (req, res) {
  res.send(req.params);
});

app.route('/libro')
  .get(function (req, res) {
    res.send('Metodo GET de un libro');
  })
  .post(function (req, res) {
    res.send('Metodo POST de un libro');
  })
  