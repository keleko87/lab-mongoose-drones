const express = require('express');

// require the Drone model here
const Drone = require('../models/drone.js');
const router = express.Router();


router.get('/drones', (req, res, next) => {
  // Iteration #2
  Drone.find({}, (err, drones) => {
    if (err) {
      return next(err);
    } else {
      res.render('drones', {
        drones: drones
      });
    }
  });
});

router.get('/drones/new', (req, res, next) => {
  // Iteration #3
      res.render('drones/new');
});

router.post('/drones', (req, res, next) => {
  // Iteration #3
  console.log(req.body);
  let droneObj = new Drone({
    droneName: req.body.droneName,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  });
  droneObj.save((err, obj) => {
    if (err) {
      return next(err);
    } else {
      res.redirect('/drones');
    }
  });
});

module.exports = router;
