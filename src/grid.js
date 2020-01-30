AFRAME.registerComponent('grid', {
    schema: {
        width: {type: 'number', default: 6},
        height: {type: 'number', default: 12}
    },

    init: function () {
        const data = this.data;
        const el = this.el;
        const width = data.width;
        const height = data.height;

        // EVENT LISTENERS
        el.addEventListener('checkForMatch', function () {

            const rowNodesToBeRemoved = getMatchNodes(true, width, height);
            const colNodesToBeRemoved = getMatchNodes(false, width, height);

            // TODO: Query for all invisibles and add them to nodeToBeRemoved
            let nodesToBeRemoved = new Set([...rowNodesToBeRemoved, ...colNodesToBeRemoved]);
            nodesToBeRemoved.forEach(node => node.parentNode.removeChild(node));

            applyGravityAfterBlockRemoval(nodesToBeRemoved);

            // TODO: Fill grid with invisibles
        });

        // INITIALIZE
        initGrid(el, width, height);

        // EMIT EVENTS
        setTimeout(() => {
            el.emit('checkForMatch');
        }, 200); // We have to wait a bit until all elements are flushed to the DOM
    },

});

function getMatchNodes(isRow, width, height) {
    let matchNodes = new Set();
    let tempNodes = new Set();
    let currentColor = null;
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            let id = isRow ? buildId(i, j) : buildId(j, i);
            const node = document.getElementById(id);
            if (node) {
                const material = node.getAttribute('material');
                let nodeColor = null;
                if (material) {
                    nodeColor = material.color;
                } else {
                    continue // TODO: Check logic when a node does not have a color
                }

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

function initGrid(grid, width, height) {
    const colors = ['#EF2D5E', '#4CC3D9', '#FFC65D', '#34B51D'];

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            let cubeEl = document.createElement('a-entity');
            cubeEl.setAttribute('mixin', 'cube');
            let id = buildId(i, j);
            cubeEl.setAttribute('id', id);
            cubeEl.setAttribute('material', {color: colors[getRandomInt(colors.length)]});
            let position = idToPositionMapper(id);
            cubeEl.object3D.position.set(position.x, position.y, position.z);
            grid.appendChild(cubeEl);
        }
    }
}

function buildId(i, j) {
    const iString = '' + i;
    const jString = '' + j;
    return iString + jString;
}

function applyGravityAfterBlockRemoval(nodesRemoved) { // FIXME: In some cases, blocks fall to many or to few drops
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

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}