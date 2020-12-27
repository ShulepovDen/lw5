/* eslint-disable no-undef */
const moduleProduct = require('../script/scriptFunctional');

test('check the receipt of the full price of each item', () => {
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
  moduleProduct.countTotal(productElements);
  expect(productElements).toHaveLength(3);
  expect(productElements[0].priceTotal).toBe(2000);
  expect(productElements[1].priceTotal).toBe(2000);
  expect(productElements[2].priceTotal).toBe(1000);
});
