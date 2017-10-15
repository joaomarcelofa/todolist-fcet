'use strict'

var express = require ('express');
var bodyParser = require('body-parser');

var server  = express();
var port    = 3000;

var controller = require('./controller/todo-controller');
var routes     = require('./routes/routes');
var bd         = require('./models/todo-model');

try{
    server.use(bodyParser.urlencoded({extended : true}));
    server.use(bodyParser.json());

    bd.conectar();

    routes(server);
    server.listen(port);
    console.log("Server rodando na porta: " + 3000);


}
catch(error){
    console.log(error);
}


