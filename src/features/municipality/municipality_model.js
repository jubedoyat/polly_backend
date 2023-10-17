const { Sequelize, Model, DataTypes } = require('sequelize');
const { Department } = require('../department/department_model');

const {sequelize} = require('../../main/controller/database');  

const Municipality = sequelize.define('department',{
    municipalityId: {
        type: DataTypes.INTEGER,
        field: 'municipality_id',
        autoIncrement: true,
        primaryKey: true,
        allowNullable: false,
        allowNull: false,
    },
    departmentId: {
        type: DataTypes.INTEGER,
        field: 'department_id',
        autoIncrement: true,
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
    tableName: 'municipality',
    modelName: 'municipality'
});

Department.hasMany(Municipality, {
    foreignKey: 'department_id'
});

Municipality.belongsTo(Department);

module.exports = {
    Municipality,
};