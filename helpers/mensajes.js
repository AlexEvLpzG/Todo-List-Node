const { resolve } = require('path');

require( 'colors' );

const mostrarMenu = () => {
    return new Promise( resolve => {
        console.clear();
        console.log( '================================'.green );
        console.log( '      Seleccione una opción'.green );
        console.log( '================================\n'.green );

        console.log( `${ '1.-'.cyan } Crear Tarea` );  
        console.log( `${ '2.-'.cyan } Listar Tareas` );  
        console.log( `${ '3.-'.cyan } Listar Tareas Completadas` );  
        console.log( `${ '4.-'.cyan } Listar Tareas Pendientes` );  
        console.log( `${ '5.-'.cyan } Completar Tarea(s)` );  
        console.log( `${ '6.-'.cyan } Borrar Tarea` );  
        console.log( `${ '0.-'.cyan } Salir \n` );  

        const readline = require( 'readline' ).createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question( 'Seleccione un opción: ', ( opcion ) => {
            readline.close();
            resolve( opcion );
        });
    });
};

const pausa = () => {
    return new Promise( resolve => {
        const readline = require( 'readline' ).createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question( `\nPresione ${ 'ENTER'.green } para continuar\n`, ( opcion ) => {
            readline.close();
            resolve();
        });
    });
}

module.exports = {
    mostrarMenu,
    pausa
}