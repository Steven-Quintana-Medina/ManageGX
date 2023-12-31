const { DataTypes } = require("sequelize");
const sequelize = require("../../services/mysql/sequelize");

const MessageService = sequelize.define(
    "message_service",
    {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
);

module.exports = MessageService;