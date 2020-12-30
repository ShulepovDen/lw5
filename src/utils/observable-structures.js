/* eslint-disable operator-linebreak */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */

export function createObservableArray(array, callback) {
  if (
    typeof array !== 'object' ||
    typeof callback !== 'function' ||
    callback === null ||
    array === null
  ) {
    return false;
  }
  return new Proxy(array, {
    set() {
      callback();
      return true;
    },
  });
}
export function createObservableObject(array, callback) {
  if (
    typeof array !== 'object' ||
    typeof callback !== 'function' ||
    callback === null ||
    array === null
  ) {
    return false;
  }
  return new Proxy(array, {
    set(target, property, value) {
      target[property] = value;
      callback();
      return true;
    },
  });
}
