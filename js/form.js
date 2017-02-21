'use strict';

var dialog = document.querySelector('.dialog'); // выбираем элемент dialog карточки обьявления
var close = document.querySelector('.dialog__close'); // выбираем крестик закрывающий карточку обьявления
var pinMap = document.querySelector('.tokyo__pin-map');

var ENTER_KEY_CODE = 13;
var ESCAPE_KEY_CODE = 27;

// Валидация поля - название объявления
var YourForm = document.querySelector('.form__content');
var inputFormName = YourForm.querySelector('#title');

// Валидация поля - Адрес
var inputFormAddress = YourForm.querySelector('#address');

// Валидация поля - цена за ночь
var inputFormPrice = YourForm.querySelector('#price');

// Автоматическая корректировка полей в форме
var inHouse = YourForm.querySelector('#time'); // Выбор поля - Время заезда
var fromHouse = YourForm.querySelector('#timeout'); // Выбор поля - Время выезда
var houseType = YourForm.querySelector('#type'); // Выбор поля - Тип жилья
var roomNumber = YourForm.querySelector('#room_number'); // Выбор поля - Кол-во комнат
var guestsNumber = YourForm.querySelector('#capacity'); // Выбор поля - Количество мест

var hideDialog = function () {
  dialog.style.display = 'none';
};

var deactivatePin = function () {
  var prevPin = document.querySelector('.pin--active');
  if (prevPin) {
    prevPin.classList.remove('pin--active');
    hideDialog();
  }
};

var activatePin = function (element) {
  deactivatePin();
  element.classList.add('pin--active');
  dialog.style.display = 'block';
};

pinMap.addEventListener('click', function (e) {
  var element = e.target.tagName === 'DIV' ? e.target : e.target.parentNode;

  if (element.classList.contains('pin')) {
    activatePin(element);
  }
});

pinMap.addEventListener('keydown', function (e) {
  var element = e.target.tagName === 'DIV' ? e.target : e.target.parentNode;

  if (element.classList.contains('pin') && e.keyCode === ENTER_KEY_CODE) {
    activatePin(element);
  }
});

close.addEventListener('click', function () {
  deactivatePin();
});

pinMap.addEventListener('keydown', function (e) {
  var element = e.target.tagName === 'DIV' ? e.target : e.target.parentNode;

  if (element.classList.contains('pin') && e.keyCode === ESCAPE_KEY_CODE) {
    deactivatePin();
  }
});

inputFormName.required = true; // Обязательное поле!
inputFormName.minLength = 30; // Минимальная длина — 30 символов
inputFormName.maxLength = 100; // Макcимальная длина — 100 символов

inputFormPrice.required = true; // Обязательное поле!
inputFormPrice.min = 1000; // Минимальное числовое значение — 1000
inputFormPrice.max = 1000000; // Максимальное числовое значение — 1000000

inputFormAddress.required = true; // Обязательное поле!

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
