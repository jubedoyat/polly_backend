const { Sequelize, Model, DataTypes } = require('sequelize');
const { Research } = require('../research/research_model');

const {sequelize} = require('../../main/controller/database');  

const Station = sequelize.define('station',{
    stationId: {
        type: DataTypes.INTEGER,
        field: 'station_id',
        autoIncrement: true,
        primaryKey: true,
        allowNullable: false,
        allowNull: false,
    },
    researchId: {
        type: DataTypes.INTEGER,
        field: 'researcht_id',
        autoIncrement: true,
        allowNullable: false,
        allowNull: false,
    },
    stationCode: {
        type: DataTypes.INTEGER,
        field: 'station_code',
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
    tableName: 'station',
    modelName: 'station'
});

Research.hasMany(Station, {
    foreignKey: 'research_id'
});

Station.belongsTo(Research);

module.exports = {
    Station,
};