const { DataTypes } = require("sequelize");
const sequelize = require("../../services/mysql/sequelize");
const User = require("../../apiServices/user/model");

const WhatsappSimulation = sequelize.define(
    "whatsapp_simulation",
    {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        id_user:{   
            type: DataTypes.INTEGER,
            references:{
                model: "user",
                key: "id",
                as: "User",
                onDelete: "cascade",
                onUpdate: "cascade"
            } 
        },
        sender:{
            type: DataTypes.STRING,
            allowNull: false
        },
        sender_contact:{
            type: DataTypes.STRING,
            allowNull: false
        },
        body_message:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
);

User.hasMany(WhatsappSimulation,{foreignKey: "id_user"});
WhatsappSimulation.belongsTo(User,{foreignKey: "id_user"});

module.exports = WhatsappSimulation;