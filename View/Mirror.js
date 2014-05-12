define(['./Visualizer', './Min', './Max', '../shim'], function(Visualizer, Min, Max, shim) {
  var Mirror = function(context, ux) {
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
        obj.n ? setMax() : setMax();
      }
    });
  };

  var maximize = function() {
    var el = this.visualizer.el;
    this.min.detach(el);
    this.max.attach(el);
  };

  var minimize = function() {
    var el = this.get('visualizer').el;
    this.max.detach(el);
    this.min.attach(el);
  };

  return Mirror;
});