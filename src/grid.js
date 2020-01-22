AFRAME.registerComponent('grid', {

    init: function () {
        console.log('Init!');
        // Add code that initializes the child cubes inside the grid!

        var el = this.el;
        el.addEventListener('checkForMatch', function () {
            var nodesToBeRemoved = [];
            var currentColor = null;
            for (j = 0; j < 5; j++) {
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
                            nodesToBeRemoved.forEach(node => console.log(node.parentNode.removeChild(node)));
                        }
                    } else {
                        nodesToBeRemoved = [];
                        currentColor = null;
                    }
            }
        });

        el.emit('checkForMatch');
    },

//    update: function () {
//        var nodesToBeRemoved = [];
//        var currentColor = null;
//        for (j = 0; j < 5; j++) {
//                const node = document.getElementById('0' + j);
//                if (node != null) {
//                    const nodeColor = node.getAttribute('material').color;
//
//                    if (nodeColor === currentColor) {
//                        nodesToBeRemoved.push(node);
//                    } else {
//                        nodesToBeRemoved = [node];
//                        currentColor = nodeColor;
//                    }
//
//                    if (nodesToBeRemoved.length > 2) {
//                        nodesToBeRemoved.forEach(node => console.log(node.parentNode.removeChild(node)));
//                    }
//                } else {
//                    nodesToBeRemoved = [];
//                    currentColor = null;
//                }
//        }
//
//    }

});