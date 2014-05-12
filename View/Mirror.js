define(['./Visualizer', './Min', './Max', '../shim'], function(Visualizer, Min, Max, shim) {
  var Mirror = function(context, ux) {
    this.context = context;
    var vis = this.visualizer = new Visualizer(context, ux);
    var max = this.max = new Max(ux);
    var min = this.min = new Min(ux);

    min.attach(vis.el);
    vis.boot();

    // Persist through multiple songs
    context.on('loadstart', function() {
      window.setTimeout(function() {
        ux.get('fullscreen') ? max.attach(vis.el) : min.attach(vis.el);
      }, 1000 / 24); // load in a blink, but wait for ads
    });

    // Register listener for freaqy fullscreen change
    var setMax = maximize.bind(this);
    var setMin = minimize.bind(this);
    ux.on('change', function(ctx, obj) {
      if (obj.p === 'fullscreen') {
        obj.n ? setMax() : setMin();
      }
    });

    // Register listener for fullscreenchange
    shim.onfullscreenchange(function() {
      if (!shim.fullscreenElement()) ux.set('fullscreen', false);
    });
  };

  var maximize = function() {
    var visualizer = this.visualizer;
    // Cache isPaused
    var isPaused = visualizer.isPaused;
    var el = visualizer.el;
    this.min.detach(el);
    this.max.attach(el);
    // Return to cached state
    isPaused || this.context.play();
  };

  var minimize = function() {
    var visualizer = this.visualizer;
    // Cache isPaused
    var isPaused = visualizer.isPaused;
    var el = visualizer.el;
    this.max.detach(el);
    this.min.attach(el);
    // Return to cached state
    isPaused || this.context.play();
  };

  return Mirror;
});