const { response, request } = require('express');

const usuariosGet = (req = request, res = response)=> {

    const query = req.query;
    res.json({
        msg: "get api- controlador",
        query
    });
};

const usuariosPut = (req = request, res = response)=> {

    const id = req.params.id
    res.json({
        msg: "put api -controlador",
        id
    });
}

const usuariosPost = (req = request, res = response)=> {

    const {nombre, edad} = req.body;

    res.json({
        msg: "post api - controlador",
        nombre,
        edad
    });
}

const usuariosDelete = (req = request, res = response)=> {
    res.json({
        msg: "delete api - controlador"
    });
}



module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}