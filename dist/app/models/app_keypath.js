// Generated by CoffeeScript 1.6.3
var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Batbelt.AppKeypath = (function(_super) {
  __extends(AppKeypath, _super);

  AppKeypath.resourceName = 'app_keypath';

  AppKeypath.primaryKey = 'key';

  AppKeypath.persist(Batbelt.Storage);

  AppKeypath.mixin(Batbelt.AppEventEmitter);

  AppKeypath.encode('key');

  function AppKeypath() {
    var _this = this;
    AppKeypath.__super__.constructor.apply(this, arguments);
    this.set('events', new Batman.Set);
    this.observe('key', function(key, oldKey) {
      if (oldKey) {
        _this.appStopObservingEvents(oldKey);
      }
      return _this.appStartObservingEvents(key, function(eventForKey) {
        return _this.get('events').add(eventForKey);
      });
    });
  }

  return AppKeypath;

})(Batman.Model);
