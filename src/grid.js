AFRAME.registerComponent('grid', {

    init: function () {
        // Add code that initializes the child cubes inside the grid!

        const el = this.el;
        el.addEventListener('checkForMatch', function () {
            let nodesToBeRemoved = new Set();
            let currentColor = null;

            // Check for all matches in each row
            let rowMatchNodes = new Set();
            for (let i = 0; i < 5; i++) {
                const iString = '' + i;
                for (let j = 0; j < 5; j++) { // TODO: Generalize 5
                    const node = document.getElementById(iString + j);
                    if (node != null) {
                        const nodeColor = node.getAttribute('material').color;

                        if (node.getAttribute('visible') && nodeColor === currentColor) {
                            rowMatchNodes.add(node);
                        } else {
                            rowMatchNodes = new Set([node]);
                            currentColor = nodeColor;
                        }

                        if (rowMatchNodes.size > 2) {
                            rowMatchNodes.forEach(node => nodesToBeRemoved.add(node));
                        }
                    } else {
                        rowMatchNodes.clear();
                        currentColor = null;
                    }
                }
                rowMatchNodes.clear();
            }

            // Check for all matches in each column
            let colMatchNodes = new Set();
            for (let j = 0; j < 5; j++) {
                for (let i = 0; i < 5; i++) { // TODO: Generalize 5
                    const iString = '' + i;
                    const node = document.getElementById(iString + j);
                    if (node != null) {
                        const nodeColor = node.getAttribute('material').color;

                        if (node.getAttribute('visible') && nodeColor === currentColor) {
                            colMatchNodes.add(node);
                        } else {
                            colMatchNodes = new Set([node]);
                            currentColor = nodeColor;
                        }

                        if (colMatchNodes.size > 2) {
                            colMatchNodes.forEach(node => nodesToBeRemoved.add(node));
                        }
                    } else {
                        colMatchNodes.clear();
                        currentColor = null;
                    }
                }
                colMatchNodes.clear();
            }

            // Remove all nodes
            nodesToBeRemoved.forEach(node => node.parentNode.removeChild(node));
            // nodesToBeRemoved.forEach(node => node.setAttribute('visible', false));
        });

        el.emit('checkForMatch');
    },

});