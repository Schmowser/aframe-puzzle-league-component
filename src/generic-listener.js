AFRAME.registerComponent("generic-listener", {
      init: function () {
        const el = this.el;

        const ctlL = document.getElementById("left");
        const ctlR = document.getElementById("right");

        ctlL.addEventListener("ybuttondown", function (event) {
          console.log("Y button pressed!");
        });
        ctlR.addEventListener("abuttondown", function (event) {
          console.log("A button pressed!");
          let cubeNodes = document.querySelectorAll("[mixin='cube']");
          var promiseArray = [];

          cubeNodes.forEach(block => {
              const row = block.id[0];
              const col = block.id[1];
              const targetId = buildId(parseInt(row) + 1, col);
              const targetPosition = idToPositionMapper(targetId);
              let promise = new Promise(
                  function(resolve, reject) {
                      block.setAttribute('animation', `
                          property: position;
                          to: ${targetPosition.x} ${targetPosition.y} ${targetPosition.z};
                          easing: easeInSine;
                          dur: 300;
                      `);
                      block.addEventListener('swappingcomplete', getListener(targetId, block, resolve));
                  }
              );
              promiseArray.push(promise);

          });

          Promise.all(promiseArray)
              .then(() => {
                initBaseRow(5);
                el.emit('checkForMatch', {id: 'newline'}); // TODO: Place the component such that event bubbling sends this to grid
              });
        });
        ctlR.addEventListener("bbuttondown", function (event) {
          console.log("B button pressed!");
        });
      }
});

function initBaseRow(width) {
    const colors = ['#EF2D5E', '#4CC3D9', '#FFC65D', '#34B51D'];
    var grid = document.querySelector("#grid");

    for (let j = 0; j < width; j++) {
        let cubeEl = document.createElement('a-entity');
        cubeEl.setAttribute('mixin', 'cube');
        let id = buildId(0, j);
        cubeEl.setAttribute('id', id);
        cubeEl.setAttribute('material', {color: colors[getRandomInt(colors.length)]});
        let position = idToPositionMapper(id);
        cubeEl.object3D.position.set(position.x, position.y, position.z);
        grid.appendChild(cubeEl);
    }
}