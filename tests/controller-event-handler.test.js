/* global assert, setup, suite, test */
require('aframe');
require('../src/controller-event-handler.js');
var entityFactory = require('./helpers').entityFactory;
var should = require('chai').should();

suite('setup component', function () {
  var component;
  var el;

  setup(function (done) {
    el = entityFactory();
    el.addEventListener('componentinitialized', function (evt) {
      if (evt.detail.name !== 'controller-event-handler') { return; }
      component = el.components['controller-event-handler'];
      done();
    });
    el.setAttribute('controller-event-handler', {});
  });

  suite('controller-event-handler', function () {

    test('on mouseenter: el has specific color', function () {
      el.emit('mouseenter');
      assert.equal(el.getAttribute('material').color, '#24CAFF');
    })

    test('on mouseleave: el has specific color', function () {
      el.emit('mouseleave');
      assert.equal(el.getAttribute('material').color, '#EF2D5E');
    })

    test('on mousedown: el has id toBeSwapped', function () {
      el.emit('mousedown');
      assert.equal(el.id, 'toBeSwapped');
    })

    test('on mouseup: el has id toBeSwapped', function () {
       el.emit('mouseup');
       // Write this test!
    })

  });
});
