const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}
const completado = {
    demand: true,
    alias: 'c',
    desc: 'Marca como completado pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crear tarea por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza tarea por hacer', {
        descripcion,
        completado
    })
    .command('listar', 'Lista las tareas por hacer', {
        completado
    })
    .command('borrar', 'Borrar tarea por hacer', {
        descripcion
    }).help()
    .argv

module.exports = argv;