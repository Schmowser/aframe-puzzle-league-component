AFRAME.registerComponent('controller-event-handler', {

    init: function () {

          var el = this.el;

          el.addEventListener('mouseenter', function () {
                el.setAttribute('material', 'color', '#24CAFF');
          });
          el.addEventListener('mouseleave', function () {
                el.setAttribute('material', 'color', '#EF2D5E');
          });
          el.addEventListener('mousedown', function () {
                el.setAttribute('id', 'toBeSwapped')
          });
          el.addEventListener('mouseup', function () {
                const al = document.querySelector('#toBeSwapped');
                el.setAttribute('swappable', { 'target': al } );
                al.removeAttribute('id');
                el.removeAttribute('swappable');
          });
          el.addEventListener('animationcomplete', function(event) {
                console.log('Animation ended!')
                console.log(event)
          });
    }

});