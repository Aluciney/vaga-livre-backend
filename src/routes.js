const routes = require('express').Router();
const authMiddleware = require('./middlewares/auth');

const AuthenticationController = require('./controllers/AuthenticationController');
const UserController = require('./controllers/UserController');
const ParkingController = require('./controllers/ParkingController');
const VehicleController = require('./controllers/VehicleController');

// USER
routes.post('/users', UserController.store);

routes.use('/users', [ authMiddleware ]); // MIDDLEWARE
routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.destroy);

// PARKING
routes.post('/parkings', ParkingController.store);

routes.use('/parkings', [ authMiddleware ]); // MIDDLEWARE
routes.get('/parkings', ParkingController.index);
routes.get('/parkings/:id', ParkingController.show);
routes.put('/parkings/:id', ParkingController.update);
routes.delete('/parkings/:id', ParkingController.destroy);

// VEHICLE
routes.post('/vehicles', VehicleController.store);

routes.use('/vehicles', [ authMiddleware ]); // MIDDLEWARE
routes.get('/vehicles', VehicleController.index);
routes.get('/vehicles/:id', VehicleController.show);
routes.put('/vehicles/:id', VehicleController.update);
routes.delete('/vehicles/:id', VehicleController.destroy);

// HISTORIC
routes.post('/historics', HistoricController.store);

routes.use('/historics', [ authMiddleware ]); // MIDDLEWARE
routes.get('/historics', HistoricController.index);
routes.get('/historics/:id', HistoricController.show);
routes.put('/historics/:id', HistoricController.update);
routes.delete('/historics/:id', HistoricController.destroy);

// authentication
routes.post('/authentication/login', AuthenticationController.login);
routes.post('/authentication/login/google', AuthenticationController.login_google);

module.exports = routes;