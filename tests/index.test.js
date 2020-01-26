/* global assert, setup, suite, test */
require('aframe');
require('../index.js');
var entityFactory = require('./helpers').entityFactory;

suite('puzzle-league component', function () {
  let component;
  let el;

  setup(function (done) {
    el = entityFactory();
    el.addEventListener('componentinitialized', function (evt) {
      if (evt.detail.name !== 'puzzle-league') { return; }
      component = el.components['puzzle-league'];
      done();
    });
    el.setAttribute('puzzle-league', {});
  });

});
