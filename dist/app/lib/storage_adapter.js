// Generated by CoffeeScript 1.6.2
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Batbelt.Storage = (function(_super) {
    __extends(Storage, _super);

    function Storage() {
      if (!Batbelt.sendMessage) {
        return null;
      }
    }

    Storage.prototype.callDebugger = function(key, options, cb) {
      var msg;

      msg = {
        type: 'storageAdapter',
        key: key,
        options: options
      };
      return Batbelt.sendMessage(msg, cb);
    };

    Storage.prototype.before('all', Storage.skipIfError(function(env, next) {
      env.key = env.subject.get('resourceName');
      return next();
    }));

    Storage.prototype.before('read', 'create', 'update', 'destroy', Storage.skipIfError(function(env, next) {
      env.options || (env.options = {});
      env.options.id = env.subject.get('id');
      return next();
    }));

    Storage.prototype.after('read', Storage.skipIfError(function(env, next) {
      env.subject._withoutDirtyTrakcing(function() {
        return this.fromJSON(env.recordAttributes);
      });
      return next();
    }));

    Storage.prototype.after('read', 'create', 'update', 'destroy', Storage.skipIfError(function(env, next) {
      env.result = env.subject;
      return next();
    }));

    Storage.prototype.after('readAll', Storage.skipIfError(function(env, next) {
      env.result = env.records = this.getRecordsFromData(env.recordsAttributes, env.subject);
      return next();
    }));

    Storage.prototype.read = Storage.skipIfError(function(env, next) {
      var _this = this;

      return this.callDebugger("read::" + env.key, env.options, function(result) {
        env.recordAttributes = result;
        if (!env.recordAttributes) {
          env.error = new _this.constructor.NotFoundError();
        }
        return next();
      });
    });

    Storage.prototype.create = Storage.skipIfError(function(env, next) {
      var _this = this;

      return this.callDebugger("create::" + env.key, env.options, function(result) {
        return next();
      });
    });

    Storage.prototype.update = Storage.skipIfError(function(env, next) {
      var _this = this;

      return this.callDebugger("update::" + env.key, env.options, function(result) {
        return next();
      });
    });

    Storage.prototype.destroy = Storage.skipIfError(function(env, next) {
      return this.callDebugger("destroy::" + env.key, env.options, function(result) {
        return next();
      });
    });

    Storage.prototype.readAll = Storage.skipIfError(function(env, next) {
      var _this = this;

      return this.callDebugger("readAll::" + env.key, env.options, function(result) {
        env.recordsAttributes = result;
        return next();
      });
    });

    return Storage;

  })(Batman.StorageAdapter);

}).call(this);
