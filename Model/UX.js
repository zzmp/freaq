define(['../node_modules/pown/pown'], function(pown) {
  var UX = function(context) {
    this.on('change', function (ctx, opt) {
      var p = opt.p;
      var n = opt.n;

      // UX exposure
      switch (p) {
        case 'hue': // 0 <= val <= 256
          if (n >= 0 || n <= 256)
            this.hue = Math.floor(n) % 256;
          return;
        case 'rainbow': // -1, 0, 1
          if (n === -1 || n === 0 || n === 1)
            this.rainbow = n;
          return;
      }

      // Context exposure
      switch (p) {
        case 'smooth': // 0 <= val <= 1
          if (n < 0 || n > 1) return;
          break;
        case 'fft': // 32 <= val <= 2048
          if (n < 32 || n > 2048) return;
          if ( n | (n - 1) ) return;
          break;
        case 'loFreq':
        case 'hiFreq':
        case 'loGain':
        case 'hiGain':
          if (n < 0 || n > 1) return;
      }
      context.set(opt.p, n);
    });

    // Initialize colors
    this.set('hue', 215);
    this.set('rainbow', 0);
  };

  UX.prototype = Object.create(pown);

  return UX;
});