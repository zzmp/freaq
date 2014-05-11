define(['../shim'],function(shim) {
  var Visualizer = function(context, ux) {
    this.analyser = context.get('analyser');
    this.ux = ux;
    // Set up canvas
    this.el = document.createElement('canvas');
    this.el.style.cssText = "left: 0; top: 0; width: 100%; height: 100%;";
    this.isPaused = false;

    // Register media listeners
    context.on('play', play.bind(this));
    context.on('pause', pause.bind(this));
  };

  // Boot visualization
  Visualizer.prototype.boot = function() {
    drawSound.call(this);
  };

  var play = function() {
    var wasPaused = this.isPaused;
    this.isPaused = false;
    if (wasPaused) drawSound.call(this);
  };

  var pause = function() {
    this.isPaused = true;
  };

  var drawSound = function() {
    var el = this.el;
    var draw = el.getContext('2d');
    var cWidth = el.clientWidth;
    var cHeight = el.clientHeight;

    var analyser = this.analyser;
    var bins = analyser.frequencyBinCount; // == analyser.fftSize / 2
    var freqs = new Uint8Array(bins);
    // var times = new Uint8Array(bins);

    analyser.getByteFrequencyData(freqs);
    // analyser.getByteTimeDomainData(times);

    // Get UX settings
    var hue = this.ux.get('hue');
    var rainbow = this.ux.get('rainbow');
    if (rainbow === 1) this.ux.set('hue', hue + 1);

    for (var i = 0; i < bins; i++) {
      var val = freqs[i];
      var width = cWidth / bins;
      var percent = val / 256; // 2^8 == byte
      var height = cHeight * percent;
      var offset = cHeight - height - 1;
      if (rainbow === -1) this.ux.set('hue', hue + 1); // UX
      draw.fillStyle = 'hsl(' + hue + ', 100%, 50%)';
      draw.clearRect(i * width, 0, width, cHeight);
      draw.fillRect(i * width, offset, width, 2);
    }

    // Refresh with page render
    if (!this.isPaused) shim.requestAnimationFrame(drawSound.bind(this));
  };

  return Visualizer;
});
