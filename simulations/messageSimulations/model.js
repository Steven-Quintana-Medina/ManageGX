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
        addressee:{
            type: DataTypes.STRING,
            allowNull: false
        },
        sender:{
            type: DataTypes.STRING,
            allowNull: false
        },
        sender_contact:{
            type: DataTypes.STRING,
            allowNull: false
        },
        bodyMessage:{
            type: DataTypes.STRING,
            allowNull: false,
        },

    },
    {
      timestamps: false,
      freezeTableName: true,
    }
);

module.exports = MessageService;