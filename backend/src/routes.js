const express =  require('express');
const connection = require('./database/connection');
const ongC = require('./controllers/OngController');
const inC = require('./controllers/IncidentController');
const profC = require('./controllers/ProfileController');
const sessionC = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/session', sessionC.create);

routes.get('/ongs', ongC.index)
routes.post('/ongs', ongC.store);

routes.get('/incidents', inC.index);
routes.post('/incidents', inC.create);
routes.delete('/incidents/:id', inC.delete);

routes.get('/profile', profC.index);

module.exports = routes;