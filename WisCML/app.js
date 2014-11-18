// built-in modules
var express = require('express');
var bodyParser = require('body-parser');

global.__base = __dirname + '/';

var routes = require('./routes');
var http = require('http');

var app = express();

// all environments
app.set('port', process.env.PORT || 8080);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.Router());

app.get('/api/log/txt/:txt', routes.log);
app.get('/api/data/t1/:t1/t2/:t2/t3/:t3/t4/:t4/r1/:r1/r2/:r2/r3/:r3/r4/:r4/r5/:r5', routes.data);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
