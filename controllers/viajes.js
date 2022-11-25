const { request, response } = require('express')
const Viaje = require('../models/viaje')
const Usuario = require('../models/usuario')

const obtenerViajes = async (req = request, res = response) => {

  const viajes = await Viaje.findAll()

  res.json(viajes)

}

const obtenerViaje = async (req = request, res = response) => {

  const { id } = req.params

  const viaje = await Viaje.findByPk(id)

  res.json(viaje)

}

const obtenerViajesPorUsuario = async (req = request, res = response) => {

  // const viajes = await Viaje.findAll({ order: [['createdAt', 'ASC/DESC']] })

  const { id } = req.params

  const { page = 0 } = req.query

  const viajes = await Viaje.findAll({
    where: {
      id_usuario: id
    },
    limit: 12,
    offset: (Number.parseInt(page) - 1) * 12,
    order: [['createdAt', 'DESC']],
  })

  res.json(viajes)

}


const crearViaje = async (req = request, res = response) => {

  try {

    const { id } = req.params

    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
      return res.status(400).json({
        msg: 'No existe un usuario con el id ' + id
      })
    }

    const viaje = Viaje.build({
      id_usuario: id,
      direccion: req.body.direccion
    })

    await viaje.save()

    return res.json(viaje)

  } catch (error) {
    console.log(error);
  }

}


module.exports = {
  obtenerViajesPorUsuario,
  crearViaje,
  obtenerViajes,
  obtenerViaje,
}