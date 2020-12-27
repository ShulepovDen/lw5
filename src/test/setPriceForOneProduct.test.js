/* eslint-disable no-undef */
const moduleProduct = require('../script/scriptFunctional');

test('check the count of item', () => {
  const productElements = [
    {
      id: 1,
      name: 'Молоко',
      count: 40,
      priceForOne: 50,
      priceTotal: 2000,
    },
    {
      id: 2,
      name: 'Хлеб',
      count: 100,
      priceForOne: 20,
      priceTotal: 2000,
    },
    {
      id: 3,
      name: 'Лук',
      count: 200,
      priceForOne: 5,
      priceTotal: 1000,
    },
  ];
  moduleProduct.setPriceForOneProduct(productElements[0], 4);
  moduleProduct.setPriceForOneProduct(productElements[1], 7);
  moduleProduct.setPriceForOneProduct(productElements[2], 10);
  expect(productElements[0].priceForOne).toEqual(4);
  expect(productElements[1].priceForOne).toEqual(7);
  expect(productElements[2].priceForOne).toEqual(10);
});
