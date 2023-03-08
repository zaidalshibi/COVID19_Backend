'use strict';
require( 'dotenv' ).config();
const { Sequelize, DataTypes } = require( 'sequelize' );
const records = require( './models.js' );


const DATABASE_URL = process.env.DATABASE_URL || 'postgres://zaid:1470@localhost:5432/postgres';

const sequelizeOption = {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
};

const sequelize = new Sequelize( DATABASE_URL, sequelizeOption );

const recordsModel = records( sequelize, DataTypes );


module.exports = {
    db: sequelize,
    recordsModel
};