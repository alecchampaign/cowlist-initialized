const model = require('../models/index.js');

module.exports = {
  retrieve: (req, res) => {
    model.get((err, data) => {
      if (err) {
        console.log('ERROR: ', err);
        res.sendStats(400);
      } else {
        res.status(200).json(data);
      }
    });
  },
  save: (req, res) => {
    model.post(req.body, (err, data) => {
      if (err) {
        console.log('ERROR: ', err);
        res.sendStatus(400);
      } else {
        res.status(201).json(req.body);
      }
    });
  },
  // TODO: add methods for PUT/DELETE
}