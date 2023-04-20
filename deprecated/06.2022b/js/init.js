// Components
AFRAME.registerComponent('toggle-handler', {
  schema: {
    target: { default: '#' }
  },
  init: function () {
    var data = this.data;
    //alert(data.target);
    var toggle_obj = document.getElementById(data.target);
    if (toggle_obj) {
      toggle_obj.setAttribute("visible", "false");
      toggle_obj.setAttribute("scale", "0 0 0");
    }

    this.el.addEventListener('click', function () {
      var toggle_obj = document.getElementById(data.target);
      let value = toggle_obj.getAttribute("visible");
      if (value == true) {
        toggle_obj.setAttribute("visible", "false");
        toggle_obj.setAttribute("scale", "0 0 0");
      }
      else {
        toggle_obj.setAttribute("visible", "true");
        toggle_obj.setAttribute("scale", "1 1 1");
      }
    })
  }
});


AFRAME.registerComponent('link-handler', {
  schema: {
    target: { default: '#' }
  },
  init: function () {
    var data = this.data;
    this.el.addEventListener('click', function () {
      //alert(data.target);
      if (data.target != "") {
        //window.location.href = data.target;
        window.open(data.target);
      }
    })
  }
});

// click to jump next images
AFRAME.registerComponent('images-handler', {

  init: function () {
    var data = this.data;
    //alert(data.target);
    //let images = this.data.array;
    this.el.addEventListener('click', function () {
      //this.setAttribute('color', data.color);
      //alert(data.action);
      let value = this.getAttribute("src");
      //alert(value);
      if (value == "#image_1") {
        this.setAttribute("src", "#image_2");
      }
      else {
        this.setAttribute("src", "#image_1");
      }
    })
  }
});


// init function is called after onload event
function init() {
  var isMobile = AFRAME.utils.device.isMobile();
  if (isMobile) {
    // do stuff
  }
}
