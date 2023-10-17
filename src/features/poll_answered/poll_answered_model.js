const { Sequelize, Model, DataTypes } = require('sequelize');

const {sequelize} = require('../../main/controller/database');  

const PollAnswered = sequelize.define('poll_answered',{
    pollAnsweredId: {
        type: DataTypes.INTEGER,
        field: 'poll_answ_id',
        autoIncrement: true,
        primaryKey: true,
        allowNullable: false,
        allowNull: false,
    },
    answerId: {
        type: DataTypes.INTEGER,
        field: 'answer_id',
        autoIncrement: true,
        allowNullable: false,
        allowNull: false,
    },
    pollId: {
        type: DataTypes.INTEGER,
        field: 'poll_id',
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
    PollAnswered,
};