const { Model, DataTypes } = require('sequelize');
const { Pollster } = require('../pollster/pollster_model');
const { Supervisor } = require('../supervisor/supervisor_model');
const { Department } = require('../department/department_model');
const { Municipality } = require('../municipality/municipality_model');
const { PollType } = require('../poll_type/poll_type_model');

const {sequelize} = require('../../main/controller/database');  

const Poll = sequelize.define('poll',{
    pollTableRowId: {
        type: DataTypes.INTEGER,
        field: 'poll_id',
        autoIncrement: true,
        primaryKey: true,
        allowNullable: false,
        allowNull: false,
    },
    pollsterId: {
        type: DataTypes.INTEGER,
        field: 'pollster_id',
        autoIncrement: true,
        allowNullable: false,
        allowNull: false,
    },
    supervisorId: {
        type: DataTypes.INTEGER,
        field: 'supervisor_id',
        autoIncrement: true,
        allowNullable: false,
        allowNull: false,
    },
    departmentId: {
        type: DataTypes.INTEGER,
        field: 'department_id',
        autoIncrement: true,
        allowNullable: false,
        allowNull: false,
    },
    municipalityId: {
        type: DataTypes.INTEGER,
        field: 'municipality_id',
        autoIncrement: true,
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
    vehicleTypeId: {
        type: DataTypes.INTEGER,
        field: 'vehicle_type_id',
        autoIncrement: true,
        allowNullable: false,
        allowNull: false,
    },
    stationId: {
        type: DataTypes.INTEGER,
        field: 'station_id',
        autoIncrement: true,
        allowNullable: false,
        allowNull: false,
    },
    longitude: {
        type: DataTypes.INTEGER,
        field: 'longitude',
        autoIncrement: true,
        allowNullable: false,
        allowNull: false,
    },
    latitude: {
        type: DataTypes.INTEGER,
        field: 'latitude',
        autoIncrement: true,
        allowNullable: false,
        allowNull: false,
    },
    hour: {
        type: DataTypes.INTEGER,
        field: 'hour',
        autoIncrement: true,
        allowNullable: false,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        field: 'date',
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
    tableName: 'poll',
    modelName: 'poll'
});

Pollster.hasMany(Poll, {
    foreignKey: 'pollster_id'
});

Poll.belongsTo(Pollster);

Supervisor.hasMany(Poll, {
    foreignKey: 'supervisor_id'
});

Poll.belongsTo(Supervisor);

Department.hasMany(Poll, {
    foreignKey: 'department_id'
});

Poll.belongsTo(Department);

Municipality.hasMany(Poll, {
    foreignKey: 'municipality_id'
});

Poll.belongsTo(Municipality);

PollType.hasMany(Poll, {
    foreignKey: 'poll_type_id'
});

Poll.belongsTo(PollType);

module.exports = {
    Poll,
};