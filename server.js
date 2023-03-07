'use strict';

const express = require( 'express' );
const app = express();
const cors = require( 'cors' );

const recordsRouter = require( './routes.js' );

app.use( cors() );
app.use( express.json() );

app.use( recordsRouter );

/* This is a route handler. It is a function that is called when a request is made
to the root of the server. */
app.get( '/', ( req, res ) => {
    res.send( 'Hello World!' );
} );

/**
 * It starts the server on the port passed in as an argument
 * @param port - The port number to listen on.
 */
const start = ( port ) => {
    app.listen( port, () => {
        console.log( `Server started on port ${port}` );
    } );
};

module.exports = {
    app: app,
    start: start
};