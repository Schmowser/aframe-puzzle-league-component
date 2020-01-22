AFRAME.registerComponent('controller-event-handler', {

    init: function () {

          const el = this.el;

          el.addEventListener('mouseenter', function () {
//                el.setAttribute('material', 'color', '#24CAFF');
          });
          el.addEventListener('mouseleave', function () {
//                el.setAttribute('material', 'color', '#EF2D5E');
          });
          el.addEventListener('mousedown', function () {
                el.setAttribute('swap-candidate');
          });
          el.addEventListener('mouseup', function () {
                const swapCandidates = document.querySelectorAll("[swap-candidate]");
                if (swapCandidates && swapCandidates[0]) {
                    const al = swapCandidates[0];
                    al.setAttribute('swappable', { 'target': el } );
                    al.removeAttribute('swap-candidate');
                    al.removeAttribute('swappable');
                }
          });
          el.addEventListener('animationcomplete', function(event) {
                const elPosition = el.object3D.position;
                const idx = '' + (elPosition.x/0.5);
                const idy = '' + (elPosition.y/0.5);
                el.setAttribute('id', idy.concat(idx))

                el.emit('checkForMatch');
          });
    }

});