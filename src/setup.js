AFRAME.registerComponent('setup', {

    init: function () {
        const sceneEl = document.querySelector('a-scene');
        const colors = ['#EF2D5E', '#4CC3D9', '#FFC65D', '#34B51D'];

        for (j = 0; j < 5; j++) {
            for (i = 0; i < 9; i++) {
                let boxEl = document.createElement('a-box');
                boxEl.setAttribute('id', 'box' + i + j);
                boxEl.setAttribute('material', {color: colors[0]});
                boxEl.object3D.position.set((i - 4) * 1.2, (j + 1) * 1.2, -5);

                sceneEl.appendChild(boxEl);
            }
        }

        let thatBoxEl = document.querySelector('#box42');
        let thatPosition = thatBoxEl.object3D.position;

        let thisBoxEl = document.querySelector('#box32');
        let thisPosition = thisBoxEl.object3D.position;

        thatBoxEl.setAttribute('material', {color: '#4CC3D9'});
        thatBoxEl.setAttribute('animation', `property: position; to: ${thisPosition.x} ${thisPosition.y} ${thisPosition.z}; dir: alternate; loop: true`);
        thisBoxEl.setAttribute('material', {color: '#FFC65D'});
        thisBoxEl.setAttribute('animation', `property: position; to: ${thatPosition.x} ${thatPosition.y} ${thatPosition.z}; dir: alternate; loop: true`);

        let firstBoxEl = document.querySelector('#box44');
        firstBoxEl.setAttribute('material', {color: colors[3]});
        firstBoxEl.setAttribute('dynamic-body', {
            shape: 'box',
            mass: 1,
            linearDamping: 0.005
        });
        firstBoxEl.setAttribute('event-set__enter', {_event: 'mouseenter', color: '#8FF7FF'});
        firstBoxEl.setAttribute('event-set__leave', {_event: 'mouseleave', color: '#34B51D'});
    }

});