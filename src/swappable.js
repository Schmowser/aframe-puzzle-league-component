AFRAME.registerComponent('swappable', {
    schema: {
        target: {type: 'selector'}
    },

    init: function () {
        const el = this.el;
        const elId = this.el.id;
        const targetEl = this.data.target;
        const targetId = targetEl.id;
        const elPosition = el.object3D.position;
        const targetPosition = targetEl.object3D.position;

        let promise1 = new Promise(
            function(resolve, reject) {
                el.setAttribute('animation', `
                    property: position;
                    to: ${targetPosition.x} ${targetPosition.y} ${targetPosition.z};
                    easing: easeInSine;
                    dur: 300;
                `);
                el.addEventListener('swappingcomplete', extracted(targetId, el, resolve));
            }
        );

        let promise2 = new Promise(
            function(resolve, reject) {
                targetEl.setAttribute('animation', `
                    property: position;
                    to: ${elPosition.x} ${elPosition.y} ${elPosition.z};
                    easing: easeInSine;
                    dur: 300;
                `);
                targetEl.addEventListener('swappingcomplete', extracted(elId, targetEl, resolve));
            }
        );

        Promise.all([promise1, promise2])
            .then(() => el.emit('checkForMatch', {id: 'swap'}));

    }

});

function extracted(targetId, el, resolve) {
    return function (event) {
        if (event.detail.id === targetId) {
            el.removeEventListener('swappingcomplete', extracted, false);
            resolve();
        }
    };
}