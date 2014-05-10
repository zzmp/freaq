define(function () {
  return {
    AudioContext: window.AudioContext                         || 
                  window.webkitAudioContext                   ||
                  window.mozAudioContext                      || 
                  window.oAudioContext                        ||
                  window.msAudioContext,
    requestAnimationFrame: window.requestAnimationFrame       || 
                           window.webkitRequestAnimationFrame || 
                           window.mozRequestAnimationFrame    || 
                           window.oRequestAnimationFrame      || 
                           window.msRequestAnimationFrame     ||
                           function (callback) {
                             window.setTimeout(callback, 1000 / 17);
                           },
    requestFullscreen: window.requestFullscreen               ||
                       window.webkitRequestFullScreen         ||
                       window.mozRequestFullScreen            ||
                       window.oRequestFullScreen              ||
                       window.msRequestFullScreen,
    fullscreenElement: document.FullscreenElement             ||
                       document.webkitFullscreenElement       ||
                       document.webkitFullScreenElement       ||
                       document.mozFullscreenElement          ||
                       document.mozFullScreenElement          ||
                       document.oFullscreenElement            ||
                       document.oFullScreenElement            ||
                       document.msFullscreenElement           ||
                       document.msFullScreenElement,
    onfullscreenchange: function (callback, useCapture) {
      this.addEventListener('fullscreenchange', callback, useCapture);
      this.addEventListener('webkitfullscreenchange', callback, useCapture);
      this.addEventListener('mozfullscreenchange', callback, useCapture);
      this.addEventListener('ofullscreenchange', callback, useCapture);
      this.addEventListener('msfullscreenchange', callback, useCapture);
    }
  };
});