const express = require('express')
var cors = require('cors')


class Server {

  constructor() {

    this.app = express()
    this.port = process.env.PORT
    this.paths = {
      auth: '/api/auth',
    }

  }

  routes() {

    // this.app.use(this.paths.auth, )

  }

  listen() {

    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en ${this.port}`)
    })

  }

}


module.exports = Server