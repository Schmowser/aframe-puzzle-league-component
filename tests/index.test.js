/* global assert, setup, suite, test */
require('aframe');
require('../index.js');
var entityFactory = require('./helpers').entityFactory;

suite('puzzle-league component', function () {
  var component;
  var el;

  setup(function (done) {
    el = entityFactory();
    el.addEventListener('componentinitialized', function (evt) {
      if (evt.detail.name !== 'puzzle-league') { return; }
      component = el.components['puzzle-league'];
      done();
    });
    el.setAttribute('puzzle-league', {});
  });

  suite('1', function () {
    test('equals 1', function () {
      assert.equal(1, 1);
    });
  });
});
