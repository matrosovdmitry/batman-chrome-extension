// Generated by CoffeeScript 1.6.3
var _ref,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Batbelt.AppControllersController = (function(_super) {
  __extends(AppControllersController, _super);

  function AppControllersController() {
    this.setActive = __bind(this.setActive, this);
    _ref = AppControllersController.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  AppControllersController.prototype.routingKey = 'app_controllers';

  AppControllersController.prototype.index = function() {
    var _this = this;
    return Batbelt.AppController.load(this.errorHandler(function(controllers) {
      _this.set('controllers', controllers);
      return _this.set('activeController', _this._getCurrentController(controllers));
    }));
  };

  AppControllersController.prototype.show = function(params) {
    var _this = this;
    return Batbelt.AppController.find(params.id, this.errorHandler(function(controller) {
      return _this.set('controller', controller);
    }));
  };

  AppControllersController.prototype.setActive = function(controller) {
    return this.set('activeController', controller);
  };

  AppControllersController.prototype._getCurrentController = function(controllers) {
    var controller, _i, _len;
    for (_i = 0, _len = controllers.length; _i < _len; _i++) {
      controller = controllers[_i];
      if (controller.get('_isCurrentController')) {
        return controller;
      }
    }
  };

  return AppControllersController;

})(Batman.Controller);
