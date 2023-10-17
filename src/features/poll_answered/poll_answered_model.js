const { Sequelize, Model, DataTypes } = require('sequelize');
const { Answer } = require('../answer/answer_model');
const { Poll } = require('../poll/poll_model');

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

Answer.hasMany(PollAnswered, {
    foreignKey:'answer_id'
});

PollAnswered.belongsTo(Answer);

Poll.hasMany(PollAnswered, {
    foreignKey:'poll_id'
});

PollAnswered.belongsTo(Poll);

module.exports = {
    PollAnswered,
};