module.exports = {
  server: {
    port: 3000,
    api_version: 'V1',
  },
  mysql: {
    database: 'manager_gx',
    username:  'root',
    password:  '',
    host: 'localhost',
    dialect: "mysql",
  },
  token: {
    SEED: 'secret',
    expiration: '1h'
  },
};
