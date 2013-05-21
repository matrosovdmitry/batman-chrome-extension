// Generated by CoffeeScript 1.6.2
(function() {
  window.Batbelt.Sidebar = (function() {
    function Sidebar() {}

    Sidebar.prototype.init = function() {
      var _this = this;

      return chrome.devtools.panels.elements.createSidebarPane('Batman', function(sidebar) {
        _this.update(sidebar);
        return chrome.devtools.panels.elements.onSelectionChanged.addListener(function() {
          return _this.update(sidebar);
        });
      });
    };

    Sidebar.prototype.update = function(sidebar) {
      var fnDef;

      fnDef = this.info.toString();
      return sidebar.setExpression('(' + fnDef + ')()');
    };

    Sidebar.prototype.info = function() {
      var context, e;

      try {
        return context = Batman._data($0).bindings[0].renderContext;
      } catch (_error) {
        e = _error;
      }
    };

    return Sidebar;

  })();

}).call(this);
