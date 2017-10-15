'use strict'

var bd = new function () {

    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        password: 'root',
        database: 'teste',
    });

    this.conectar = function () {
        connection.connect(function (err) {
            if (err) {
                console.log("Erro na conexao: " + err);
                return;
            }
            else {
                console.log("conectado! " + connection.threadId);
            }
        });
    }

    this.buscar = function () {
        connection.query('SELECT * FROM teste1', function (error, results, fields) {
            if (error) throw error;
            console.log('Resultado', results);
        });
    }
}

module.exports = bd;

/* 
Modelo
var todolist = {
    todos:[
        {
            id:1,
            titulo: "Titulo da tarefa",
            tarefas: [
                {
                    id: 1,
                    descricao : "Comprar leite",
                    concluido : false,
                    data : Date.now()
                },
                {
                    id: 2,
                    descricao: "Zoar o Eullen de Cabeçudo",
                    concluido: true,
                    data: Date.now()
                }
            ]
        }
    ]
}*/