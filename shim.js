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
                           document.webkitExitFullscreen ||
                           document.mozCancelFullScreen  ||
                           document.msExitFullScreen;
      exitFullscreen.call(document);
    },
    fullscreenElement: function() {
      return document.FullscreenElement       ||
             document.webkitFullscreenElement ||
             document.mozFullScreenElement    ||
             document.msFullScreenElement;
    },
    onfullscreenchange: function (callback, useCapture) {
      document.addEventListener('fullscreenchange', callback, useCapture);
      document.addEventListener('webkitfullscreenchange', callback, useCapture);
      document.addEventListener('mozfullscreenchange', callback, useCapture);
      document.addEventListener('msfullscreenchange', callback, useCapture);
    }
  };
});