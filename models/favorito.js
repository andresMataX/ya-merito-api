const { DataTypes } = require('sequelize')
const db = require('../db/connection')

const Favorito = db.define('Favorito', {
  id_usuario: {
    type: DataTypes.INTEGER
  },
  id_direccion: {
    type: DataTypes.INTEGER
  },
  alias: {
    type: DataTypes.STRING
  },
  icono: {
    type: DataTypes.STRING
  },
})


module.exports = Favorito