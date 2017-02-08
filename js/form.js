'use strict';

var pins = document.querySelectorAll('div.pin'); // выбираем все элементы div с классом pin
var dial = document.querySelector('.dialog'); // выбираем элемент dialog карточки обьявления
var close = document.querySelector('.dialog__close'); // выбираем крестик закрывающий карточку обьявления

[].forEach.call(pins, function (pin) {
  pin.addEventListener('click', function () {

// добавляем свойству visibility значение visible , чтобы окно карточки обьявления  стало видимым при клике на текущий pin
    dial.style.visibility = 'visible';

// если  у текущего пина нет класса pin--active то добавляем его ему по клику на пине
    if (!pin.classList.contains('pin--active')) {
      pin.classList.add('pin--active');
    }

 // если класс pin--active  был, то удаляем по клику
    else {
      dial.style.visibility = 'hidden';
      pin.classList.remove('pin--active');
    }
  });

  // добавляем событие  по клику на крестике карточки обьявления, меняем свойство visibility карточки диалога на hidden  по клику на крестике
  close.addEventListener('click', function () {
    dial.style.visibility = 'hidden';
// заодно удаляем класс  pin--active у текущего пина при нажатии на крестик на карточке
    pin.classList.remove('pin--active');
  });
});
