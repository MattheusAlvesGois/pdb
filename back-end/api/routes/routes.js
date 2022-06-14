const express = require("express");
const router = express.Router();
const { Usuarios } = require("../../database/model");

router.get('/users/all', async (req, res) => {
    const users = await Usuarios.findAll();

    if (!users) return res.send({error: "Usuários não existem"}).status(400);

    return res.send({Users: users}).status(200);
});

router.post('/users/new', async (req, res) => {
    // if (!req.body) return res.send({error: "Sem informações"}).status(400);

    console.log(req.body);

    const user = await Usuarios.create(req.body);

    if (!user) return res.send({error: "User not created"}).status(500);

    return res.send({User: user});
});

router.put('/users/update', (req, res) => {
    res.send('hello');
});

router.delete('/users/del', async (req, res) => {
    if (!req.body.idUser) return res.send({error: "Insert the user id"}).status(201);

    const destroy = Usuarios.destroy({
        where: {
            idUser: req.body.idUser,
        }
    });

    if (!destroy) return res.send({error: "Erro na criação do Usuário"}).status(400);

    return res.send({Succes: "Destruído com sucesso"}).status(200);
});

module.exports = router;