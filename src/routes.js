const routes = require('express').Router();
const authMiddleware = require('./middlewares/auth');

const UserController = require('./controllers/UserController');
const AuthenticationController = require('./controllers/AuthenticationController');

// USER
routes.post('/users', UserController.store);

routes.use('/users', [ authMiddleware ]); // MIDDLEWARE
routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.destroy);

// authentication
routes.post('/authentication/login', AuthenticationController.login);
routes.post('/authentication/login/google', AuthenticationController.login_google);

module.exports = routes;