/* global assert, setup, suite, test */
require('aframe');
require('../src/grid.js');
var entityFactory = require('./helpers').entityFactory;
var chai = require('chai');
chai.use(require('chai-dom'));
var expect = chai.expect
var should = chai.should();

const colors = ['#EF2D5E', '#4CC3D9', '#FFC65D', '#34B51D'];

suite('grid component', function () {

  suite('blocks: red-red-red', function () {
    var component;
    var el;

    setup(function (done) {
      el = entityFactory();
      let al1 = entityFactory();
      let al2 = entityFactory();
      let al3 = entityFactory();
      el.addEventListener('componentinitialized', function (evt) {
        if (evt.detail.name !== 'grid') { return; }
        component = el.components['grid'];
        done();
      });
      el.setAttribute('grid', {});
      al1.setAttribute('id', '00');
      al1.setAttribute('material', {'color': colors[0]});
      al2.setAttribute('id', '01');
      al2.setAttribute('material', {'color': colors[0]});
      al3.setAttribute('id', '02');
      al3.setAttribute('material', {'color': colors[0]});
      el.appendChild(al1);
      el.appendChild(al2);
      el.appendChild(al3);
    });

    test('grid exists', function () {
      let gridEl = document.querySelectorAll("[grid]");
      should.exist(gridEl, 'gridEl is neither `null` nor `undefined`');
    });

    test('on init: match-3 removes entities', function () {
      expect(el.hasChildNodes()).to.be.false;
    });

  });

  suite('blocks: red-blue-red', function () {
    var component;
    var el;

    setup(function (done) {
      el = entityFactory();
      let al1 = entityFactory();
      let al2 = entityFactory();
      let al3 = entityFactory();
      el.addEventListener('componentinitialized', function (evt) {
        if (evt.detail.name !== 'grid') { return; }
        component = el.components['grid'];
        done();
      });
      el.setAttribute('grid', {});
      al1.setAttribute('id', '00');
      al1.setAttribute('material', {'color': colors[0]});
      al2.setAttribute('id', '01');
      al2.setAttribute('material', {'color': colors[1]});
      al3.setAttribute('id', '02');
      al3.setAttribute('material', {'color': colors[0]});
      el.appendChild(al1);
      el.appendChild(al2);
      el.appendChild(al3);
    });

    test('grid exists', function () {
      let gridEl = document.querySelectorAll("[grid]");
      should.exist(gridEl, 'gridEl is neither `null` nor `undefined`');
    });

    test('on init: match-3 does not remove entities', function () {
      expect(el.hasChildNodes()).to.be.true;
      expect(el.childNodes).to.have.lengthOf(3);
    });

  });

  suite('blocks: red-{}-red', function () {
    var component;
    var el;

    setup(function (done) {
      el = entityFactory();
      let al1 = entityFactory();
      let al3 = entityFactory();
      el.addEventListener('componentinitialized', function (evt) {
        if (evt.detail.name !== 'grid') { return; }
        component = el.components['grid'];
        done();
      });
      el.setAttribute('grid', {});
      al1.setAttribute('id', '00');
      al1.setAttribute('material', {'color': colors[0]});
      al3.setAttribute('id', '02');
      al3.setAttribute('material', {'color': colors[0]});
      el.appendChild(al1);
      el.appendChild(al3);
    });

    test('grid exists', function () {
      let gridEl = document.querySelectorAll("[grid]");
      should.exist(gridEl, 'gridEl is neither `null` nor `undefined`');
    });

    test('on init: match-3 does not remove entities', function () {
      expect(el.hasChildNodes()).to.be.true;
      expect(el.childNodes).to.have.lengthOf(2);
    });

  });
});
