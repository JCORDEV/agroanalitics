const cultivo = require('../models').cultivos_model;

module.exports = {
    list(req, res) {
        return cultivo
            .findAll({})
            .then((cultivo) => {
                // res.status(200).send(cultivo)
                res.render('cultivos', { title: 'Gestión de cultivos', cultivo });
            })
            .catch((error) => { res.status(400).send(error); });
    },
};