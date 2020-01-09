AFRAME.registerComponent('swappable', {
    schema: {
        target: {type: 'selector'}
    },

    init: function () {
        var el = this.el;
        const elPosition = el.object3D.position;
        const targetPosition = this.data.target.object3D.position;

        el.setAttribute('animation', `
            property: position;
            to: ${targetPosition.x} ${targetPosition.y} ${targetPosition.z};
            easing: easeInSine;
            dur: 300;
        `);
        this.data.target.setAttribute('animation', `
            property: position;
            to: ${elPosition.x} ${elPosition.y} ${elPosition.z};
            easing: easeInSine;
            dur: 300;
        `);
    }

});