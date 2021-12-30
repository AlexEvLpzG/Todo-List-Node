const fs = require( 'fs' );

const guardarTarea = ( data ) => {
    const archivo = './database/data.json';

    fs.writeFileSync( archivo, JSON.stringify(data) );
}

module.exports = {
    guardarTarea
}