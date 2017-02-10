'use strict';

var pins = document.querySelectorAll('div.pin'); // выбираем все элементы div с классом pin
var dialog = document.querySelector('.dialog'); // выбираем элемент dialog карточки обьявления
var close = document.querySelector('.dialog__close'); // выбираем крестик закрывающий карточку обьявления

[].forEach.call(pins, function (pin) {
  pin.addEventListener('click', function () {

// добавляем свойству visibility значение visible , чтобы окно карточки обьявления  стало видимым при клике на текущий pin
    dialog.style.visibility = 'visible';

// если  у текущего пина нет класса pin--active то добавляем его ему по клику на пине
    if (!pin.classList.contains('pin--active')) {
      pin.classList.add('pin--active');
    } else {
      dialog.style.visibility = 'hidden';
      pin.classList.remove('pin--active');
    }
  });

  // добавляем событие  по клику на крестике карточки обьявления, меняем свойство visibility карточки диалога на hidden  по клику на крестике
  close.addEventListener('click', function () {
    dialog.style.visibility = 'hidden';
// заодно удаляем класс  pin--active у текущего пина при нажатии на крестик на карточке
    pin.classList.remove('pin--active');
  });
});

 // Валидация поля - название объявления
var YourForm = document.querySelector('.form__content');
var inputFormName = YourForm.querySelector('#title');

inputFormName.required = true; // Обязательное поле!
inputFormName.minLength = 30; // Минимальная длина — 30 символов
inputFormName.maxLength = 100; // Макcимальная длина — 100 символов

// Валидация поля - цена за ночь
var inputFormPrice = YourForm.querySelector('#price');

inputFormPrice.required = true; // Обязательное поле!
inputFormPrice.min = 1000; // Минимальное числовое значение — 1000
inputFormPrice.max = 1000000; // Максимальное числовое значение — 1000000

// Валидация поля - Адрес
var inputFormAddress = YourForm.querySelector('#address');

inputFormAddress.required = true; // Обязательное поле!

// Автоматическая корректировка полей в форме
var inHouse = YourForm.querySelector('#time'); // Выбор поля - Время заезда
var fromHouse = YourForm.querySelector('#timeout'); // Выбор поля - Время выезда
var houseType = YourForm.querySelector('#type'); // Выбор поля - Тип жилья
var roomNumber = YourForm.querySelector('#room_number'); // Выбор поля - Кол-во комнат
var guestsNumber = YourForm.querySelector('#capacity'); // Выбор поля - Количество мест

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
