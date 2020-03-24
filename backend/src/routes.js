const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


//const crypto = require('crypto');
//const connection = require('./database/connection');

const routes = express.Router();

/**Listar ONgs
routes.get('/ongs', async (request, response) => {
    const ongs = await connection('ongs').select('*');
    return response.json(ongs);

});
*/


/**Cadastrar ONGs
routes.post('/ongs', async (request, response) => {
    const {name, email, whatsapp, city, uf } = request.body;
    const id = crypto.randomBytes(4).toString('HEX');


    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    });
    //console.log(data);

    return response.json( { id });
});
*/

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

routes.post('/sessions', SessionController.create);

module.exports = routes;