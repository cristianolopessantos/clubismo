const express = require('express');
const UserController = require('./controllers/UserController');

const routes = express.Router();

routes.post('/cadastrar', UserController.store);

module.exports = routes;
