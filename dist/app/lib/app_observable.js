// Generated by CoffeeScript 1.6.3
Batbelt.AppObservable = {
  initialize: function() {
    this.appObserve = function(property, cb) {
      var msg;
      msg = {
        type: 'observeLoadedProperty',
        id: this.get(this.constructor.primaryKey),
        property: property
      };
      return Batbelt.sendMessage(msg, cb);
    };
    return this.observeProperties = function() {
      var _this = this;
      return this.observe('properties', function(properties) {
        return properties.forEach(function(key, value) {
          return _this.appObserve(key, function(newValue) {
            return _this.set("properties." + key, newValue);
          });
        });
      });
    };
  }
};
