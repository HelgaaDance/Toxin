document.addEventListener('DOMContentLoaded', () => {
    /* Получаем элементы dropdown */
    const dropdown = document.querySelector('.date-dropdown'); // Основной контейнер
    const input = dropdown.querySelector('.date-dropdown__input'); // Поле ввода
    const menu = dropdown.querySelector('.date-dropdown__menu'); // Выпадающее меню
    const items = menu.querySelectorAll('.date-dropdown__item'); // Элементы меню
  
    /* Открываем/закрываем меню при клике на поле ввода */
    input.addEventListener('click', () => {
      menu.classList.toggle('active'); // Переключаем класс active, чтобы показать/скрыть меню
    });
  
    /* Закрываем меню при клике вне dropdown */
    document.addEventListener('click', (event) => {
      if (!dropdown.contains(event.target)) {
        menu.classList.remove('active'); // Скрываем меню
      }
    });
  
    /* Устанавливаем выбранное значение в поле ввода */
    items.forEach((item) => {
      item.addEventListener('click', () => {
        input.value = item.textContent; // Меняем текст в поле ввода на выбранный
        menu.classList.remove('active'); // Закрываем меню
      });
    });
  });