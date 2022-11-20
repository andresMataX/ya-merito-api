const { request, response } = require('express')
const bcryptjs = require('bcryptjs')
const Usuario = require('../models/usuario')

const obtenerUsuarios = async (req = request, res = response) => {

  const usuarios = await Usuario.findAll()

  res.json(usuarios)

}


const crearUsuario = async (req = request, res = response) => {

  const { password, email } = req.body

  const existeEmail = await Usuario.findOne({
    where: {
      email
    }
  })

  if (existeEmail) {
    return res.status(400).json({
      msg: 'Ya existe un usuario con ese email ' + email
    })
  }

  const usuario = new Usuario(req.body)

  const salt = bcryptjs.genSaltSync()
  usuario.password = bcryptjs.hashSync(password, salt)

  usuario.save()

  res.json(usuario)

}


module.exports = {
  obtenerUsuarios,
  crearUsuario
}