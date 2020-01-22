/* global assert, setup, suite, test */
require('aframe');
require('../src/grid.js');
var entityFactory = require('./helpers').entityFactory;
var chai = require('chai');
chai.use(require('chai-dom'));
var expect = chai.expect
var should = chai.should();

suite('grid component', function () {
  var component;
  var el;
  var al1;
  var al2;
  var al3;

  const colors = ['#EF2D5E', '#4CC3D9', '#FFC65D', '#34B51D'];

  setup(function (done) {
    el = entityFactory();
    al1 = entityFactory();
    al2 = entityFactory();
    al3 = entityFactory();
    el.addEventListener('componentinitialized', function (evt) {
      if (evt.detail.name !== 'grid') { return; }
      component = el.components['grid'];
      done();
    });
    el.setAttribute('grid', {});
    al1.setAttribute('id', '00');
    al1.setAttribute('material', {'color': 'red'});
    al2.setAttribute('id', '01');
    al2.setAttribute('material', {'color': 'red'});
    al3.setAttribute('id', '02');
    al3.setAttribute('material', {'color': 'red'});
    el.appendChild(al1);
    el.appendChild(al2);
    el.appendChild(al3);
    console.log(el)
  });

  suite('grid', function () {
    test('grid exists', function () {
      let gridEl = document.querySelectorAll("[grid]");
      should.exist(gridEl, 'gridEl is neither `null` nor `undefined`');
    });

    test('on checkForMatch: match-3 removes entities', function () {
      console.log(el);
    });


  });
});
