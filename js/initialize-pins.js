'use strict';

/*
Функция должна содержать всю логику по отрисовке меток на карте:
добавление обработчиков,
показ и закрытие карточки,
отметку метки как активной.
*/

window.initializePins = function () {
  var dialog = document.querySelector('.dialog'); // выбираем элемент dialog карточки обьявления
  var close = document.querySelector('.dialog__close'); // выбираем крестик закрывающий карточку обьявления
  var pinMap = document.querySelector('.tokyo__pin-map');

  var ENTER_KEY_CODE = 13;
  var ESCAPE_KEY_CODE = 27;

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
};
