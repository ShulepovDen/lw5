/* eslint-disable no-param-reassign */
export function createObservableArray(array) {
  return new Proxy(array, {
    set() {
      // eslint-disable-next-line no-param-reassign
      return true;
    },
  });
}
export function createObservableObject(array, callback) {
  return new Proxy(array, {
    set(target, property, value) {
      if (property === 'name') {
        target.name = value;
      }
      if (property === 'count') {
        target.count = value;
      }
      if (property === 'priceForOne') {
        target.priceForOne = value;
      }
      if (property === 'priceTotal') {
        target.priceTotal = value;
        return true;
      }
      callback();
      return true;
    },
  });
}
