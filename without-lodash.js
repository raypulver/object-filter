module.exports = function (obj, keys) {
  return keys.reduce(function (r, v) {
    if (typeof obj[v] !== 'undefined') {
      Object.defineProperty(r, v, Object.getOwnPropertyDescriptor(obj, v));
    }
    return r;
  }, {});
};
