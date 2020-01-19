AFRAME.registerComponent('mock-mouse', {

    init: function () {

          var el = this.el;

          el.addEventListener('mouseenter', function () {
                var position = el.object3D.position;
                if (position.x === 1) {
                    el.emit('mousedown');
                } else {
                    el.emit('mouseup');
                }
          });
//          el.addEventListener('mouseleave', function () {
//                console.log('Mouse left!')
//          });
//          el.addEventListener('mousedown', function () {
//                el.setAttribute('id', 'toBeSwapped')
//          });
//          el.addEventListener('mouseup', function () {
//                const al = document.querySelector('#toBeSwapped');
//                el.setAttribute('swappable', { 'target': al } );
//                al.removeAttribute('id');
//                el.removeAttribute('swappable');
//          });
//          el.addEventListener('animationcomplete', function(event) {
//                console.log('Animation ended!')
//                console.log(event)
//          });
    }

});