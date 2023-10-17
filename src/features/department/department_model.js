const { Sequelize, Model, DataTypes } = require('sequelize');
const { Country } = require('../country/country_model');

const {sequelize} = require('../../main/controller/database');  

const Department = sequelize.define('department',{
    departmentId: {
        type: DataTypes.INTEGER,
        field: 'department_id',
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
    tableName: 'department',
    modelName: 'department'
});

Country.hasMany(Department, {
    foreignKey: 'country_id'
});

Department.belongsTo(Country);

module.exports = {
    Department,
};