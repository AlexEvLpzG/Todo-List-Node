require( 'colors' );

const { guardarTarea, leerDB } = require('./helpers/guardarArchivos');
const { inquirerMenu, pausa, leerInput } = require( './helpers/inquirer' );
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
            case '3':
                tareas.listadoTareasPendientesCompletadas();
                break;
            case '4':
                tareas.listadoTareasPendientesCompletadas( false );
                break;
        }

        guardarTarea( tareas.listadoTareas );

        await pausa();
    } while( opcion != '0' );
}

main();