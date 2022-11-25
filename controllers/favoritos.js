const { request, response } = require('express')
const Viaje = require('../models/viaje')
const Favorito = require('../models/favorito')
const Usuario = require('../models/usuario')

const obtenerFavoritosUsuario = async (req = request, res = response) => {

  // const viajes = await Viaje.findAll({ order: [['createdAt', 'ASC/DESC']] })
  try {

    const { id } = req.params

    const favoritos = await Favorito.findAll({
      where: {
        id_usuario: id
      },
      order: [['createdAt', 'DESC']]
    });

    return res.json(favoritos)

  } catch (error) {

  }
  const viajes = await Viaje.findAll()

  res.json(viajes)

}


const crearFavorito = async (req = request, res = response) => {

  try {

    const { id } = req.params

    const usuario = await Usuario.findByPk(id)
    const direccion = await Viaje.findByPk(req.body.id_direccion)

    if (!usuario) {
      return res.status(400).json({
        msg: 'No existe un usuario con el id ' + id
      })
    }

    if (!direccion) {
      return res.status(400).json({
        msg: 'No existe una dirección con el id ' + req.body.id_direccion
      })
    }

    console.log(req.body);

    const favorito = Favorito.build({
      id_direccion: req.body.id_direccion,
      id_usuario: Number.parseInt(id),
      alias: req.body.alias,
      icono: req.body.icono,
    })

    await favorito.save()

    return res.json(favorito)

  } catch (error) {
    console.log(error);
  }

}


module.exports = {
  obtenerFavoritosUsuario,
  crearFavorito
}