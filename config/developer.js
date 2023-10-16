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
  imapConfig: {
    user: 'quintanasteven60@gmail.com',
    password: 'nosecomo123',
    host: 'imap.gmail.com',
    port: 993, 
    tls: true,
  }
};
