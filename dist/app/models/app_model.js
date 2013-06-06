// Generated by CoffeeScript 1.6.3
var _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Batbelt.AppModel = (function(_super) {
  __extends(AppModel, _super);

  function AppModel() {
    _ref = AppModel.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  AppModel.resourceName = 'app_model';

  AppModel.primaryKey = 'name';

  AppModel.persist(Batbelt.Storage);

  AppModel.encode('name');

  AppModel.hasMany('instances', {
    name: 'AppModelInstance'
  });

  return AppModel;

})(Batman.Model);

Batbelt.AppModelInstance = (function(_super) {
  __extends(AppModelInstance, _super);

  AppModelInstance.resourceName = 'instance';

  AppModelInstance.persist(Batbelt.Storage);

  AppModelInstance.mixin(Batbelt.AppObservable);

  AppModelInstance.encode('properties', {
    decode: function(obj) {
      return new Batman.Hash(obj);
    }
  });

  AppModelInstance.belongsTo('app_model');

  AppModelInstance.accessor('propertyKeys', function() {
    return this.get('properties').keys();
  });

  function AppModelInstance() {
    AppModelInstance.__super__.constructor.apply(this, arguments);
    this.observeProperties();
  }

  return AppModelInstance;

})(Batman.Model);
