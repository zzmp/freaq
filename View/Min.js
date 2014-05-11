define(function() {
  var Min = function(ux) {
    this.toolbar = document.createElement('div');
  };

  Min.prototype.attach = function(el) {
    var container =
      document.getElementById('watch7-sidebar-ads'); // Youtube-dependent

    // Clear container
    while (container.children.length)
      container.removeChild(container.firstElementChild);

    // Fill container with freaqy stuff
    container.appendChild(this.toolbar);
    container.appendChild(el);
  };

  Min.prototype.detach = function(el) {
    while (container.children.length)
      container.removeChild(container.firstElementChild);
  };

  return Min;
});