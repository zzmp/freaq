define(['./Toolbar','../shim'], function(Toolbar, shim) {
  var Max = function(ux) {
    var container = this.el = document.createElement('div');
    var toolbar = new Toolbar().el;
    this.video = document.querySelector('video');

    container.style.cssText = "background-color: black; " +
                              "width: 100%; height: 100%";

    //container.appendChild(toolbar); // TODO: make toolbar

    container.addEventListener('mousemove', function() {
      // TODO: show toolbar on mousemove
    });
  };

  Max.prototype.attach = function(el) {
    if (this.video) { // Playing external element disrupts fullscreening
      // Cache video container
      this.parent = this.video.parentElement;
      this.el.appendChild(this.video);
      this.video.style.setProperty('display', 'none');
    }

    this.el.appendChild(el);
    document.querySelector('body').appendChild(this.el);
    shim.requestFullscreen.call(this.el);
  };

  Max.prototype.detach = function(el) {
    if (this.video && this.parent) {
      // Return video to cached container
      this.parent.appendChild(this.video);
      this.video.style.setProperty('display', 'block');
    }

    this.el.removeChild(el);
    shim.exitFullscreen();
  };

  return Max;
});