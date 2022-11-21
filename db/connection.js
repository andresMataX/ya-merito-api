const { Sequelize } = require('sequelize')

const db = new Sequelize(process.env.DB_MYSQL, process.env.USER_MYSQL, process.env.PASS_MYSQL, {
  host: process.env.HOST_MYSQL,
  dialect: 'mysql'
})


module.exports = db