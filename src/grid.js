AFRAME.registerComponent('grid', {

    init: function () {
        // TODO: Add code that initializes the child cubes inside the grid!

        const el = this.el;
        el.addEventListener('checkForMatch', function () {

            // Check for all matches in each row
            const rowNodesToBeRemoved = getMatchNodes(true);

            // Check for all matches in each column
            const colNodesToBeRemoved = getMatchNodes(false);

            // Remove all nodes
            let nodesToBeRemoved = new Set([...rowNodesToBeRemoved, ...colNodesToBeRemoved]);
            nodesToBeRemoved.forEach(node => node.parentNode.removeChild(node));
            // nodesToBeRemoved.forEach(node => node.setAttribute('visible', false));

            applyGravityAfterBlockRemoval(nodesToBeRemoved);

        });

        el.emit('checkForMatch');
    },

});

function getMatchNodes(isRow) {
    let matchNodes = new Set();
    let tempNodes = new Set();
    let currentColor = null;
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) { // TODO: Generalize 5
            let id = isRow ? buildId(i, j) : buildId(j, i);
            const node = document.getElementById(id);
            if (node != null) {
                const nodeColor = node.getAttribute('material').color;

                if (node.getAttribute('visible') && nodeColor === currentColor) {
                    tempNodes.add(node);
                } else {
                    tempNodes = new Set([node]);
                    currentColor = nodeColor;
                }

                if (tempNodes.size > 2) {
                    tempNodes.forEach(node => matchNodes.add(node));
                }
            } else {
                tempNodes.clear();
                currentColor = null;
            }
        }
        tempNodes.clear();
    }
    return matchNodes;
}

function buildId(i, j) {
    const iString = '' + i;
    const jString = '' + j;
    return iString + jString;
}

function applyGravityAfterBlockRemoval(nodesRemoved) {
    let cubeNodes = document.querySelectorAll("[mixin='cube']");
    cubeNodes.forEach(block => {
        const row = block.id[0];
        const col = block.id[1];
        let drop = [...nodesRemoved]
            .filter(node => node.id[1] === col)
            .filter(node => node.id[0] < row)
            .length;
        if (drop) {
            const targetPosition = idToPositionMapper(buildId(row - drop, col));
            const fallDuration = 400 * Math.sqrt(drop);
            block.setAttribute('animation', `
                        property: position;
                        to: ${targetPosition.x} ${targetPosition.y} ${targetPosition.z};
                        easing: easeInSine;
                        dur: ${fallDuration};
                    `);
        }
    });
}

function idToPositionMapper(id) {
    const interSpace = 0.5;
    let position = {};
    position.x = id[1] * interSpace;
    position.y = id[0] * interSpace;
    position.z = 0;
    return position
}