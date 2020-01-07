AFRAME.registerComponent('controller-event-handler', {

    init: function () {

          var el = this.el;

          el.addEventListener('mouseenter', function () {
                console.log('Mouse entered!');
                el.setAttribute('material', 'color', '#24CAFF');
          });
          el.addEventListener('mouseleave', function () {
                console.log("Mouse left!");
                el.setAttribute('material', 'color', '#EF2D5E');
          });
          el.addEventListener('mousedown', function () {
                console.log('A mouse down!');
                let thisPosition = el.object3D.position;
                el.setAttribute('animation', `property: position; to: ${thisPosition.x} ${thisPosition.y - 2} ${thisPosition.z}; dir: alternate; loop: true`);
          })
    }

});