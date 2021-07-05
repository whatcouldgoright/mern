const { eventNames } = require('../models/Thought');

const router = require('express').Router();

router.get('/', (req, res, next) => {
  res.json(`env is ${JSON.stringify(process.env, null, 2)}`);
});

router.get('/:varName', (req, res, next) => {
  res.json(`${req.params.varName} is ` + process.env[req.params.varName]);
});


module.exports = router;