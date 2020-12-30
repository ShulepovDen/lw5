/* eslint-disable no-param-reassign */
/* eslint-disable comma-dangle */
/* eslint-disable no-loop-func */
/* eslint-disable no-undef */
import {
  countTotal,
  setNameProduct,
  setCountProduct,
  setPriceForOneProduct,
  setResultTotal,
} from './products-methods';
import { createObservableObject, createObservableArray } from '../utils/observable-structures';

let productsList = [
  {
    id: 1,
    name: 'Молоко',
    count: 50,
    priceForOne: 50,
    priceTotal: 2500,
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
function checkForNumber(value) {
  return value.match(/^\d*[.]?\d+$/);
}
window.onload = function upload() {
  function updateUI() {
    resultTotal = setResultTotal(productsList);
    const source = document.getElementById('store-template').innerHTML;
    const template = Handlebars.compile(source);

    const html = template({ productsList, resultTotal });
    document.getElementById('result-table').innerHTML = html;
    document.querySelectorAll('.table-column__input').forEach((element) => {
      element.addEventListener('dblclick', (event) => {
        event.target.readOnly = false;
      });
    });
    const arrayOfInputName = document.getElementsByClassName('table-column__input-name');
    const arrayOfInputCount = document.getElementsByClassName('table-column__input-count');
    const arrayOfInputPriceForOne = document.getElementsByClassName(
      'table-column__input-priceForOne'
    );
    for (let i = 0; i < arrayOfInputName.length; i += 1) {
      arrayOfInputName[i].addEventListener('keydown', (e) => {
        const { key } = e;
        if (key === 'Enter') {
          setNameProduct(productsList[i], arrayOfInputName[i].value);
          return true;
        }
        return false;
      });
    }
    for (let i = 0; i < arrayOfInputCount.length; i += 1) {
      arrayOfInputCount[i].addEventListener('keydown', (e) => {
        const { key } = e;
        if (key === 'Enter') {
          if (checkForNumber(arrayOfInputCount[i].value)) {
            setCountProduct(productsList[i], arrayOfInputCount[i].value);
            productsList[i].priceTotal = countTotal(productsList[i]);
          }
          return true;
        }
        return false;
      });
    }
    for (let i = 0; i < arrayOfInputPriceForOne.length; i += 1) {
      arrayOfInputPriceForOne[i].addEventListener('keydown', (e) => {
        const { key } = e;
        if (key === 'Enter') {
          if (checkForNumber(arrayOfInputPriceForOne[i].value)) {
            setPriceForOneProduct(productsList[i], arrayOfInputPriceForOne[i].value);
            productsList[i].priceTotal = countTotal(productsList[i]);
          }
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
