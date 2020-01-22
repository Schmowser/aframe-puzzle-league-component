///* global assert, setup, suite, test */
//require('aframe');
//require('../src/setup.js');
//var entityFactory = require('./helpers').entityFactory;
//var should = require('chai').should();
//
//suite('setup component', function () {
//  var component;
//  var el;
//
//  setup(function (done) {
//    el = entityFactory();
//    el.addEventListener('componentinitialized', function (evt) {
//      if (evt.detail.name !== 'setup') { return; }
//      component = el.components['setup'];
//      done();
//    });
//    el.setAttribute('setup', {});
//  });
//
//  suite('setup', function () {
//    test('creates box42', function () {
//      let box42 = document.querySelector('#box42');
//      should.exist(box42, 'box42 is neither `null` nor `undefined`');
//    });
//
//    test('box42 has specific color', function () {
//      var box42 = document.querySelector('#box42');
//      assert.equal(box42.getAttribute('material').color, '#4CC3D9');
//      // expect(document.querySelector('#box42')).to.have.property('material', {color: '#4CC3D9'})
//    })
//  });
//});
