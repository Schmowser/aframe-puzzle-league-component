 /* global assert, setup, suite, test */
 require('aframe');
 require('../src/grid.js');
 const entityFactory = require('./helpers').entityFactory;
 const chai = require('chai');
 chai.use(require('chai-dom'));
 const expect = chai.expect;
 const should = chai.should();

 const colors = ['#EF2D5E', '#4CC3D9', '#FFC65D', '#34B51D'];

 suite('grid component, blocks', function () {

   suite('R|R|R (horizontal)', function () {
     let component;
     let el;

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
       el.emit('checkForMatch', {id: 'test'});
       expect(el.hasChildNodes()).to.be.false;
     });

   });

   suite('R|R|R|R', function () {
     let component;
     let el;

     setup(function (done) {
       el = entityFactory();

       let al1 = entityFactory();
       let al2 = entityFactory();
       let al3 = entityFactory();
       let al4 = entityFactory();
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
       al4.setAttribute('id', '03');
       al4.setAttribute('material', {'color': colors[0]});

       el.appendChild(al1);
       el.appendChild(al2);
       el.appendChild(al3);
       el.appendChild(al4);
     });

     test('grid exists', function () {
       let gridEl = document.querySelectorAll("[grid]");
       should.exist(gridEl, 'gridEl is neither `null` nor `undefined`');
     });

     test('on init: match-4 removes entities', function () {
       el.emit('checkForMatch', {id: 'test'});
       expect(el.hasChildNodes()).to.be.false;
     });

   });

   suite('R\n    R\n    R|R|R', function () {
     let component;
     let el;

     setup(function (done) {
       el = entityFactory();

       let al1 = entityFactory();
       let al2 = entityFactory();
       let al3 = entityFactory();
       let al4 = entityFactory();
       let al5 = entityFactory();
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
       al4.setAttribute('id', '10');
       al4.setAttribute('material', {'color': colors[0]});
       al5.setAttribute('id', '20');
       al5.setAttribute('material', {'color': colors[0]});

       el.appendChild(al1);
       el.appendChild(al2);
       el.appendChild(al3);
       el.appendChild(al4);
       el.appendChild(al5);
     });

     test('grid exists', function () {
       let gridEl = document.querySelectorAll("[grid]");
       should.exist(gridEl, 'gridEl is neither `null` nor `undefined`');
     });

     test('on init: match-L removes entities', function () {
       el.emit('checkForMatch', {id: 'test'});
       expect(el.hasChildNodes()).to.be.false;
     });

   });

   suite('R|R|R\n    0|0|0', function () {
     let component;
     let el;

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
       al1.setAttribute('id', '10');
       al1.setAttribute('material', {'color': colors[0]});
       al2.setAttribute('id', '11');
       al2.setAttribute('material', {'color': colors[0]});
       al3.setAttribute('id', '12');
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
       el.emit('checkForMatch', {id: 'test'});
       expect(el.hasChildNodes()).to.be.false;
     });

   });

   suite('0|R|0\n    R|R|R\n    0|R|0', function () {
     let component;
     let el;

     setup(function (done) {
       el = entityFactory();

       let al1 = entityFactory();
       let al2 = entityFactory();
       let al3 = entityFactory();
       let al4 = entityFactory();
       let al5 = entityFactory();
       el.addEventListener('componentinitialized', function (evt) {
         if (evt.detail.name !== 'grid') { return; }
         component = el.components['grid'];
         done();
       });
       el.setAttribute('grid', {});
       al1.setAttribute('id', '10');
       al1.setAttribute('material', {'color': colors[0]});
       al2.setAttribute('id', '11');
       al2.setAttribute('material', {'color': colors[0]});
       al3.setAttribute('id', '12');
       al3.setAttribute('material', {'color': colors[0]});
       al4.setAttribute('id', '01');
       al4.setAttribute('material', {'color': colors[0]});
       al5.setAttribute('id', '21');
       al5.setAttribute('material', {'color': colors[0]});

       el.appendChild(al1);
       el.appendChild(al2);
       el.appendChild(al3);
       el.appendChild(al4);
       el.appendChild(al5);
     });

     test('grid exists', function () {
       let gridEl = document.querySelectorAll("[grid]");
       should.exist(gridEl, 'gridEl is neither `null` nor `undefined`');
     });

     test('on init: match-+ removes entities', function () {
       el.emit('checkForMatch', {id: 'test'});
       expect(el.hasChildNodes()).to.be.false;
     });

   });

   suite('R\n    R\n    R', function () {
     let component;
     let el;

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
       al2.setAttribute('id', '10');
       al2.setAttribute('material', {'color': colors[0]});
       al3.setAttribute('id', '20');
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
       el.emit('checkForMatch', {id: 'test'});
       expect(el.hasChildNodes()).to.be.false;
     });

   });

   suite('R\n    R\n    R\n    R', function () {
     let component;
     let el;

     setup(function (done) {
       el = entityFactory();

       let al1 = entityFactory();
       let al2 = entityFactory();
       let al3 = entityFactory();
       let al4 = entityFactory();
       el.addEventListener('componentinitialized', function (evt) {
         if (evt.detail.name !== 'grid') { return; }
         component = el.components['grid'];
         done();
       });
       el.setAttribute('grid', {});
       al1.setAttribute('id', '00');
       al1.setAttribute('material', {'color': colors[0]});
       al2.setAttribute('id', '10');
       al2.setAttribute('material', {'color': colors[0]});
       al3.setAttribute('id', '20');
       al3.setAttribute('material', {'color': colors[0]});
       al4.setAttribute('id', '30');
       al4.setAttribute('material', {'color': colors[0]});

       el.appendChild(al1);
       el.appendChild(al2);
       el.appendChild(al3);
       el.appendChild(al4);
     });

     test('grid exists', function () {
       let gridEl = document.querySelectorAll("[grid]");
       should.exist(gridEl, 'gridEl is neither `null` nor `undefined`');
     });

     test('on init: match-4 removes entities', function () {
       el.emit('checkForMatch', {id: 'test'});
       expect(el.hasChildNodes()).to.be.false;
     });

   });

   suite('R\n    R\n    R\n    R\n    R', function () {
     let component;
     let el;

     setup(function (done) {
       el = entityFactory();

       let al1 = entityFactory();
       let al2 = entityFactory();
       let al3 = entityFactory();
       let al4 = entityFactory();
       let al5 = entityFactory();
       el.addEventListener('componentinitialized', function (evt) {
         if (evt.detail.name !== 'grid') { return; }
         component = el.components['grid'];
         done();
       });
       el.setAttribute('grid', {});
       al1.setAttribute('id', '00');
       al1.setAttribute('material', {'color': colors[0]});
       al2.setAttribute('id', '10');
       al2.setAttribute('material', {'color': colors[0]});
       al3.setAttribute('id', '20');
       al3.setAttribute('material', {'color': colors[0]});
       al4.setAttribute('id', '30');
       al4.setAttribute('material', {'color': colors[0]});
       al5.setAttribute('id', '40');
       al5.setAttribute('material', {'color': colors[0]});

       el.appendChild(al1);
       el.appendChild(al2);
       el.appendChild(al3);
       el.appendChild(al4);
       el.appendChild(al5);
     });

     test('grid exists', function () {
       let gridEl = document.querySelectorAll("[grid]");
       should.exist(gridEl, 'gridEl is neither `null` nor `undefined`');
     });

     test('on init: match-5 removes entities', function () {
       el.emit('checkForMatch', {id: 'test'});
       expect(el.hasChildNodes()).to.be.false;
     });

   });

   suite('R|B|R', function () {
     let component;
     let el;

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
       el.emit('checkForMatch', {id: 'test'});
       expect(el.hasChildNodes()).to.be.true;
       expect(el.childNodes).to.have.lengthOf(3);
     });

   });

   suite('R|0|R', function () {
     let component;
     let el;

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
       el.emit('checkForMatch', {id: 'test'});
       expect(el.hasChildNodes()).to.be.true;
       expect(el.childNodes).to.have.lengthOf(2);
     });

   });

   suite('R|\n    R|R|B|R|R', function () {
     let component;
     let el;

     setup(function (done) {
       el = entityFactory();

       let al1 = entityFactory();
       let al2 = entityFactory();
       let al3 = entityFactory();
       let al4 = entityFactory();
       let al5 = entityFactory();
       let al6 = entityFactory();
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
       al3.setAttribute('material', {'color': colors[1]});
       al4.setAttribute('id', '03');
       al4.setAttribute('material', {'color': colors[0]});
       al5.setAttribute('id', '04');
       al5.setAttribute('material', {'color': colors[0]});
       al6.setAttribute('id', '10');
       al6.setAttribute('material', {'color': colors[0]});

       el.appendChild(al1);
       el.appendChild(al2);
       el.appendChild(al3);
       el.appendChild(al4);
       el.appendChild(al5);
       el.appendChild(al6);
     });

     test('grid exists', function () {
       let gridEl = document.querySelectorAll("[grid]");
       should.exist(gridEl, 'gridEl is neither `null` nor `undefined`');
     });

     test('on init: match-3 does not remove entities', function () {
       el.emit('checkForMatch', {id: 'test'});
       expect(el.hasChildNodes()).to.be.true;
       expect(el.childNodes).to.have.lengthOf(6);
     });

   });
 });
