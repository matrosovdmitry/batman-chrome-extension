// Generated by CoffeeScript 1.6.2
(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Batbelt.DebugModel = (function(_super) {
    __extends(DebugModel, _super);

    function DebugModel() {
      _ref = DebugModel.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    DebugModel.resourceName = 'debug_model';

    DebugModel.persist(Batbelt.Storage);

    DebugModel.encode('name');

    return DebugModel;

  })(Batman.Model);

}).call(this);
