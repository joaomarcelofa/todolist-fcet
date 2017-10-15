'use strict'

var bd = require('./../models/todo-model');

// deixa assim !

exports.obter_todos_todos = function (req, res) {
    bd.buscar();
    res.json({"teste": "teste"});
}

exports.inserir_todo = function (req, res) {

}

exports.obter_todo = function (req, res) {

}

exports.deletar_todo = function (req, res) {

}

exports.alterar_todo = function (req, res) {

}

exports.obter_tarefas = function (req, res) {

}

exports.inserir_tarefas = function (req, res) {

}