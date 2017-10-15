'use strict'

module.exports = function (server) {

    var todoList = require('./../controller/todo-controller');

    server.route('/todolist')
        .get(todoList.obter_todos_todos)
        .post(todoList.inserir_todo);

    server.route('/todolist/:id')
        .get(todoList.obter_todo)
        .delete(todoList.deletar_todo)
        .put(todoList.alterar_todo);

    server.route('/todolist/:id/tarefas')
        .get(todoList.obter_tarefas)
        .post(todoList.inserir_tarefas);
}