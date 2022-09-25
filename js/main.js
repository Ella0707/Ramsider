
// смена языка (раскрытие списка)
const ru = './../img/flag_ru.png'
const eng = './../img/flag_en.svg'

const imgPlace = document.querySelector('.selected-lang-img')
const langImgs = document.querySelectorAll('ul.bgLang li img')
langImgs.forEach(img => {
        img.addEventListener('click', e => {
            let last = e.target.src
            let next = imgPlace.src
            imgPlace.src = last
            e.target.src = next
    })
});

new fullpage('#fullpage', {
	//options here
	// autoScrolling:true,
	// scrollHorizontally: true
  responsiveWidth: 769,
});

let langLink = document.querySelector('.languages__selected-lang');
let langLinkSelect = document.querySelector('.languages__lang');

langLink.addEventListener("click", function() {
  langLinkSelect.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', () => { // Структура страницы загружена и готова к взаимодействию

  const button = document.querySelector('.open-sub-menu') // находим кнопку для открытия/закрытия окна навигации
  const nav = document.querySelector('.header__sub-menu') // находим окно навигации

  button.addEventListener('click', () => { // при клике на кнопку
   button.classList.toggle('active') // открываем/закрываем окно навигации, добаляя/удаляя активный класс
  })

  window.addEventListener('click', e => { // при клике в любом месте окна браузера
    const target = e.target // находим элемент, на котором был клик
    if (!target.closest('.header__sub-menu') && !target.closest('.open-sub-menu')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
      button.classList.remove('active') // то закрываем окно навигации, удаляя активный класс
    }
  })
})
