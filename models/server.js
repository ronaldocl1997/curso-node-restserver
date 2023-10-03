const express = require('express');
const cors = require('cors');

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT || 8080;

        this.usuariosRoutePath = '/api/usuarios';

        //MIDLLEWARES
        this.middlewares();
        //RUTAS DE APLICACION
        this.routes();
    }

    middlewares(){

        //cors
        this.app.use(cors());

        // Lectura y Paseo del bodey
        this.app.use( express.json() );


        //directorio publico
        this.app.use( express.static('public'));
    }

    routes() {
        this.app.use(this.usuariosRoutePath, require('../routes/usuarios'));
    }

    lister(){

        this.app.listen(this.port, () =>{
            console.log("servidor corriendo en puerto ", this.port);
        });

    }
}


module.exports = Server;
