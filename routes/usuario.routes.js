const { Router } = require('express')
const { check } = require('express-validator')

const { obtenerUsuarios, crearUsuario, actualizarUsuario, obtenerUsuario } = require('../controllers/usuarios')

const { validarCampos } = require('../middlewares/validar-campos')

const router = Router()

router.get('/', obtenerUsuarios)

router.get('/:id', [
  check('id', 'El ID es obligatorio').not().isEmpty(),
  validarCampos
], obtenerUsuario)

router.post('/', [
  check('email', 'El email no es válido').isEmail(),
  check('nombre', 'El nombre es obligatorio').not().isEmpty(),
  check('apellido', 'El apellido es obligatorio').not().isEmpty(),
  check('password', 'El password debe de ser más de 4 letras.').isLength({ min: 4 }),
  validarCampos
], crearUsuario)

router.put('/:id', [
  check('id', 'El ID es obligatorio').not().isEmpty(),
  check('password', 'El password debe de ser más de 4 letras.').isLength({ min: 4 }),
  validarCampos
], actualizarUsuario)


module.exports = router
