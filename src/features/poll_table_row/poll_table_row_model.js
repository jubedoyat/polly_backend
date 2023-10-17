const { Sequelize, Model, DataTypes } = require('sequelize');
const { PollTable } = require('../poll_table/poll_table_model');

const {sequelize} = require('../../main/controller/database');  

const PollTableRow = sequelize.define('poll_table',{
    pollTableRowId: {
        type: DataTypes.INTEGER,
        field: 'p_tab_row_id',
        autoIncrement: true,
        primaryKey: true,
        allowNullable: false,
        allowNull: false,
    },
    pollTableId: {
        type: DataTypes.INTEGER,
        field: 'poll_table_id',
        autoIncrement: true,
        allowNullable: false,
        allowNull: false,
    },
    saving: {
        type: DataTypes.INTEGER,
        field: 'saving',
        autoIncrement: true,
        allowNullable: false,
        allowNull: false,
    },
    option: {
        type: DataTypes.CHAR(30),
        field: 'option',
        autoIncrement: true,
        allowNullable: false,
        allowNull: false,
    },
    fee: {
        type: DataTypes.INTEGER,
        field: 'fee',
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
    tableName: 'poll_table_row',
    modelName: 'poll_table_row'
});

PollTable.hasMany(PollTableRow, {
    foreignKey: 'p_tab_row_id'
});

PollTableRow.belongsTo(PollTable);

module.exports = {
    PollTableRow,
};