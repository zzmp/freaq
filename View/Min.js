define(function() {
  var Min = function(ux) {
    var toolbar = this.toolbar = document.createElement('div');
    var fullscreener = document.createElement('div');

    toolbar.style.setProperty('height', '27px');
    fullscreener.style.cssText ='margin: 3px; ' +
                                'border: 3px solid #E8E8E8; ' +
                                'border-radius: 75% / 25%; ' +
                                'float: left; width: 21px; height: 18px;';

    fullscreener.addEventListener('mouseenter', function(){
      fullscreener.style.setProperty('border', '3px solid #585858');
    });
    fullscreener.addEventListener('mouseleave', function(){
      fullscreener.style.setProperty('border', '3px solid #C8C8C8');
    });

    // Register listener for fullscreening
    fullscreener.addEventListener('click', function(){
      ux.set('fullscreen', true);
    });

    toolbar.appendChild(fullscreener);
  };

  Min.prototype.attach = function(el) {
    var container =
      document.getElementById('watch7-sidebar-ads'); // Youtube-dependent

    // Clear container
    while (container.children.length)
      container.removeChild(container.firstElementChild);

    // Fill container with freaqy stuff
    container.appendChild(el);
    container.appendChild(this.toolbar);
  };

  Min.prototype.detach = function(el) {
    var container =
      document.getElementById('watch7-sidebar-ads'); // Youtube-dependent

    // Clear container
    while (container.children.length)
      container.removeChild(container.firstElementChild);
  };

  return Min;
});