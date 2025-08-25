goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.object");
  goog.module.declareLegacyNamespace();
  function forEach(obj, f, opt_obj) {
    for (var key in obj) {
      f.call(opt_obj, obj[key], key, obj);
    }
  }
  function filter(obj, f, opt_obj) {
    var res = {};
    for (var key in obj) {
      if (f.call(opt_obj, obj[key], key, obj)) {
        res[key] = obj[key];
      }
    }
    return res;
  }
  function map(obj, f, opt_obj) {
    var res = {};
    for (var key in obj) {
      res[key] = f.call(opt_obj, obj[key], key, obj);
    }
    return res;
  }
  function some(obj, f, opt_obj) {
    for (var key in obj) {
      if (f.call(opt_obj, obj[key], key, obj)) {
        return true;
      }
    }
    return false;
  }
  function every(obj, f, opt_obj) {
    for (var key in obj) {
      if (!f.call(opt_obj, obj[key], key, obj)) {
        return false;
      }
    }
    return true;
  }
  function getCount(obj) {
    var rv = 0;
    for (var key in obj) {
      rv++;
    }
    return rv;
  }
  function getAnyKey(obj) {
    for (var key in obj) {
      return key;
    }
  }
  function getAnyValue(obj) {
    for (var key in obj) {
      return obj[key];
    }
  }
  function contains(obj, val) {
    return containsValue(obj, val);
  }
  function getValues(obj) {
    var res = [];
    var i = 0;
    for (var key in obj) {
      res[i++] = obj[key];
    }
    return res;
  }
  function getKeys(obj) {
    var res = [];
    var i = 0;
    for (var key in obj) {
      res[i++] = key;
    }
    return res;
  }
  function getValueByKeys(obj, var_args) {
    var isArrayLike = goog.isArrayLike(var_args);
    var keys = isArrayLike ? var_args : arguments;
    for (var i = isArrayLike ? 0 : 1; i < keys.length; i++) {
      if (obj == null) {
        return undefined;
      }
      obj = obj[keys[i]];
    }
    return obj;
  }
  function containsKey(obj, key) {
    return obj !== null && key in obj;
  }
  function containsValue(obj, val) {
    for (var key in obj) {
      if (obj[key] == val) {
        return true;
      }
    }
    return false;
  }
  function findKey(obj, f, thisObj) {
    for (var key in obj) {
      if (f.call(thisObj, obj[key], key, obj)) {
        return key;
      }
    }
    return undefined;
  }
  function findValue(obj, f, thisObj) {
    var key = findKey(obj, f, thisObj);
    return key && obj[key];
  }
  function isEmpty(obj) {
    for (var key in obj) {
      return false;
    }
    return true;
  }
  function clear(obj) {
    for (var i in obj) {
      delete obj[i];
    }
  }
  function remove(obj, key) {
    var rv;
    if (rv = key in obj) {
      delete obj[key];
    }
    return rv;
  }
  function add(obj, key, val) {
    if (obj !== null && key in obj) {
      throw new Error('The object already contains the key "' + key + '"');
    }
    set(obj, key, val);
  }
  function get(obj, key, val) {
    if (obj !== null && key in obj) {
      return obj[key];
    }
    return val;
  }
  function set(obj, key, value) {
    obj[key] = value;
  }
  function setIfUndefined(obj, key, value) {
    return key in obj ? obj[key] : obj[key] = value;
  }
  function setWithReturnValueIfNotSet(obj, key, f) {
    if (key in obj) {
      return obj[key];
    }
    var val = f();
    obj[key] = val;
    return val;
  }
  function equals(a, b) {
    for (var k in a) {
      if (!(k in b) || a[k] !== b[k]) {
        return false;
      }
    }
    for (var k$5 in b) {
      if (!(k$5 in a)) {
        return false;
      }
    }
    return true;
  }
  function clone(obj) {
    var res = {};
    for (var key in obj) {
      res[key] = obj[key];
    }
    return res;
  }
  function unsafeClone(obj) {
    if (!obj || typeof obj !== "object") {
      return obj;
    }
    if (typeof obj.clone === "function") {
      return obj.clone();
    }
    if (typeof Map !== "undefined" && obj instanceof Map) {
      return new Map(obj);
    } else if (typeof Set !== "undefined" && obj instanceof Set) {
      return new Set(obj);
    } else if (obj instanceof Date) {
      return new Date(obj.getTime());
    }
    var clone = Array.isArray(obj) ? [] : typeof ArrayBuffer === "function" && typeof ArrayBuffer.isView === "function" && ArrayBuffer.isView(obj) && !(obj instanceof DataView) ? new obj.constructor(obj.length) : {};
    for (var key in obj) {
      clone[key] = unsafeClone(obj[key]);
    }
    return clone;
  }
  function transpose(obj) {
    var transposed = {};
    for (var key in obj) {
      transposed[obj[key]] = key;
    }
    return transposed;
  }
  var PROTOTYPE_FIELDS = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf",];
  function extend(target, var_args) {
    var key;
    var source;
    for (var i = 1; i < arguments.length; i++) {
      source = arguments[i];
      for (key in source) {
        target[key] = source[key];
      }
      for (var j = 0; j < PROTOTYPE_FIELDS.length; j++) {
        key = PROTOTYPE_FIELDS[j];
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
  }
  function create(var_args) {
    var argLength = arguments.length;
    if (argLength == 1 && Array.isArray(arguments[0])) {
      return create.apply(null, arguments[0]);
    }
    if (argLength % 2) {
      throw new Error("Uneven number of arguments");
    }
    var rv = {};
    for (var i = 0; i < argLength; i += 2) {
      rv[arguments[i]] = arguments[i + 1];
    }
    return rv;
  }
  function createSet(var_args) {
    var argLength = arguments.length;
    if (argLength == 1 && Array.isArray(arguments[0])) {
      return createSet.apply(null, arguments[0]);
    }
    var rv = {};
    for (var i = 0; i < argLength; i++) {
      rv[arguments[i]] = true;
    }
    return rv;
  }
  function createImmutableView(obj) {
    var result = obj;
    if (Object.isFrozen && !Object.isFrozen(obj)) {
      result = Object.create(obj);
      Object.freeze(result);
    }
    return result;
  }
  function isImmutableView(obj) {
    return !!Object.isFrozen && Object.isFrozen(obj);
  }
  function getAllPropertyNames(obj, includeObjectPrototype, includeFunctionPrototype) {
    if (!obj) {
      return [];
    }
    if (!Object.getOwnPropertyNames || !Object.getPrototypeOf) {
      return getKeys(obj);
    }
    var visitedSet = {};
    var proto = obj;
    while (proto && (proto !== Object.prototype || !!includeObjectPrototype) && (proto !== Function.prototype || !!includeFunctionPrototype)) {
      var names = Object.getOwnPropertyNames(proto);
      for (var i = 0; i < names.length; i++) {
        visitedSet[names[i]] = true;
      }
      proto = Object.getPrototypeOf(proto);
    }
    return getKeys(visitedSet);
  }
  function getSuperClass(constructor) {
    var proto = Object.getPrototypeOf(constructor.prototype);
    return proto && proto.constructor;
  }
  exports = {add:add, clear:clear, clone:clone, contains:contains, containsKey:containsKey, containsValue:containsValue, create:create, createImmutableView:createImmutableView, createSet:createSet, equals:equals, every:every, extend:extend, filter:filter, findKey:findKey, findValue:findValue, forEach:forEach, get:get, getAllPropertyNames:getAllPropertyNames, getAnyKey:getAnyKey, getAnyValue:getAnyValue, getCount:getCount, getKeys:getKeys, getSuperClass:getSuperClass, getValueByKeys:getValueByKeys, 
  getValues:getValues, isEmpty:isEmpty, isImmutableView:isImmutableView, map:map, remove:remove, set:set, setIfUndefined:setIfUndefined, setWithReturnValueIfNotSet:setWithReturnValueIfNotSet, some:some, transpose:transpose, unsafeClone:unsafeClone,};
  return exports;
});

//# sourceMappingURL=goog.object.object.js.map
