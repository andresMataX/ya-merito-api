const { Usuario } = require('../models/usuario');

const emailExiste = async (correo = '') => {

    const existeEmail = await Usuario.findOne({
        where: {
            email: correo
        }
    });
    if (existeEmail) {
        throw new Error(`El Correo ${correo} ya está registrado.`);
    }
}

const existeUsuarioPorId = async (id) => {

    const existeUsuario = await Usuario.findById(id)
    if (!existeUsuario) {
        throw new Error(`El ID no existe: ${id}.`);
    }
}

module.exports = {
    emailExiste,
    existeUsuarioPorId,
}