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

  const usuario = Usuario.build(req.body)

  const salt = bcryptjs.genSaltSync()
  usuario.password = bcryptjs.hashSync(password, salt)

  await usuario.save()

  res.json(usuario)

}


const actualizarUsuario = async (req = request, res = response) => {

  const { id } = req.params;

  const { password, ...resto } = req.body;

  if (password) {
    const salt = bcryptjs.genSaltSync()
    resto.password = bcryptjs.hashSync(password, salt)

    const usuario = await Usuario.findByPk(id)

    if (!usuario) {
      return res.status(400).json({
        msg: 'No existe un usuario con el id ' + id
      })
    }

    await usuario.update(resto)

    return res.json(usuario)
  }

}


module.exports = {
  obtenerUsuarios,
  crearUsuario,
  actualizarUsuario
}