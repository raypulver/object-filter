const pickBy = require('lodash').pickBy;


module.exports = function (obj, keys) {
  return pickBy(obj, function (value, key) {
    return ~keys.indexOf(key);
  });
}
