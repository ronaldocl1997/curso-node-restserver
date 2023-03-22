

const {response, request} = require('express');

const usuariosGet = (req = request, res = response) =>{

    const {nombre,api} = req.query;

    res.json(
        {
            msg:'get api - controlador',
            nombre,
            api
        }
    )
}

const usuariosPost = (req, res) =>{

    const {nombre} = req.body;

    res.json(
        {
            msg:'post api - controlador',
            nombre
        }
    )
}

const usuariosPut = (req, res) =>{

    const {id} = req.params;

    res.json(
        {
            msg:'put api - controlador',
            id
        }
    )
}

const usuariosDelete = (req, res) =>{
    res.json(
        {
            msg:'delete api - controlador'
        }
    )
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}