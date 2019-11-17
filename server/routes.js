const controller = require('./controllers/index.js');
const router = require('express').Router();

// TODO: write callbacks 
// TODO: handle other types of request 
router.get('/api/cows', controller.get);
router.post('/api/cows', controller.post);

module.exports = router;