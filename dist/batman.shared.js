// Generated by CoffeeScript 1.6.3
var nameForObject,
  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
  __hasProp = {}.hasOwnProperty;

nameForObject = function(obj) {
  var _ref;
  if (obj) {
    if ((_ref = obj.constructor) != null ? _ref.name : void 0) {
      return obj.constructor.name;
    }
    if (obj.name) {
      return obj.name;
    }
  }
};

window.$prettify = function(obj, stack) {
  var key, loaded, pretty, val, value, _i, _len;
  if (stack == null) {
    stack = [];
  }
  if (__indexOf.call(stack, obj) >= 0) {
    return "[circular " + (nameForObject(obj)) + "]";
  }
  stack.push(obj);
  if (!obj) {
    pretty = obj;
  } else if (obj instanceof Array) {
    pretty = [];
    for (_i = 0, _len = obj.length; _i < _len; _i++) {
      value = obj[_i];
      pretty.push($prettify(value, stack));
    }
  } else if (obj instanceof Batman.SimpleHash || obj instanceof Batman.Hash) {
    pretty = {};
    obj.forEach(function(key, value) {
      return pretty[key] = $prettify(value, stack);
    });
  } else if (obj instanceof Batman.SimpleSet || obj instanceof Batman.Set || obj.forEach) {
    pretty = [];
    obj.forEach(function(value) {
      return pretty.push($prettify(value, stack));
    });
  } else if (obj instanceof Batman.Property) {
    pretty = $prettify(obj.getValue(), stack);
  } else if (obj instanceof Batman.Model) {
    pretty = obj.toJSON();
  } else if (obj instanceof Batman.Object) {
    pretty = {};
    pretty['properties'] = $prettify(obj._batman.properties, stack);
  } else if (obj instanceof Batman.RenderContext) {
    pretty = 'Batman.RenderContext';
  } else if (obj.constructor && obj.call && obj.apply) {
    if (obj.get && obj.storageKey && (loaded = obj.get('loaded'))) {
      pretty = $prettify(loaded, stack);
    } else {
      pretty = "[object Function]";
    }
  } else if (obj instanceof Object) {
    pretty = {};
    for (key in obj) {
      if (!__hasProp.call(obj, key)) continue;
      val = obj[key];
      pretty[key] = $prettify(val, stack);
    }
  } else {
    pretty = obj;
  }
  stack.pop();
  return pretty;
};

if (typeof BatmanDebug !== "undefined" && BatmanDebug !== null) {
  BatmanDebug.prettify = window.$prettify;
}

if (typeof Batbelt !== "undefined" && Batbelt !== null) {
  Batbelt.prettify = window.$prettify;
}
