
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

// new fullpage('#fullpage', {
// 	//options here
// 	// autoScrolling:false,
//   css3: true,
// 	// scrollHorizontally: true
//   responsiveWidth: 769,
//   scrollBar: true
// });

$(function() {
  $.scrollify({
    section : ".section",
    // sectionName : "section-name",
    // interstitialSection : "",
    easing: "easeOutExpo",
    scrollSpeed: 1100,
    offset : 0,
    scrollbars: true,
    setHeights: false,
    overflowScroll: true,
    updateHash: true,
    touchScroll: false,
  
    afterResize: function() {
      if( $(window).width() < 769) {
        $.scrollify.disable()
      }else{
        $.scrollify.enable()
      }
    }
    // before:function() {},
    // after:function() {},
    // afterResize:function() {},
    // afterRender:function() {}
  });
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
});


// меню
$('.header__burger-btn').on('click', function (e) {
  e.preventDefault();
  document.body.classList.toggle('lock');
  $('.header__burger-btn').toggleClass("active");
  $('.header__nav').toggleClass("active");
});


// воспроизведение видео в секции about на главной странице

let videoAbout = document.querySelector('.about__video');
let videoBtn = document.querySelector('.about__video-btn');
let header = document.querySelector('.header');

videoBtn.addEventListener('click', function() {
  videoPlay();
});
  
videoAbout.addEventListener('click', function() {
  videoPlay();
});

function videoPlay() {
  videoAbout.classList.toggle('active');

  if (videoAbout.classList.contains('active')) {
    videoAbout.play();
    videoBtn.style = 'display: none';
    header.classList.add('hide');
  } 
  else {
    videoAbout.pause();
    videoBtn.style = 'display: block';
    header.classList.remove('hide');
  }
}

function videoStopinScroll() {
  videoAbout.pause();
  videoAbout.classList.remove('active');
  videoBtn.style = 'display: block';
  header.classList.remove('hide');
}

const observer = new IntersectionObserver(videoStopinScroll, {
  rootMargin: '0px',
  threshold: 1
});

observer.observe(videoAbout);



const projectsSwiper = new Swiper('.products__slider', {
  slidesPerView: 1,
  spaceBetween: 45,
  loop: true,
  speed: 800,

  effect: "fade",

  navigation: {
      prevEl: '.products__slider-arrow-prev',
      nextEl: '.products__slider-arrow-next',
  },
});

const priceSwiper = new Swiper('.products__price', {
  slidesPerView: 'auto',
  // spaceBetween: 15,
  loop: true,
  speed: 800,
  direction: "vertical",

  // effect: "fade",

  navigation: {
      prevEl: '.products__price-prev',
      nextEl: '.products__price-next',
  },
});

const vidGalleryThumbs = new Swiper(".videogallery__thumbs-slider", {
  spaceBetween: 10,
  slidesPerView: 5,
  // loop: true,
  freeMode: true,
  watchSlidesProgress: true,
});

const vidGallery = new Swiper(".videogallery__slider", {
  // slidesPerView: 1,
  spaceBetween: 10,
  // loop: true,
  navigation: {
    nextEl: ".videogallery__arrow-next",
    prevEl: ".videogallery__arrow-prev",
  },
  thumbs: {
    swiper: vidGalleryThumbs,
  },
});

const gallerySwiper = new Swiper('.gallery__slider', {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  speed: 800,

  navigation: {
      prevEl: '.gallery__arrow-prev',
      nextEl: '.gallery__arrow-next',
  },
});


// $(document).ready(function(){
// 	$('.news__item-btn').click(function(){
// 		$('.news__item-text').toggleClass('hide');	
// 		if ($('.news__item-text').hasClass('hide')) {
// 			$('.news__item-btn').html('Подробнее');
// 		} else {
// 			$('.news__item-btn').html('Скрыть');
// 		}		
// 		return false;
// 	});				
// });

$(document).ready(function () {
  $('.news__item-btn').click(function (event) {
    $(this).toggleClass('active').prev().toggleClass('show');
  });
});

const swiperPrev = document.getElementsByClassName('gallery__arrow-prev');
const swiperNext = document.getElementsByClassName('gallery__arrow-next');

swiperPrev.addEventListener('click', () => {
  gallerySwiper.slidePrev();
})
swiperNext.addEventListener('click', () => {
  gallerySwiper.slideNext();
});

const swiperPrevVidGallery = document.getElementsByClassName('videogallery__arrow-prev');
const swiperNextVidGallery = document.getElementsByClassName('videogallery__arrow-next');

swiperPrevVidGallery.addEventListener('click', () => {
  vidGallery.slidePrev();
})
swiperNextVidGallery.addEventListener('click', () => {
  vidGallery.slideNext();
});




Fancybox.show(gallery, {
  // Your options go here
});

Fancybox.show(vidgallery, {
  // Your options go here
});




