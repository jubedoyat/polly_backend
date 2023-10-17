const { Sequelize, Model, DataTypes } = require('sequelize');

const {sequelize} = require('../../main/controller/database');  

const VehicleType = sequelize.define('vehcile_type',{
    vehicleTypeId: {
        type: DataTypes.INTEGER,
        field: 'veh_type_id',
        autoIncrement: true,
        primaryKey: true,
        allowNullable: false,
        allowNull: false,
    },
    vehType: {
        type: DataTypes.CHAR(50),
        field: 'v_type',
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
    tableName: 'vehcile_type',
    modelName: 'vehcile_type'
});

module.exports = {
    VehicleType,
};