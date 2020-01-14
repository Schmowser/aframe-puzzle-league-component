/* global assert, setup, suite, test */
require('aframe');
require('../src/controller-event-handler.js');
var entityFactory = require('./helpers').entityFactory;
var should = require('chai').should();

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

    test('on mousedown and mouseup: el has no id', function () {
      el.emit('mousedown');
      assert.equal(el.id, 'toBeSwapped');
      el.emit('mouseup');
      assert.equal(el.id, '');
    })

//    test('on mousedown on el and mouseup on al: el and al swapped position', function () {
//      al.object3D.position.set(2, 2, 2);
//      const elPositionBefore = el.object3D.position;
//      const alPositionBefore = al.object3D.position;
//
//      console.log(elPositionBefore)
//      console.log(alPositionBefore)
//
//      el.setAttribute('animation', `
//                  property: position;
//                  to: ${alPositionBefore.x} ${alPositionBefore.y} ${alPositionBefore.z};
//                  easing: easeInSine;
//                  dur: 300;
//              `);
//
//      el.emit('mousedown');
//      al.emit('mouseup');
//
//      console.log(el.object3D.position)
//      console.log(al)
//
//      setTimeout(function(){
//        const elPositionAfter = el.object3D.position;
//        const alPositionAfter = al.object3D.position;
//
//        assert.equal(elPositionBefore, alPositionAfter);
//      }, 1000);
//
//    })

  });
});
