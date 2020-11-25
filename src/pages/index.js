window.addEventListener('DOMContentLoaded', () => {

  'use strict';

  require('./index.css');
  require('../vendor/slick.css');
  require('animate.css');

  let slider = require('../scripts/slider.js'),
    accordion = require('../scripts/accordion.js');

  slider();
  accordion();

});


