const routes = require('express').Router();
const authMiddleware = require('./middlewares/auth');

const AuthenticationController = require('./controllers/AuthenticationController');
const UserController = require('./controllers/UserController');
const ParkingController = require('./controllers/ParkingController');

// USER
routes.post('/users', UserController.store);

routes.use('/users', [ authMiddleware ]); // MIDDLEWARE
routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.destroy);

// PARKING
routes.get('/parkings', ParkingController.index);
routes.get('/parkings/:id', ParkingController.show);
routes.post('/parkings', ParkingController.store);
routes.put('/parkings/:id', ParkingController.update);
routes.delete('/parkings/:id', ParkingController.destroy);

// authentication
routes.post('/authentication/login', AuthenticationController.login);
routes.post('/authentication/login/google', AuthenticationController.login_google);

module.exports = routes;