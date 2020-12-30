/* eslint-disable no-param-reassign */

export function countTotal(product) {
  return product.count * product.priceForOne;
}
export function setNameProduct(product, nameProduct) {
  product.name = nameProduct;
}
export function setCountProduct(product, countProduct) {
  product.count = countProduct;
}
export function setPriceForOneProduct(product, priceForOneProduct) {
  product.priceForOne = priceForOneProduct;
}
export function setResultTotal(list) {
  return list
    .map((item) => item.priceTotal)
    .reduce((accumulator, currentValue) => accumulator + currentValue);
}
