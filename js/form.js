'use strict';

var YourForm = document.querySelector('.form__content'); // Контейнер родитель полей формы
var inputFormName = YourForm.querySelector('#title'); // Заголовок объявления

var inputFormAddress = YourForm.querySelector('#address'); // Валидация поля - Адрес
var inputFormPrice = YourForm.querySelector('#price'); // Валидация поля - цена за ночь

var inHouse = YourForm.querySelector('#time'); // Выбор поля - Время заезда
var fromHouse = YourForm.querySelector('#timeout'); // Выбор поля - Время выезда

var houseType = YourForm.querySelector('#type'); // Выбор поля - Тип жилья
var roomNumber = YourForm.querySelector('#room_number'); // Выбор поля - Кол-во комнат
var guestsNumber = YourForm.querySelector('#capacity'); // Выбор поля - Количество мест

inputFormName.required = true; // Обязательное поле!
inputFormName.minLength = 30; // Минимальная длина — 30 символов
inputFormName.maxLength = 100; // Макcимальная длина — 100 символов
inputFormPrice.required = true; // Обязательное поле!

inputFormPrice.min = 1000; // Минимальное числовое значение — 1000
inputFormPrice.max = 1000000; // Максимальное числовое значение — 1000000
inputFormAddress.required = true; // Обязательное поле!

window.initializePins();

window.synchronizeFields(inHouse, fromHouse, ['12', '13', '14'], ['12', '13', '14'], 'value');
window.synchronizeFields(fromHouse, inHouse, ['12', '13', '14'], ['12', '13', '14'], 'value');

window.synchronizeFields(houseType, inputFormPrice, ['1000', '0', '10000'], ['1000', '0', '10000'], 'min');
window.synchronizeFields(roomNumber, guestsNumber, ['1', '2', '100'], ['0', '3', '3'], 'value');

/*
// Въезд = выезд. Тип жилья = количество комнат
function inHouseSelect() {
  fromHouse.value = inHouse.value;
}

inHouse.addEventListener('change', inHouseSelect);

function fromHouseSelect() {
  inHouse.value = fromHouse.value;
}

fromHouse.addEventListener('change', fromHouseSelect);

function houseTypeSelect() {
  switch (houseType.value) {
    case 'apartment':
      inputFormPrice.min = 1000;
      inputFormPrice.placeholder = 1000;
      break;
    case 'hovel':
      inputFormPrice.min = 0;
      inputFormPrice.placeholder = 0;
      break;
    case 'palace':
      inputFormPrice.min = 10000;
      inputFormPrice.placeholder = 10000;
      break;
  }
}

houseType.addEventListener('change', houseTypeSelect);

function roomNumberSelect() {
  switch (roomNumber.value) {
    case '1':
      guestsNumber.value = 'noguests';
      break;
    case '2':
      guestsNumber.value = '3guests';
      break;
    case '100':
      guestsNumber.value = '3guests';
      break;
  }
}

roomNumber.addEventListener('change', roomNumberSelect);
*/
