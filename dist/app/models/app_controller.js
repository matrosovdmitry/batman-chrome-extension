// Generated by CoffeeScript 1.6.3
var _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Batbelt.AppController = (function(_super) {
  __extends(AppController, _super);

  function AppController() {
    _ref = AppController.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  AppController.resourceName = 'app_controller';

  AppController.persist(Batbelt.Storage);

  AppController.mixin(Batbelt.AppObservable);

  AppController.encode('name', 'action', 'path', '_isCurrentController');

  AppController.encode('properties', {
    decode: function(obj) {
      return new Batman.Hash(obj);
    }
  });

  AppController.accessor('propertyKeys', function() {
    return this.get('properties').keys();
  });

  AppController.accessor('currentRouteWithKey', function() {
    var name;
    name = this.get('name').substring(0, this.get('name').length - "Controller".length);
    return "" + (Batman.helpers.underscore(name)) + "#" + (this.get('action'));
  });

  AppController.accessor('id', {
    get: function() {
      return this.id;
    },
    set: function(_, newId) {
      this.id = newId;
      return this.initObservers();
    }
  });

  AppController.prototype.initObservers = function() {
    var param, _i, _len, _ref1, _results,
      _this = this;
    this.observeProperties();
    _ref1 = ['name', 'action', 'path', '_isCurrentController'];
    _results = [];
    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
      param = _ref1[_i];
      _results.push((function(param) {
        return _this.appObserve(param, function(value) {
          return _this.set(param, value);
        });
      })(param));
    }
    return _results;
  };

  return AppController;

})(Batman.Model);
