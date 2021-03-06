AFRAME.registerComponent('controller-event-handler', {

    init: function () {

          const el = this.el;

          el.addEventListener('mouseenter', function () {
              // el.setAttribute('material', 'wireframe', true); // TODO: Replace by custom shader
          });
          el.addEventListener('mouseleave', function () {
              // el.setAttribute('material', 'wireframe', false);
          });
          el.addEventListener('mousedown', function () {
                if (isAnimationDisabled(el)) {
                    el.setAttribute('swap-candidate');
                }
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
                el.setAttribute('id', positionToIdMapper(elPosition));

                el.emit('swappingcomplete', {id: positionToIdMapper(elPosition)});
                disableSwappingDuringAnimation(el);
          });
    }

});

function positionToIdMapper(position) {
    const interSpace = 0.5;
    const idx = '' + (position.x/interSpace);
    const idy = '' + (position.y/interSpace);
    return idy.concat(idx);
}

function disableSwappingDuringAnimation(el) {
    el.removeAttribute('animation');
}

function isAnimationDisabled(el) {
    const animation = el.getAttribute('animation');
    return !animation;
}