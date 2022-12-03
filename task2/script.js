const consoleLog = document.querySelector('#consoleLog');
consoleLog.addEventListener('click', () => {
    alert('Выводит сообщение в веб-консоль');
})

const _alert = document.querySelector('#alert');
_alert.addEventListener('click', () => {
    alert('Показывает диалоговое окно с сообщением и кнопкой OK');
})

const prompt = document.querySelector('#prompt');
prompt.addEventListener('click', () => {
    alert('Отображает диалоговое окно с запросом на ввод текста');
})