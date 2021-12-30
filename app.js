require( 'colors' );

const { inquirerMenu, pausa } = require('./helpers/inquirer');
console.clear();

const main = async() => {
    let opcion = '';

    do {
        opcion = await inquirerMenu();
        console.log({ opcion });

        await pausa();
    } while( opcion != '0' );
}

main();