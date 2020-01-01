AFRAME.registerComponent('setup', {

    init: function () {
        const sceneEl = document.querySelector('a-scene');

        for (j = 0; j < 5; j++) {
            for (i = 0; i < 9; i++) {
                let boxEl = document.createElement('a-box');
                boxEl.setAttribute('id', 'box' + i + j);
                boxEl.setAttribute('material', {color: '#EF2D5E'});
                boxEl.setAttribute('position', {x: (i - 4) * 1.2, y: (j + 1) * 1.2, z: -5});
                sceneEl.appendChild(boxEl);
            }
        }

        let thatBox = document.querySelector('#box42');
        const xThatBox = thatBox.getAttribute('position').x;
        const yThatBox = thatBox.getAttribute('position').y;
        const zThatBox = thatBox.getAttribute('position').z;
        thatBox.setAttribute('material', {color: '#4CC3D9'});
        thatBox.setAttribute('animation', `property: position; to: -1.2 3.6 -5; dir: alternate; loop: true`);

        let thisBox = document.querySelector('#box32');
        thisBox.setAttribute('material', {color: '#FFC65D'});
        thisBox.setAttribute('animation', `property: position; to: ${xThatBox} 3.6 -5; dir: alternate; loop: true`);
        console.log(thisBox.getAttribute('position').x);
    }

});