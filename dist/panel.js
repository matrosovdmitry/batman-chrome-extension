// Generated by CoffeeScript 1.6.3
Batbelt.Panel = (function() {
  function Panel() {}

  Panel.prototype.init = function() {
    return chrome.devtools.panels.create('Batman', 'img/logo.png', 'views/panel.html', function() {});
  };

  return Panel;

})();
