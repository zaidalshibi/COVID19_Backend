'use strict';

const Records = ( sequelize, DataTypes ) => sequelize.define( 'records', {
    country: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date: {
        type: DataTypes.STRING,
        allowNull: false,
    },
} );

module.exports = Records;