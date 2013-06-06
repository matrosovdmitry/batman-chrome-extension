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

  AppController.encode('name', 'action', 'path', 'current');

  return AppController;

})(Batman.Model);
