const inquirer = require( 'inquirer' );
require( 'colors' );

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [ 
            {
                value: '1',
                name: `${ '1.-'.green } Crear tarea`
            },
            {
                value: '2',
                name: `${ '2.-'.green } Listar Tareas`
            },
            {
                value: '3',
                name: `${ '3.-'.green } Listar Tareas Completadas`
            },
            {
                value: '4',
                name: `${ '4.-'.green } Listar Tareas Pendientes`
            },
            {
                value: '5',
                name: `${ '5.-'.green } Completar Tarea(s)`
            },
            {
                value: '6',
                name: `${ '5.-'.green } Borrar Tarea`
            },
            {
                value: '0',
                name: `${ '0.-'.green } Salir`
            }
         ]
    }
];

const inquirerMenu = async() => {
    console.clear();
    console.log( '================================'.green );
    console.log( '      Seleccione una opción'.white );
    console.log( '================================\n'.green );

    const { opcion } = await inquirer.prompt(preguntas);

    return opcion;
}

const pausa = async() => {
    const pregunta = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${ 'ENTER'.green } para continuar`,
        }
    ];

    console.log( '\n' );
    await inquirer.prompt(pregunta);
}

const leerInput = async( mensaje ) => {
    const pregunta = [
        {
            type: 'input',
            name: 'descripcion',
            message: mensaje,
            validate( value ) {
                if( value.length ===  0 ) {
                    return 'Porfavor ingrese un valor';
                }

                return true;
            }
        }
    ];

    const { descripcion } = await inquirer.prompt( pregunta );
    return descripcion;
}

module.exports = { 
    inquirerMenu,
    pausa,
    leerInput
};