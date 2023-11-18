const Sequelize = require("sequelize");


const sequelize = new Sequelize({
	database: 'manager_gx',
    username:  'root',
    password:  '',
    host: 'localhost',
    dialect: "mysql",
});

sequelize.sync({force:false}).then(()=>{
	console.log("synchronized tables");
});

module.exports = sequelize;