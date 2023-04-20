/* global AFRAME */
AFRAME.registerComponent('play-on-hover', {
  init: function () {
    this.el.addEventListener('mouseenter', function(evt) {
      vid.play();
    });

    this.el.addEventListener('mouseeave', function(evt) {
      vid.pause();
    });
  },
});
