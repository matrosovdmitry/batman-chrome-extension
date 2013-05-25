// Generated by CoffeeScript 1.6.2
(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Batman.extend(Batman.config, {
    pathToApp: '/views/panel.html'
  });

  Batman.View.prototype.cache = false;

  window.Batbelt = (function(_super) {
    __extends(Batbelt, _super);

    function Batbelt() {
      _ref = Batbelt.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Batbelt.root('dashboard#show');

    Batbelt.sendMessage = function(msg, cb) {
      var data;

      if (cb == null) {
        cb = function() {};
      }
      data = {
        tabId: chrome.devtools.inspectedWindow.tabId,
        data: msg
      };
      return chrome.runtime.sendMessage(data, cb);
    };

    return Batbelt;

  })(Batman.App);

}).call(this);
