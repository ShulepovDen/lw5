/* eslint-disable no-restricted-globals */
/* eslint-disable operator-linebreak */
/* eslint-disable no-param-reassign */

export function countTotal(product) {
  if (product === null || typeof product === 'boolean' || typeof product !== 'object') {
    return false;
  }
  return product.count * product.priceForOne;
}
export function setNameProduct(product, nameProduct) {
  if (
    typeof nameProduct !== 'string' ||
    (!isNaN(parseFloat(nameProduct)) && isFinite(nameProduct)) ||
    typeof product !== 'object' ||
    product === null
  ) {
    return false;
  }
  product.name = nameProduct;
  return true;
}
export function setCountProduct(product, countProduct) {
  if (
    (isNaN(parseFloat(countProduct)) && !isFinite(countProduct)) ||
    typeof product !== 'object' ||
    countProduct === null ||
    typeof countProduct === 'boolean' ||
    product === null
  ) {
    return false;
  }
  product.count = countProduct;
  return true;
}
export function setPriceForOneProduct(product, priceForOneProduct) {
  if (
    (isNaN(parseFloat(priceForOneProduct)) && !isFinite(priceForOneProduct)) ||
    typeof product !== 'object' ||
    typeof priceForOneProduct === 'boolean' ||
    priceForOneProduct === null ||
    product === null
  ) {
    return false;
  }
  product.priceForOne = priceForOneProduct;
  return true;
}
export function setResultTotal(list) {
  if (typeof list !== 'object' || list === null) {
    return false;
  }
  return list
    .map((item) => item.priceTotal)
    .reduce((accumulator, currentValue) => accumulator + currentValue);
}
