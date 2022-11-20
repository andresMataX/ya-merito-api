const { request, response } = require('express')
const Viaje = require('../models/viaje')

const obtenerViajes = async (req = request, res = response) => {

  const viajes = await Viaje.findAll()

  res.json(viajes)

}


const crearViaje = async (req = request, res = response) => {



}


module.exports = {
  obtenerViajes,
  crearViaje
}