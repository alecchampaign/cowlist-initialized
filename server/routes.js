const controller = require('./controllers/index.js');
const router = require('express').Router();

// TODO: write callbacks 
// TODO: handle other types of request 
router.get('/api/cows', controller.retrieve);
router.post('/api/cows', controller.save);

module.exports = router;