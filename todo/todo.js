const fs = require('fs');

let todoList = []

const saveDB = (todos) => {

    return new Promise((res, rej) => {
        let data = JSON.stringify(todos);
        fs.writeFile('./db/data.json', data, (err) => {
            if (err) {
                rej(err)
            }
            res('Tarea guardada')
        })
    })
}

const loadDB = () => {

    try {
        todoList = require('../db/data.json')
    } catch (err) {
        todoList = [];
    }

}

const crear = (descripcion) => {

    loadDB();

    let todo = {
        descripcion,
        completado: false
    }

    todoList.push(todo);
    saveDB(todoList);
    return todo;
}

const listar = () => {
    loadDB();
    for (todo of todoList) {
        console.table(todo);
    }
}

const actualizar = (descripcion, completado) => {
    loadDB();
    let i = todoList.findIndex(todo => todo.descripcion === descripcion);
    if (i >= 0) {
        todoList[i].completado = completado;
        saveDB(todoList)
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    loadDB();
    let i = todoList.findIndex(todo => todo.descripcion === descripcion);
    if (i >= 0) {
        todoList.splice(todoList[i]);
        saveDB(todoList);
        return true;
    } else {
        return false;
    }
}

const filter = (completado) => {
    loadDB();
    let todoFilter = []
    console.log("C2",completado);
    
    todoList.map(todo => {
        if (todo.completado === completado) {
            todoFilter.push(todo);
        }

    });
    console.log(todoFilter);

    for (let todo of todoFilter) {
        console.table(todo);
    }
}

module.exports = {
    crear,
    listar,
    actualizar,
    borrar,
    filter
}