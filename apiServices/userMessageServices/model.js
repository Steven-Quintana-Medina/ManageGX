const { DataTypes } = require("sequelize");
const sequelize = require("../../services/mysql/sequelize");

const User = require("../user/model");
const MessageService = require("../messageServices/model");

const UserMessageService = sequelize.define(
    "user_message_service",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        id_user: {
            type: DataTypes.INTEGER,
            references: {
                model: "user",
                key: "id",
                as: "User",
                onDelete: "cascade",
                onUpdate: "cascade",
            },
        },
        id_message_service: {
            type: DataTypes.INTEGER,
            references: {
                model: "message_service",
                key: "id",
                as: "MessageService",
                onDelete: "cascade",
                onUpdate: "cascade",
            },
        }
    },
    {
        timestamps: false,
        freezeTableName: true,
    }
);

User.hasMany(UserMessageService, { foreignKey: "id_user" });
UserMessageService.belongsTo(User, { foreignKey: "id_user" });

MessageService.hasMany(UserMessageService, { foreignKey: "id_message_service" });
UserMessageService.belongsTo(MessageService, { foreignKey: "id_message_service" })


module.exports = UserMessageService;

