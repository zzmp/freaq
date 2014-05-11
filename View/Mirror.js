define(['Min', 'Max', '../shim'], function(Min, Max, shim) {
  var Mirror = function(context, ux) {
    var vis = this.visualizer = new Visualizer(context, ux);
    var max = this.max = new Max(ux);
    var min = this.min = new Min(ux);

    min.attach(vis.el);
    vis.boot();

    // Persist through multiple songs
    context.on('loadstart', function() {
      ux.get('fullscreen') ? max.attach(vis.el) : min.attach(vis.el);
    });

    var maxScreen = maximize.bind(this);
    var minScreen = minimize.bind(this);
    shim.onfullscreenchange(function() {
      ux.get('fullscreen') ? maxScreen() : miniScreen();
    }, false);
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