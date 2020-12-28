/* eslint-disable no-param-reassign */
const reducer = (accumulator, currentValue) => accumulator + currentValue;
export function countTotal(product) {
  return product.count * product.priceForOne;
}
export function setNameProduct(product, nameProduct) {
  product.name = nameProduct;
}
export function setCountProduct(product, countProduct) {
  product.count = countProduct;
}
export function setPriceForOneProduct(product, PriceForOneProduct) {
  product.priceForOne = PriceForOneProduct;
}
export function setResulTotal(list) {
  return list.map((item) => item.priceTotal).reduce(reducer);
}
