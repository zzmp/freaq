define(function () {
  return {
    AudioContext: window.AudioContext ||
                  window.webkitAudioContext,
    requestAnimationFrame: function(render) {
      var f = window.requestAnimationFrame       ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame;
      return f ? f.call(window, render) : function (callback) {
        window.setTimeout(callback, 1000 / 24);
      };
    },
    requestFullscreen: function() {
      var requestFullscreen = this.requestFullscreen       ||
                              this.webkitRequestFullScreen ||
                              this.mozRequestFullScreen    ||
                              this.msRequestFullScreen;
      requestFullscreen.call(this);
    },
    exitFullscreen: function() {
      var exitFullscreen = document.exitFullscreen       ||
                           document.webkitExitFullScreen ||
                           document.mozCancelFullScreen  ||
                           document.msExitFullScreen;
      exitFullscreen.call(document);
    },
    fullscreenElement: function() {
      return document.FullscreenElement       ||
             document.webkitFullScreenElement ||
             document.mozFullScreenElement    ||
             document.msFullScreenElement;
    },
    onfullscreenchange: function (callback, useCapture) {
      this.addEventListener('fullscreenchange', callback, useCapture);
      this.addEventListener('webkitfullscreenchange', callback, useCapture);
      this.addEventListener('mozfullscreenchange', callback, useCapture);
      this.addEventListener('msfullscreenchange', callback, useCapture);
    }
  };
});