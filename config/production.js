module.exports = {
  server: {
    port: process.env.PORT,
    api_version: process.env.API_VERSION,
  },
  mysql: {
    database: process.env.DATABASE,
    username:  process.env.USERNAME,
    password:  process.env.PASSWORD,
    host: process.env.HOST,
    dialect: process.env.DIALECT,
  },
  token: {
    SEED: process.env.SEED,
    expiration: process.env.EXPIRATION 
  }
};
