const { Sequelize, Model, DataTypes } = require('sequelize');

const {sequelize} = require('../../main/controller/database');  

const Question = sequelize.define('question',{
    questionId: {
        type: DataTypes.INTEGER,
        field: 'question_id',
        autoIncrement: true,
        primaryKey: true,
        allowNullable: false,
        allowNull: false,
    },
    pollTypeId: {
        type: DataTypes.INTEGER,
        field: 'poll_type_id',
        autoIncrement: true,
        allowNullable: false,
        allowNull: false,
    },
    questionCont: {
        type: DataTypes.CHAR(160),
        field: 'question_cont',
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
}, {
    sequelize,
    timestamps: false,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    tableName: 'question',
    modelName: 'question'
});

module.exports = {
    Question,
};