// Generated by CoffeeScript 1.6.3
var _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Batbelt.Dashboard = (function(_super) {
  __extends(Dashboard, _super);

  function Dashboard() {
    _ref = Dashboard.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  Dashboard.resourceName = 'dashboard';

  Dashboard.persist(Batbelt.Storage);

  return Dashboard;

})(Batman.Model);
