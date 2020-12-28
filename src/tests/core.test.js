/* eslint-disable no-undef */
const productMethods = require('../utils/helpers/core');

function plug() {
  return 1;
}
test('checking the created Observable Array', () => {
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
  let resultList = [];
  resultList[0] = productMethods.createObservableObject(productElements[0], plug);
  resultList[1] = productMethods.createObservableObject(productElements[1], plug);
  resultList[2] = productMethods.createObservableObject(productElements[2], plug);
  resultList = productMethods.createObservableArray(resultList, plug);
  resultList[0].count = 1;
  resultList[1].count = 1;
  resultList[2].count = 1;
  expect(resultList[0].count).toEqual(1);
  expect(resultList[0].count).not.toEqual(2);
  expect(resultList[0].count).not.toEqual('n');
  expect(resultList[0].count).not.toEqual('');
  expect(resultList[0].name).not.toEqual(1);
  expect(resultList[1].count).toEqual(1);
  expect(resultList[1].count).not.toEqual(2);
  expect(resultList[1].count).not.toEqual('n');
  expect(resultList[1].count).not.toEqual('');
  expect(resultList[1].name).not.toEqual(1);
  expect(resultList[2].count).toEqual(1);
  expect(resultList[2].count).not.toEqual(2);
  expect(resultList[2].count).not.toEqual('n');
  expect(resultList[2].count).not.toEqual('');
  expect(resultList[2].name).not.toEqual(1);
  expect(resultList[2].name).not.toEqual(null);
  expect(resultList[2].name).not.toEqual({});
  expect(resultList[2].name).not.toEqual([]);
  expect(resultList[2].name).not.toEqual();
});
