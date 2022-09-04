const dbConfig = require('../config/mysql.ts');
const Sequelize = require('sequelize');
const db = {};

//dev 서버 prd 서버 구분 필요
let sequelizeConfig;
sequelizeConfig = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host
  }
);

db?.sequelizeConfig = sequelizeConfig;
db?.Sequelize = Sequelize;

module.exports = db;