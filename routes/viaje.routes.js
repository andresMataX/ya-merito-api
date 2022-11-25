const { Router } = require('express')
const { check } = require('express-validator')

const { crearViaje, obtenerViajesPorUsuario, obtenerViajes, obtenerViaje } = require('../controllers/viajes')

const { validarCampos } = require('../middlewares/validar-campos')

const router = Router()

router.get('/', obtenerViajes)

router.get('/:id', [
  check('id', 'El ID es obligatorio').not().isEmpty(),
  validarCampos
], obtenerViaje)

router.get('/usuario/:id', [
  check('id', 'El ID es obligatorio').not().isEmpty(),
  validarCampos
], obtenerViajesPorUsuario)

router.post('/:id', [
  check('id', 'El ID es obligatorio').not().isEmpty(),
  check('direccion', 'La dirección es obligatoria').not().isEmpty(),
  validarCampos
], crearViaje)


module.exports = router
