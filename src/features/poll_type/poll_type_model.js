const { Sequelize, Model, DataTypes } = require('sequelize');

const {sequelize} = require('../../main/controller/database');  

const PollType = sequelize.define('poll_type',{
    pollTypeId: {
        type: DataTypes.INTEGER,
        field: 'poll_type_id',
        autoIncrement: true,
        primaryKey: true,
        allowNullable: false,
        allowNull: false,
    },
    pollType: {
        type: DataTypes.CHAR(50),
        field: 'p_type',
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
    tableName: 'poll_type',
    modelName: 'poll_type'
});

module.exports = {
    PollType,
};