const { Sequelize, Model, DataTypes } = require('sequelize');

const {sequelize} = require('../../main/controller/database');  

const PollTable = sequelize.define('poll_table',{
    pollTypeId: {
        type: DataTypes.INTEGER,
        field: 'poll_table_id',
        autoIncrement: true,
        primaryKey: true,
        allowNullable: false,
        allowNull: false,
    },
    researchId: {
        type: DataTypes.INTEGER,
        field: 'research_id',
        autoIncrement: true,
        allowNullable: false,
        allowNull: false,
    },
    vehTypeId: {
        type: DataTypes.INTEGER,
        field: 'veh_type_id',
        autoIncrement: true,
        allowNullable: false,
        allowNull: false,
    },
    design: {
        type: DataTypes.CHAR(20),
        field: 'design',
        autoIncrement: true,
        allowNullable: false,
        allowNull: false,
    },
    section: {
        type: DataTypes.CHAR(10),
        field: 'section',
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
    tableName: 'poll_table',
    modelName: 'poll_table'
});

module.exports = {
    PollTable,
};