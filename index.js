'use strict';

const { start } = require( './server.js' );
const { db } = require( './DataBase/index.js' );

db.sync().then( () => {
    start( 3000 );
} ).catch( ( err ) => {
    console.log( err );
} );