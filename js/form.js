'use strict';

(function () {
  var YourForm = document.querySelector('.form__content');
  var inputFormName = YourForm.querySelector('#title');
  var inputFormAddress = YourForm.querySelector('#address');
  var inputFormPrice = YourForm.querySelector('#price');
  var inHouse = YourForm.querySelector('#time');
  var fromHouse = YourForm.querySelector('#timeout');
  var houseType = YourForm.querySelector('#type');
  var roomNumber = YourForm.querySelector('#room_number');
  var guestsNumber = YourForm.querySelector('#capacity');

  inputFormName.required = true;
  inputFormName.minLength = 30;
  inputFormName.maxLength = 100;
  inputFormPrice.required = true;

  inputFormPrice.type = 'number';
  inputFormPrice.min = 1000;
  inputFormPrice.max = 1000000;
  inputFormAddress.required = true;

  window.initializePins();

  window.synchronizeFields(inHouse, fromHouse, ['12', '13', '14'], ['12', '13', '14'], 'value');
  window.synchronizeFields(fromHouse, inHouse, ['12', '13', '14'], ['12', '13', '14'], 'value');
  window.synchronizeFields(houseType, inputFormPrice, ['apartment', 'hovel', 'palace'], ['1000', '0', '10000'], 'placeholder');
  window.synchronizeFields(roomNumber, guestsNumber, ['room_1', 'room_2', 'room_100'], ['noguests', '3guests', '3guests'], 'value');
})();
