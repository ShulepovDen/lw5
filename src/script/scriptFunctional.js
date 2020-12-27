/* eslint-disable no-param-reassign */
export function countTotal(list) {
  list.forEach((element) => {
    element.priceTotal = element.count * element.priceForOne;
  });
}
export function setCountProduct(product, countProduct) {
  product.count = countProduct;
}
export function setPriceForOneProduct(product, PriceForOneProduct) {
  product.priceForOne = PriceForOneProduct;
}
export function setResulTotal(list) {
  let resultCount = 0;
  list.forEach((element) => {
    resultCount += element.priceTotal;
  });
  return resultCount;
}
