const express = require('express')
var cors = require('cors')
const db = require('../db/connection')


class Server {

  constructor() {

    this.app = express()
    this.port = process.env.PORT

    this.paths = {
      auth: '/api/auth',
      usuario: '/api/usuario',
      viaje: '/api/viaje',
      favorito: '/api/favorito',
    }

    this.dbConnection()
    this.middlewares()
    this.routes()

  }

  async dbConnection() {

    try {

      await db.authenticate()
      console.log('Base de datos online');

    } catch (error) {
      throw new Error(error)
    }

  }

  middlewares() {

    this.app.use(cors())

    this.app.use(express.json())

  }

  routes() {

    this.app.use(this.paths.auth, require('../routes/auth.routes'))
    this.app.use(this.paths.usuario, require('../routes/usuario.routes'))
    this.app.use(this.paths.viaje, require('../routes/viaje.routes'))
    this.app.use(this.paths.favorito, require('../routes/favorito.routes'))

  }

  listen() {

    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en ${this.port}`)
    })

  }

}


module.exports = Server