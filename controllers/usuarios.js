const { request, response } = require('express')
const Usuario = require('../models/usuario')

const obtenerUsuarios = async (req = request, res = response) => {

  const usuarios = await Usuario.findAll()

  res.json(usuarios)

}


module.exports = {
  obtenerUsuarios
}