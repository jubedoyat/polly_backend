const { Sequelize, Model, DataTypes } = require('sequelize');

const {sequelize} = require('../../main/controller/database');  

const Supervisor = sequelize.define('supervisor',{
    supervisorId: {
        type: DataTypes.CHAR(50),
        field: 'supervisor_id',
        autoIncrement: true,
        primaryKey: true,
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
        type: DataTypes.INTEGER,
        field: 'lastname',
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
    tableName: 'supervisor',
    modelName: 'supervisor'
});

module.exports = {
    Supervisor,
};