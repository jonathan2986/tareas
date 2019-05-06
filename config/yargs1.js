


const argv = require('yargs')
    .command('crear', 'crear un elemento por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'descripcion de la tarea'
        }
    }).command('actualizar', 'actualiza estados por hacer',{
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'descrip de la tarea'
        },
        completado: {
            default: true,
            alias: 'c',
            desc: 'marca como completado'
        }
    }).command('borrar', 'borra una tarea',{
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'descrip de la tarea'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}