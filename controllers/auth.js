const { request, response } = require('express')
const bcryptjs = require('bcryptjs');
const Usuario = require('../models/usuario');

const login = async (req = request, res) => {

  const { email, password } = req.body;

  try {

    const usuario = await Usuario.findOne({
      where: {
        email,
        estado: true
      }
    })

    if (!usuario) {
      return res.status(400).json({
        msg: 'Usuario / Password no son correctos'
      })
    }

    const validPassword = bcryptjs.compareSync(password, usuario.password);
    if (!validPassword) {
      return res.status(400).json({
        msg: 'Usuario / Password no son correctos'
      })
    }

    return res.json(usuario)

  } catch (error) {

  }

}


module.exports = {
  login
}