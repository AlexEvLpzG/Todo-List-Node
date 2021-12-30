require( 'colors' );

const { inquirerMenu, pausa, leerInput } = require( './helpers/inquirer' );
const Tareas = require( './models/tareas' );

const main = async() => {
    let opcion = '';
    const tareas = new Tareas();

    do {
        opcion = await inquirerMenu();
        
        switch( opcion ) {
            case '1':
                const descripcion = await leerInput( 'Descripción: ' );
                tareas.crearTarea( descripcion );
                break;
            case '2':
                console.log( tareas._listado );
                break;
        }

        await pausa();
    } while( opcion != '0' );
}

main();