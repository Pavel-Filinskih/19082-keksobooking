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
    }

 // если класс pin--active  был, то удаляем по клику
    else {
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
