const { Router } = require('express')
const { check } = require('express-validator')

const { obtenerViajes, crearViaje } = require('../controllers/viajes')

const { validarCampos } = require('../middlewares/validar-campos')

const router = Router()

router.get('/', obtenerViajes)

router.post('/:id', [
  check('id', 'El ID es obligatorio').not().isEmpty(),
  check('direccion', 'La dirección es obligatoria').not().isEmpty(),
  validarCampos
], crearViaje)


module.exports = router
