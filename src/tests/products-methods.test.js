/* eslint-disable no-undef */
const moduleProduct = require('../script/products-methods');

test('check receipt of the count of each item', () => {
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
  moduleProduct.setCountProduct(productElements[0], 4);
  moduleProduct.setCountProduct(productElements[1], 7);
  moduleProduct.setCountProduct(productElements[2], 10);
  expect(productElements[0].count).toEqual(4);
  expect(productElements[1].count).toEqual(7);
  expect(productElements[2].count).toEqual(10);
  expect(productElements[0].count).not.toEqual('n');
  expect(productElements[1].count).not.toEqual('n');
  expect(productElements[2].count).not.toEqual('n');
  expect(productElements[0].count).not.toEqual(15);
  expect(productElements[1].count).not.toEqual(15);
  expect(productElements[2].count).not.toEqual(15);
  expect(productElements[0].count).not.toEqual('');
  expect(productElements[1].count).not.toEqual('');
  expect(productElements[2].count).not.toEqual('');
  expect(productElements[2].count).not.toEqual(null);
  expect(productElements[2].count).not.toEqual({});
  expect(productElements[2].count).not.toEqual([]);
  expect(productElements[2].count).not.toEqual();
  try {
    moduleProduct.setCountProduct(NaN, 1);
  } catch (error) {
    expect(error).toEqual(TypeError("Cannot create property 'count' on number 'NaN'"));
  }
  try {
    moduleProduct.setCountProduct(true, 1);
  } catch (error) {
    expect(error).toEqual(TypeError("Cannot create property 'count' on boolean 'true'"));
  }
  try {
    moduleProduct.setCountProduct('', 1);
  } catch (error) {
    expect(error).toEqual(TypeError("Cannot create property 'count' on string ''"));
  }
  try {
    moduleProduct.setCountProduct(null, 1);
  } catch (error) {
    expect(error).toEqual(TypeError("Cannot set property 'count' of null"));
  }
  moduleProduct.setCountProduct(productElements[0], NaN);
  expect(productElements[0].count).toBe(NaN);
  expect(productElements[0].count).not.toBe(4);
  moduleProduct.setCountProduct(productElements[0], '');
  expect(productElements[0].count).toBe('');
  expect(productElements[0].count).not.toBe(4);
  moduleProduct.setCountProduct(productElements[0], null);
  expect(productElements[0].count).toBe(null);
  expect(productElements[0].count).not.toBe(4);
  moduleProduct.setCountProduct(productElements[0], true);
  expect(productElements[0].count).toBe(true);
  expect(productElements[0].count).not.toBe(4);
});
test('check price invoice of each item', () => {
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
  let firstTotal = moduleProduct.countTotal(productElements[0]);
  const secondTotal = moduleProduct.countTotal(productElements[1]);
  const thirdTotal = moduleProduct.countTotal(productElements[2]);
  expect(firstTotal).toBe(2000);
  expect(secondTotal).toBe(2000);
  expect(thirdTotal).toBe(1000);
  expect(firstTotal).not.toBe('n');
  expect(secondTotal).not.toBe('n');
  expect(thirdTotal).not.toBe('n');
  expect(firstTotal).not.toBe(15);
  expect(secondTotal).not.toBe(15);
  expect(thirdTotal).not.toBe(15);
  expect(firstTotal).not.toBe('');
  expect(secondTotal).not.toBe('');
  expect(thirdTotal).not.toBe('');
  expect(thirdTotal).not.toBe(null);
  expect(thirdTotal).not.toBe({});
  expect(thirdTotal).not.toBe([]);
  expect(thirdTotal).not.toBe();

  firstTotal = moduleProduct.countTotal(NaN);
  expect(firstTotal).toBe(NaN);
  expect(firstTotal).not.toBe(4);
  try {
    firstTotal = moduleProduct.countTotal(null);
    expect(firstTotal).toBe(null);
    expect(firstTotal).not.toBe(4);
  } catch (error) {
    expect(error).toEqual(TypeError("Cannot read property 'count' of null"));
  }

  firstTotal = moduleProduct.countTotal(true);
  expect(firstTotal).toBe(NaN);
  expect(firstTotal).not.toBe(4);
  firstTotal = moduleProduct.countTotal('');
  expect(firstTotal).toBe(NaN);
  expect(firstTotal).not.toBe(4);
});
test('check receipt of the price of each item', () => {
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
  expect(productElements[0].priceForOne).not.toEqual('n');
  expect(productElements[1].priceForOne).not.toEqual(15);
  expect(productElements[2].priceForOne).not.toEqual('');
  expect(productElements[0].priceForOne).not.toEqual('n');
  expect(productElements[1].priceForOne).not.toEqual('n');
  expect(productElements[2].priceForOne).not.toEqual('n');
  expect(productElements[0].priceForOne).not.toEqual(15);
  expect(productElements[1].priceForOne).not.toEqual(15);
  expect(productElements[2].priceForOne).not.toEqual(15);
  expect(productElements[0].priceForOne).not.toEqual('');
  expect(productElements[1].priceForOne).not.toEqual('');
  expect(productElements[2].priceForOne).not.toEqual('');
  expect(productElements[2].priceForOne).not.toEqual(null);
  expect(productElements[2].priceForOne).not.toEqual({});
  expect(productElements[2].priceForOne).not.toEqual([]);
  expect(productElements[2].priceForOne).not.toEqual();
  try {
    moduleProduct.setPriceForOneProduct(NaN, 1);
  } catch (error) {
    expect(error).toEqual(TypeError("Cannot create property 'priceForOne' on number 'NaN'"));
  }
  try {
    moduleProduct.setPriceForOneProduct(true, 1);
  } catch (error) {
    expect(error).toEqual(TypeError("Cannot create property 'priceForOne' on boolean 'true'"));
  }
  try {
    moduleProduct.setPriceForOneProduct('', 1);
  } catch (error) {
    expect(error).toEqual(TypeError("Cannot create property 'priceForOne' on string ''"));
  }
  try {
    moduleProduct.setPriceForOneProduct(null, 1);
  } catch (error) {
    expect(error).toEqual(TypeError("Cannot set property 'priceForOne' of null"));
  }
  moduleProduct.setPriceForOneProduct(productElements[0], NaN);
  expect(productElements[0].priceForOne).toBe(NaN);
  expect(productElements[0].priceForOne).not.toBe(4);
  moduleProduct.setPriceForOneProduct(productElements[0], '');
  expect(productElements[0].priceForOne).toBe('');
  expect(productElements[0].priceForOne).not.toBe(4);
  moduleProduct.setPriceForOneProduct(productElements[0], null);
  expect(productElements[0].priceForOne).toBe(null);
  expect(productElements[0].priceForOne).not.toBe(4);
  moduleProduct.setPriceForOneProduct(productElements[0], true);
  expect(productElements[0].priceForOne).toBe(true);
  expect(productElements[0].priceForOne).not.toBe(4);
});
test('check receipt of the full value of the goods', () => {
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
  let resultTotal = moduleProduct.setResultTotal(productElements);
  expect(resultTotal).toEqual(5000);
  expect(resultTotal).not.toEqual('n');
  expect(resultTotal).not.toEqual(10);
  expect(resultTotal).not.toEqual('');
  expect(resultTotal).not.toEqual(null);
  expect(resultTotal).not.toEqual({});
  expect(resultTotal).not.toEqual([]);
  expect(resultTotal).not.toEqual();
  try {
    resultTotal = moduleProduct.setResultTotal(NaN);
    expect(resultTotal).toEqual(NaN);
  } catch (error) {
    expect(error).toEqual(TypeError('list.map is not a function'));
  }
});
test('check receipt of the name of the goods', () => {
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
  moduleProduct.setNameProduct(productElements[0], 'Пельмени');
  moduleProduct.setNameProduct(productElements[1], 'Сыр');
  moduleProduct.setNameProduct(productElements[2], 'Чеснок');
  expect(productElements[0].name).toEqual('Пельмени');
  expect(productElements[1].name).toEqual('Сыр');
  expect(productElements[2].name).toEqual('Чеснок');
  expect(productElements[0].name).not.toEqual('n');
  expect(productElements[0].name).not.toEqual(10);
  expect(productElements[0].name).not.toEqual('');
  expect(productElements[1].name).not.toEqual('n');
  expect(productElements[1].name).not.toEqual(10);
  expect(productElements[1].name).not.toEqual('');
  expect(productElements[2].name).not.toEqual('n');
  expect(productElements[2].name).not.toEqual(10);
  expect(productElements[2].name).not.toEqual('');
  expect(productElements[2].name).not.toEqual(null);
  expect(productElements[2].name).not.toEqual({});
  expect(productElements[2].name).not.toEqual([]);
  expect(productElements[2].name).not.toEqual();
  try {
    moduleProduct.setNameProduct(NaN, 1);
  } catch (error) {
    expect(error).toEqual(TypeError("Cannot create property 'name' on number 'NaN'"));
  }
  try {
    moduleProduct.setNameProduct(true, 1);
  } catch (error) {
    expect(error).toEqual(TypeError("Cannot create property 'name' on boolean 'true'"));
  }
  try {
    moduleProduct.setNameProduct('', 1);
  } catch (error) {
    expect(error).toEqual(TypeError("Cannot create property 'name' on string ''"));
  }
  try {
    moduleProduct.setNameProduct(null, 1);
  } catch (error) {
    expect(error).toEqual(TypeError("Cannot set property 'name' of null"));
  }
  moduleProduct.setNameProduct(productElements[0], NaN);
  expect(productElements[0].name).toBe(NaN);
  expect(productElements[0].name).not.toBe(4);
  moduleProduct.setNameProduct(productElements[0], '');
  expect(productElements[0].name).toBe('');
  expect(productElements[0].name).not.toBe(4);
  moduleProduct.setNameProduct(productElements[0], null);
  expect(productElements[0].name).toBe(null);
  expect(productElements[0].name).not.toBe(4);
  moduleProduct.setNameProduct(productElements[0], true);
  expect(productElements[0].name).toBe(true);
  expect(productElements[0].name).not.toBe(4);
});
