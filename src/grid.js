AFRAME.registerComponent('grid', {

    init: function () {
        // Add code that initializes the child cubes inside the grid!

        const el = this.el;
        el.addEventListener('checkForMatch', function () {
            let nodesToBeRemoved = [];
            let currentColor = null;
            for (let j = 0; j < 5; j++) {
                    const node = document.getElementById('0' + j);
                    if (node != null) {
                        const nodeColor = node.getAttribute('material').color;

                        if (nodeColor === currentColor) {
                            nodesToBeRemoved.push(node);
                        } else {
                            nodesToBeRemoved = [node];
                            currentColor = nodeColor;
                        }

                        if (nodesToBeRemoved.length > 2) {
                            nodesToBeRemoved.forEach(node => node.parentNode.removeChild(node));
                        }
                    } else {
                        nodesToBeRemoved = [];
                        currentColor = null;
                    }
            }
        });

        el.emit('checkForMatch');
    },

});