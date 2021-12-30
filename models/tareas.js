const Tarea = require( './tarea' );

class Tareas {
    _listado = {};

    constructor() {
        this._listado = {};
    }

    get listadoTareas() {
        const listado = [];
        Object.keys( this._listado ).forEach( key => {
            const tarea = this._listado[key];
            listado.push( tarea );
        });

        return listado;
    }

    cargarTareaFromArray( tareas = [] ) {
        tareas.forEach( tarea => {
            this._listado[ tarea.id ] = tarea;
        });
    } 

    crearTarea( descripcion ) {
        const tarea = new Tarea( descripcion );
        this._listado[ tarea.id ] = tarea;
    }

    listadoCompleto() {
        console.log();
        this.listadoTareas.forEach(( tarea, index ) => {
            const { fechaCompletado, descripcion } = tarea;
            const indice = `${ index + 1 }.-`.green;
            const getStatus = ( fechaCompletado ) ? 'Completada'.green : 'Pendiente'.red;

            console.log( `${ indice } ${ descripcion } ${ '::'.cyan } ${ getStatus }` );
        });
    }
}

module.exports = Tareas;