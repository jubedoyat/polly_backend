const { Sequelize, Model, DataTypes } = require('sequelize');

const {sequelize} = require('../../main/controller/database');  

const Country = sequelize.define('country',{
    countryId: {
        type: DataTypes.INTEGER,
        field: 'country_id',
        autoIncrement: true,
        primaryKey: true,
        allowNullable: false,
        allowNull: false,
    },
    name: {
        type: DataTypes.CHAR(50),
        field: 'name',
        unique: false,
        allowNullable: false,
        allowNull: false,
    },
}, {
    sequelize,
    timestamps: false,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    tableName: 'country',
    modelName: 'country'
});

module.exports = {
    Country,
};