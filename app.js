const argv = require('./config/yargs');
const todo = require('./todo/todo')

let command = argv._[0];

switch (command) {
    case 'crear':
        let task = todo.crear(argv.descripcion);
        console.log(task);
        
        break;
    case 'actualizar':
        if(todo.actualizar(argv.descripcion,argv.completado)){
            console.log("Se actualizó correctamente");
        }else{
            console.log("Ocurrió un problema al actualizar ");
        }
        break;
    case 'listar':
        console.log("C",argv.completado);
        
        if(argv.completado){
            console.log("T",argv.completado);
            todo.filter(argv.completado);
        }else{
            console.log("F",argv.completado);
            todo.listar();
        }
        break;
    case 'borrar':
        if(todo.borrar(argv.descripcion)){
            console.log("Se eliminó correctamente");
        }else{
            console.log("Ocurrió un problema al eliminar");
        }
        break;
    default:
        console.log("Comando no reconocido");
        break;
}