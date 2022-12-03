let inputText = document.querySelector('[type="text"]');
let paragraphForText = document.querySelector('#duplicateField');
let button = document.querySelector('[type="submit"]');

inputText.addEventListener('keyup', function () {
    paragraphForText.textContent = inputText.value;
});

button.addEventListener('click', function (evt) {
    evt.preventDefault();
    console.log(inputText.value);
    inputText.value = '';
    paragraphForText.textContent = '';
});