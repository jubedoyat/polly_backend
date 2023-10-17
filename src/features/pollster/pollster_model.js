const { Sequelize, Model, DataTypes } = require('sequelize');
const { Country } = require('../country/country_model');

const {sequelize} = require('../../main/controller/database');  

const Pollster = sequelize.define('question',{
    pollsterId: {
        type: DataTypes.INTEGER,
        field: 'pollster_id',
        autoIncrement: true,
        primaryKey: true,
        allowNullable: false,
        allowNull: false,
    },
    countryId: {
        type: DataTypes.INTEGER,
        field: 'country_id',
        autoIncrement: true,
        allowNullable: false,
        allowNull: false,
    },
    username: {
        type: DataTypes.CHAR(20),
        field: 'username',
        autoIncrement: true,
        allowNullable: false,
        allowNull: false,
    },
    firstname: {
        type: DataTypes.CHAR(50),
        field: 'firstname',
        autoIncrement: true,
        allowNullable: false,
        allowNull: false,
    },
    lastname: {
        type: DataTypes.CHAR(50),
        field: 'lastname',
        autoIncrement: true,
        allowNullable: false,
        allowNull: false,
    },
    password: {
        type: DataTypes.CHAR(20),
        field: 'password',
        autoIncrement: true,
        allowNullable: false,
        allowNull: false,
    },
}, {
    sequelize,
    timestamps: false,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    tableName: 'pollster',
    modelName: 'pollster'
});

Country.hasMany(Pollster, {
    foreignKey: 'country_id'
});

Pollster.belongsTo(Country);

module.exports = {
    Pollster,
};