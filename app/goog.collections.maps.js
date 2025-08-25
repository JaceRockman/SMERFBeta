goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.collections.maps");
  goog.module.declareLegacyNamespace();
  var MapLike = function() {
    this.size;
  };
  MapLike.prototype.set = function(key, val) {
  };
  MapLike.prototype.get = function(key) {
  };
  MapLike.prototype.keys = function() {
  };
  MapLike.prototype.values = function() {
  };
  MapLike.prototype.has = function(key) {
  };
  exports.MapLike = MapLike;
  function setAll(map, entries) {
    if (!entries) {
      return;
    }
    for (var $jscomp$iter$0 = $jscomp.makeIterator(entries), $jscomp$key$$jscomp$destructuring$var26 = $jscomp$iter$0.next(); !$jscomp$key$$jscomp$destructuring$var26.done; $jscomp$key$$jscomp$destructuring$var26 = $jscomp$iter$0.next()) {
      var $jscomp$destructuring$var26 = $jscomp$key$$jscomp$destructuring$var26.value;
      {
        var $jscomp$destructuring$var27 = $jscomp.makeIterator($jscomp$destructuring$var26);
        var k = $jscomp$destructuring$var27.next().value;
        var v = $jscomp$destructuring$var27.next().value;
        {
          map.set(k, v);
        }
      }
    }
  }
  exports.setAll = setAll;
  function hasValue(map, val, valueEqualityFn) {
    valueEqualityFn = valueEqualityFn === void 0 ? defaultEqualityFn : valueEqualityFn;
    for (var $jscomp$iter$1 = $jscomp.makeIterator(map.values()), $jscomp$key$v = $jscomp$iter$1.next(); !$jscomp$key$v.done; $jscomp$key$v = $jscomp$iter$1.next()) {
      var v = $jscomp$key$v.value;
      {
        if (valueEqualityFn(v, val)) {
          return true;
        }
      }
    }
    return false;
  }
  exports.hasValue = hasValue;
  var defaultEqualityFn = function(a, b) {
    return a === b;
  };
  function equals(map, otherMap, valueEqualityFn) {
    valueEqualityFn = valueEqualityFn === void 0 ? defaultEqualityFn : valueEqualityFn;
    if (map === otherMap) {
      return true;
    }
    if (map.size !== otherMap.size) {
      return false;
    }
    for (var $jscomp$iter$2 = $jscomp.makeIterator(map.keys()), $jscomp$key$key = $jscomp$iter$2.next(); !$jscomp$key$key.done; $jscomp$key$key = $jscomp$iter$2.next()) {
      var key = $jscomp$key$key.value;
      {
        if (!otherMap.has(key)) {
          return false;
        }
        if (!valueEqualityFn(map.get(key), otherMap.get(key))) {
          return false;
        }
      }
    }
    return true;
  }
  exports.equals = equals;
  function transpose(map) {
    var transposed = new Map();
    for (var $jscomp$iter$3 = $jscomp.makeIterator(map.keys()), $jscomp$key$key = $jscomp$iter$3.next(); !$jscomp$key$key.done; $jscomp$key$key = $jscomp$iter$3.next()) {
      var key = $jscomp$key$key.value;
      {
        var val = map.get(key);
        transposed.set(val, key);
      }
    }
    return transposed;
  }
  exports.transpose = transpose;
  function toObject(map) {
    var obj = {};
    for (var $jscomp$iter$4 = $jscomp.makeIterator(map.keys()), $jscomp$key$key = $jscomp$iter$4.next(); !$jscomp$key$key.done; $jscomp$key$key = $jscomp$iter$4.next()) {
      var key = $jscomp$key$key.value;
      {
        obj[key] = map.get(key);
      }
    }
    return obj;
  }
  exports.toObject = toObject;
  return exports;
});

//# sourceMappingURL=goog.collections.maps.js.map
