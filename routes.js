'use strict';

const router = require( 'express' ).Router();
const { recordsModel } = require( './DataBase/index.js' );


router.get( '/records', ( req, res ) => {
    recordsModel.findAll().then( ( records ) => {
        res.send( records );
    } ).catch( ( err ) => {
        console.log( err );
    } );
} );

router.post( '/records', ( req, res ) => {
    const { country, date } = req.body;
    recordsModel.create( { country, date } ).then( ( record ) => {
        res.send( record );
    } ).catch( ( err ) => {
        console.log( err );
    } );
} );

router.delete( '/records/:id', ( req, res ) => {
    const id = req.params.id;
    recordsModel.destroy( { where: { id } } ).then( ( record ) => {
        res.status( 200 ).send( 'Record deleted' );
    } ).catch( ( err ) => {
        console.log( err );
    } );
} );

module.exports = router;
