require( 'colors' );

const { guardarTarea, leerDB } = require('./helpers/guardarArchivos');
const { inquirerMenu, pausa, leerInput, listadoTareasBorrar, confirmar, listadoTareasModificar } = require( './helpers/inquirer' );
const Tareas = require( './models/tareas' );

const main = async() => {
    let opcion = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if( tareasDB ) {
        tareas.cargarTareaFromArray( tareasDB );
    }

    do {
        opcion = await inquirerMenu();
        
        switch( opcion ) {
            case '1':
                const descripcion = await leerInput( 'Descripción: ' );
                tareas.crearTarea( descripcion );
                break;
            case '2':
                tareas.listadoCompleto();
                break;
            case '3':
                tareas.listadoTareasPendientesCompletadas();
                break;
            case '4':
                tareas.listadoTareasPendientesCompletadas( false );
                break;
            case '5':
                const ids = await listadoTareasModificar( tareas.listadoTareas );
                tareas.toggleCompletadas( ids );
                break;
            case '6':
                const id = await listadoTareasBorrar( tareas.listadoTareas );
                if( id !== '0' ) { 
                    const confirmarPregunta = await confirmar( '¿Está seguro?' );
                    if( confirmarPregunta ) {
                        tareas.borrarTarea( id );
                        console.log( '\nTarea fue borrada correctamente'.green );
                    }
                };
                break;
        }

        guardarTarea( tareas.listadoTareas );

        await pausa();
    } while( opcion != '0' );
}

main();