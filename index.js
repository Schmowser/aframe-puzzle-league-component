/* global AFRAME */

if (typeof AFRAME === 'undefined') {
  throw new Error('Component attempted to register before AFRAME was available.');
}

/**
 * Puzzle League component for A-Frame.
 */
AFRAME.registerComponent('puzzle-league', {
  schema: {},

  /**
   * Set if component needs multiple instancing.
   */
  multiple: false,

  /**
   * Called once when component is attached. Generally for initial setup.
   */
  init: function () {

    const sceneEl = document.querySelector('a-scene');

    for (j = 0; j < 5; j++) {
      for (i = 0; i < 9; i++) {
        let boxEl = document.createElement('a-box');
        boxEl.setAttribute('id', 'box' + i + j);
        boxEl.setAttribute('material', {color: '#EF2D5E'});
        boxEl.setAttribute('position', {x: (i - 4) * 1.2, y: (j + 1) * 1.2, z: -5});
        sceneEl.appendChild(boxEl);
      }
    }

    let thatBox = document.querySelector('#box42');
    const xThatBox = thatBox.getAttribute('position').x;
    const yThatBox = thatBox.getAttribute('position').y;
    const zThatBox = thatBox.getAttribute('position').z;
    thatBox.setAttribute('material', {color: '#4CC3D9'});
    thatBox.setAttribute('animation', `property: position; to: -1.2 3.6 -5; dir: alternate; loop: true`);

    let thisBox = document.querySelector('#box32');
    thisBox.setAttribute('material', {color: '#FFC65D'});
    thisBox.setAttribute('animation', `property: position; to: ${xThatBox} 3.6 -5; dir: alternate; loop: true`);
    console.log(thisBox.getAttribute('position').x);

  },

  /**
   * Called when component is attached and when component data changes.
   * Generally modifies the entity based on the data.
   */
  update: function (oldData) { },

  /**
   * Called when a component is removed (e.g., via removeAttribute).
   * Generally undoes all modifications to the entity.
   */
  remove: function () { },

  /**
   * Called on each scene tick.
   */
  // tick: function (t) { },

  /**
   * Called when entity pauses.
   * Use to stop or remove any dynamic or background behavior such as events.
   */
  pause: function () { },

  /**
   * Called when entity resumes.
   * Use to continue or add any dynamic or background behavior such as events.
   */
  play: function () { },

  /**
   * Event handlers that automatically get attached or detached based on scene state.
   */
  events: {
    // click: function (evt) { }
  }
});
