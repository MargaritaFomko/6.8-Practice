let link = document.querySelector('#link')

link.addEventListener('click', 
  (event) => {
    event.preventDefault();
    let newTextLink = prompt('Введите желаемый текст');
    link.textContent = newTextLink;
})