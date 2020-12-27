/* eslint-disable no-param-reassign */
/* eslint-disable comma-dangle */
/* eslint-disable no-loop-func */
/* eslint-disable no-undef */
import {
  countTotal,
  setCountProduct,
  setPriceForOneProduct,
  setResulTotal,
} from './scriptFunctional';

function createObservableArray(array) {
  return new Proxy(array, {
    set() {
      // eslint-disable-next-line no-param-reassign

      return true;
    },
  });
}
function createObservableObject(array, callback) {
  return new Proxy(array, {
    set(target, property, value) {
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
let productsList = [
  {
    id: 1,
    name: 'Молоко',
    count: 50,
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
let resultTotal = 0;

window.onload = function upload() {
  function updateUI() {
    countTotal(productsList);
    resultTotal = setResulTotal(productsList);
    const source = document.getElementById('store-template').innerHTML;
    const template = Handlebars.compile(source);

    const html = template({ productsList, resultTotal });
    document.getElementById('result-table').innerHTML = html;
    document.querySelectorAll('.table-column__input').forEach((element) => {
      element.addEventListener('dblclick', (event) => {
        event.target.readOnly = false;
      });
    });
    const arrayOfInputCount = document.getElementsByClassName('table-column__input-count');
    const arrayOfInputPriceForOne = document.getElementsByClassName(
      'table-column__input-priceForOne'
    );
    for (let i = 0; i < arrayOfInputCount.length; i += 1) {
      arrayOfInputCount[i].addEventListener('keydown', (e) => {
        const { key } = e;
        if (key === 'Enter') {
          setCountProduct(productsList[i], arrayOfInputCount[i].value);
          return true;
        }
        return false;
      });
    }
    for (let i = 0; i < arrayOfInputPriceForOne.length; i += 1) {
      arrayOfInputPriceForOne[i].addEventListener('keydown', (e) => {
        const { key } = e;
        if (key === 'Enter') {
          setPriceForOneProduct(productsList[i], arrayOfInputPriceForOne[i].value);
          return true;
        }
        return false;
      });
    }
  }

  for (let i = 0; i < productsList.length; i += 1) {
    productsList[i] = createObservableObject(productsList[i], updateUI);
  }
  productsList = createObservableArray(productsList, updateUI);

  updateUI();
};
