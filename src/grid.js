AFRAME.registerComponent('grid', {

    init: function () {
        console.log('Init!');
        // Add code that initializes the child cubes inside the grid!
    },

    update: function () {
//        let nodeList = document.querySelectorAll('a-entity[mixin="cube"]');
//        let nodeList = document.querySelectorAll("[id^='0']");
//        const firstNode = nodeList[0];
        const firstNode = document.getElementById('00');
        var nodesToBeRemoved = [firstNode];
        var currentColor = firstNode.getAttribute('material').color;
        for (j = 1; j < 5; j++) {
//                const node = nodeList[j]; // Replace by getting by id
                const node = document.getElementById('0' + j);
                if (node != null) {
                    const nodeColor = node.getAttribute('material').color;

                    if (nodeColor === currentColor) {
                        nodesToBeRemoved.push(node);
                    } else {
                        nodesToBeRemoved = [node];
                        currentColor = nodeColor;
                    }

    //                console.log(nodesToBeRemoved);
                    if (nodesToBeRemoved.length > 1) {
                        nodesToBeRemoved.forEach(node => console.log(node.parentNode.removeChild(node)));
                    }
                }
        }

    }

});