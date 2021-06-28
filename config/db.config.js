module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "admin",
    DB: "vendana_core",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };