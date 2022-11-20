const { Router } = require('express')
const { obtenerUsuarios } = require('../controllers/usuarios')

const router = Router()

router.get('/', obtenerUsuarios)


module.exports = router
