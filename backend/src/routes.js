const { Router } = require("express");
const devController = require('./controllers/devControllers');
const searchController = require('./controllers/searchController');
const routes = Router();

routes.post('/devs', devController.store);
routes.get('/devs', devController.index);


routes.get('/search', searchController.index);

module.exports = routes;
