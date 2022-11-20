const { DataTypes } = require('sequelize')
const db = require('../db/connection')

const Viaje = db.define('Viaje', {
  id_usuario: {
    type: DataTypes.INTEGER
  },
  direccion: {
    type: DataTypes.STRING
  },
})


module.exports = Viaje