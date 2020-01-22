/* global assert, setup, suite, test */
require('aframe');
require('../src/controller-event-handler.js');
var entityFactory = require('./helpers').entityFactory;
var chai = require('chai');
chai.use(require('chai-dom'));
var expect = chai.expect

suite('setup component', function () {
  var component;
  var el;
  var al;

  setup(function (done) {
    el = entityFactory();
    al = entityFactory();
    el.addEventListener('componentinitialized', function (evt) {
      if (evt.detail.name !== 'controller-event-handler') { return; }
      component = el.components['controller-event-handler'];
      done();
    });
    el.setAttribute('controller-event-handler', {});
    al.setAttribute('controller-event-handler', {});
  });

  suite('controller-event-handler', function () {

//    test('on mouseenter: el has specific color', function () {
//      el.emit('mouseenter');
//      assert.equal(el.getAttribute('material').color, '#24CAFF');
//    })
//
//    test('on mouseleave: el has specific color', function () {
//      el.emit('mouseleave');
//      assert.equal(el.getAttribute('material').color, '#EF2D5E');
//    })

    test('on mousedown: el has property swap-candidate', function () {
      el.emit('mousedown');
      expect(el).to.have.attr('swap-candidate');
    })

    test('on mousedown and mouseup: el has no property swap-candidate', function () {
      el.emit('mousedown');
      expect(el).to.have.attr('swap-candidate');
      el.emit('mouseup');
      expect(el).to.not.have.attr('swap-candidate');
    })

    test('on animationcomplete: sets position correctly', function () {
      el.setAttribute('position', "0.5 1.5 0");
      el.emit('animationcomplete');
      expect(el.id).to.equal('31');
    })

    test('on animationcomplete: emits checkForMatch event', function () {
      var testResult = false;
      el.addEventListener('checkForMatch', function (event) {
        testResult = true;
      });
      el.emit('animationcomplete');
      assert(testResult);
    })

  });
});
