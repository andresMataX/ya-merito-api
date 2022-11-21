const { Router } = require('express')
const { check } = require('express-validator')
const { obtenerFavoritosUsuario, crearFavorito } = require('../controllers/favoritos')


const { validarCampos } = require('../middlewares/validar-campos')

const router = Router()

router.get('/:id', [
  check('id', 'El ID es obligatorio').not().isEmpty(),
  validarCampos
], obtenerFavoritosUsuario)

router.post('/:id', [
  check('id', 'El ID es obligatorio').not().isEmpty(),
  check('id_direccion', 'El ID de la dirección es obligatoria').not().isEmpty(),
  check('alias', 'El nombre del alias es obligatorio').not().isEmpty(),
  check('icono', 'El nombre del icono es obligatorio').not().isEmpty(),
  validarCampos
], crearFavorito)


module.exports = router
