const Sequelize = require('sequelize');
require('dotenv').config();
console.log(process.env);
let sequelize;

if (process.env.JAWSDB_URL) {
  // For production (using JawsDB)
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  // For development (using local MySQL)
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;