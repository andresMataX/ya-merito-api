const { Router } = require('express')
const { check } = require('express-validator')

const { obtenerViajes } = require('../controllers/viajes')

const { validarCampos } = require('../middlewares/validar-campos')

const router = Router()

router.get('/', obtenerViajes)

// router.post('/', [
//   check('email', 'El email no es válido').isEmail(),
//   check('nombre', 'El nombre es obligatorio').not().isEmpty(),
//   check('apellido', 'El apellido es obligatorio').not().isEmpty(),
//   check('password', 'El password debe de ser más de 4 letras.').isLength({ min: 4 }),
//   validarCampos
// ], crearUsuario)

// router.put('/:id', [
//   check('id', 'No es un ID válido'),
//   check('password', 'El password debe de ser más de 4 letras.').isLength({ min: 4 }),
//   validarCampos
// ], actualizarUsuario)


module.exports = router
