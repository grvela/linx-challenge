const { response, request } = require("express");
const express = require("express");

const LinkController = require('../controllers/LinkController');
const HitsController = require('../controllers/HitsController');

const routes = express.Router();

routes.post('/', LinkController.store);

routes.get('/', LinkController.index);

routes.get('/hits', HitsController.index);

routes.post('/hits', HitsController.index);

module.exports = routes