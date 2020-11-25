window.addEventListener('DOMContentLoaded', () => {

  'use strict';

  require('./index.css');
  require('../vendor/slick.css');
  require('animate.css');

  const slider = require('../scripts/slider.js');
  const accordion = require('../scripts/accordion.js');

  slider();
  accordion();

});


