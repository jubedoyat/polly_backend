const { Sequelize, Model, DataTypes } = require('sequelize');

const {sequelize} = require('../../main/controller/database');  

const Project = sequelize.define('project',{
    projectId: {
        type: DataTypes.INTEGER,
        field: 'project_id',
        autoIncrement: true,
        primaryKey: true,
        allowNullable: false,
        allowNull: false,
    },
    projectCode: {
        type: DataTypes.INTEGER,
        field: 'project_code',
        autoIncrement: true,
        allowNullable: false,
        allowNull: false,
    },
    name: {
        type: DataTypes.CHAR(50),
        field: 'project_name',
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
    tableName: 'project',
    modelName: 'project'
});

module.exports = {
    Project,
};