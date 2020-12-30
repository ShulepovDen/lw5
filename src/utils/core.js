/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */

export function createObservableArray(array, callback) {
  return new Proxy(array, {
    set() {
      return true;
    },
  });
}
export function createObservableObject(array, callback) {
  return new Proxy(array, {
    set(target, property, value) {
      target[property] = value;
      callback();
      return true;
    },
  });
}
