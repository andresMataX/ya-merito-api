const { Sequelize } = require('sequelize')

const db = new Sequelize('ya-merito', 'gatuto', 'gatuto', {
  host: 'localhost',
  dialect: 'mysql'
})


module.exports = db