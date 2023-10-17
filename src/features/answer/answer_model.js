const { Sequelize, Model, DataTypes } = require('sequelize');
const { Question } = require('../question/question_model');

const {sequelize} = require('../../main/controller/database');  

const Answer = sequelize.define('answer',{
    answerId: {
        type: DataTypes.INTEGER,
        field: 'answer_id',
        autoIncrement: true,
        primaryKey: true,
        allowNullable: false,
        allowNull: false,
    },
    questionId: {
        type: DataTypes.INTEGER,
        field: 'question_id',
        unique: false,
        allowNullable: false,
        allowNull: false,
    },
    answerCont: {
        type: DataTypes.INTEGER,
        field: 'answer_cont',
        allowNullable: false,
        allowNull: false,
    }
}, {
    sequelize,
    timestamps: false,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    tableName: 'answer',
    modelName: 'answer'
});

Question.hasMany(Answer, {
    foreignKey: 'question_id'
});

Answer.belongsTo(Question);

module.exports = {
    Answer,
};