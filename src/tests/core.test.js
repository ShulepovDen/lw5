/* eslint-disable no-undef */
const productMethods = require('../utils/core');

function plug() {
  return 1;
}
test('checking the created Observable Object', () => {
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

  expect(resultList[1].count).toEqual(1);
  expect(resultList[1].count).not.toEqual(2);
  expect(resultList[1].count).not.toEqual('n');
  expect(resultList[1].count).not.toEqual('');

  expect(resultList[2].count).toEqual(1);
  expect(resultList[2].count).not.toEqual(2);
  expect(resultList[2].count).not.toEqual('n');
  expect(resultList[2].count).not.toEqual('');
  expect((resultList[2].count = NaN)).toEqual(NaN);
  expect((resultList[2].name = true)).not.toEqual(1);
  expect((resultList[2].name = {})).not.toEqual(1);
  expect((resultList[2].name = [])).not.toEqual(1);
});
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
  try {
    productMethods.createObservableArray(1, plug);
  } catch (error) {
    expect(error).toEqual(TypeError('Cannot create proxy with a non-object as target or handler'));
  }
  expect(productMethods.createObservableArray(resultList, 1)).toEqual(resultList);
  resultList = 1;
  expect(resultList).toEqual(1);
  expect(resultList).not.toEqual(2);
  expect(resultList).not.toEqual(NaN);
  expect(resultList).not.toEqual(true);
  expect(resultList).not.toEqual('');
  expect((resultList = '')).toEqual('');
  expect((resultList = NaN)).toEqual(NaN);
});
