const {Router} = require('express');

const routes = Router();

routes.get('/', (req, res) => {
    res.send('Olá mundo')
});

routes.post('/users')
routes.put('/users')
routes.delete('/users')

routes.post('/login')

routes.get('/localisation')
routes.get('/localisation/:user_id')
routes.post('/localisation/:user_id')
routes.put('/localisation/:user_id')
routes.delete('/localisation/:user_id')

module.exports = routes;
