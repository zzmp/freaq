define(['../node_modules/pown/pown', '../shim'], function(pown, shim) {
  var Context = function(mediaElement) {
    // Set up audio context
    var context     = new shim.AudioContext();
    var source      = this.set('source',
                               context.createMediaElementSource(mediaElement));
    var analyser    = this.set('analyser', context.createAnalyser());
    var loFilter    = this.set('loFilter', context.createBiquadFilter());
    var hiFilter    = this.set('hiFilter', context.createBiquadFilter());
    var destination = this.set('destination', context.destination);

    // Set filter types
    loFilter.type = 'lowshelf';
    hiFilter.type = 'highshelf';
    // Cache filter ranges
    var freqBase = loFilter.frequency.minValue;
    var gainBase = loFilter.gain.minValue;
    var freqRange = loFilter.frequency.maxValue - freqBase;
    var gainRange = loFilter.gain.maxValue - gainBase;

    // Register analyser/filter listeners
    this.on('change', function(ctx, opt) {
      var filter;

      switch (opt.p) {
        case 'smooth':
          analyser.smoothingTimeConstant = opt.n;
          break;
        case 'fft':
          analyser.fftSize = opt.n;
          break;
        case 'loFreq':
          filter = loFilter;
        case 'hiFreq':
          filter = hiFilter;
          filter.frequency.value = freqBase + freqRange * opt.n;
          break;
        case 'loGain':
          filter = loFilter;
        case 'hiGain':
          filter = hiFilter;
          filter.gain.value = gainBase + gainRange * opt.n;
      }
    });

    // Initialize filter values
    this.set('loFreq', 0.5);
    this.set('hiFreq', 0.5);
    this.set('loGain', 0.5);
    this.set('hiGain', 0.5);

    // Connect audio context
    source.connect(analyser);
    analyser.connect(loFilter);
    loFilter.connect(hiFilter);
    hiFilter.connect(destination);

    // Bind listener callbacks
    var loadstart = this.trigger.bind(this, 'loadstart');
    var play = this.trigger.bind(this, 'play');
    var pause = this.trigger.bind(this, 'pause');

    // Register media listeners
    mediaElement.addEventListener('loadstart', loadstart);
    mediaElement.addEventListener('play', play);
    mediaElement.addEventListener('pause', pause);
  };

  Context.prototype = Object.create(pown);

  return Context;
});