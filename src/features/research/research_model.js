const { Sequelize, Model, DataTypes } = require('sequelize');
const { Project } = require('../project/projetc_model');

const {sequelize} = require('../../main/controller/database');  

const Research = sequelize.define('research',{
    researchId: {
        type: DataTypes.INTEGER,
        field: 'research_id',
        autoIncrement: true,
        primaryKey: true,
        allowNullable: false,
        allowNull: false,
    },
    projectId: {
        type: DataTypes.INTEGER,
        field: 'project_id',
        autoIncrement: true,
        allowNullable: false,
        allowNull: false,
    },
    researchCode: {
        type: DataTypes.INTEGER,
        field: 'research_code',
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
    tableName: 'research',
    modelName: 'research'
});

Project.hasMany(Research, {
    foreignKey: 'project_id'
});

Research.belongsTo(Project);

module.exports = {
    Research,
};