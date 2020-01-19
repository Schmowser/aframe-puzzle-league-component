AFRAME.registerComponent('controller-event-handler', {

    init: function () {

          var el = this.el;

          el.addEventListener('mouseenter', function () {
//                el.setAttribute('material', 'color', '#24CAFF');
          });
          el.addEventListener('mouseleave', function () {
//                el.setAttribute('material', 'color', '#EF2D5E');
          });
          el.addEventListener('mousedown', function () {
                el.setAttribute('id', 'toBeSwapped')
          });
          el.addEventListener('mouseup', function () {
                const al = document.querySelector('#toBeSwapped');
                if (al) {
                    al.setAttribute('swappable', { 'target': el } );
                    al.removeAttribute('id');
                    al.removeAttribute('swappable');
                }
          });
          el.addEventListener('animationcomplete', function(event) {
                const elPosition = el.object3D.position;
                const idx = '' + (elPosition.x/0.5);
                const idy = '' + (elPosition.y/0.5);
                el.setAttribute('id', idy.concat(idx))
          });
    }

});