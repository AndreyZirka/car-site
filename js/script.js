const iconMenu = document.querySelector('.header__burger');
if (iconMenu) {
   const menuBody = document.querySelector('.menu');
   const fromIcon = document.querySelector('.header__container');
   const iconFrom = document.querySelector('.header__logo');
   const wrapperBody = document.querySelector('body');
   iconMenu.addEventListener("click", function (e) {
      iconMenu.classList.toggle("_active");
      menuBody.classList.toggle("_active");
      fromIcon.classList.toggle("_active");
      iconFrom.classList.toggle("_active");
      wrapperBody.classList.toggle("_lock");
   });
}
$(document).ready(function () {
   $('.from-slider').slick({
      // стрелки по умолчанию true
      arrows: false,
      // точки по умолчанию false
      dots: true,
      // автоматическая адаптивная высота слайда
      adaptiveHeight: true,
      // скорость пролистывание по умолчанию 300 милисекунд
      speed: 1000,
      // автоматическое проигрование слайда по умолчанию выключено
      autoplay: true,
      // скорость проигрование слайдов по умолчанию 3000
      autoplaySpeed: 2000,

   });
   $('.winners__body').slick({
      slidesToShow: 3.99,
      arrows: false,
      adaptiveHeight: true,
      autoplay: true,
      responsive: [{
         breakpoint: 992,
         settings: {
            slidesToShow: 3
         }
      }, {
         breakpoint: 768,
         settings: {
            slidesToShow: 1.99
         }
      }, {
         breakpoint: 580,
         settings: {
            slidesToShow: 1.5
         }
      }, {
         breakpoint: 430,
         settings: {
            slidesToShow: 1.1,
            slidesToScroll: 1,
            
         }
      }
      ]

   });

   $('.competitions__body').slick({
      slidesToShow: 3.99,
      arrows: false,
      adaptiveHeight: true,
      autoplay: true,
      responsive: [{
         breakpoint: 992,
         settings: {
            slidesToShow: 3
         }
      }, {
         breakpoint: 768,
         settings: {
            slidesToShow: 1.99
         }
      }, {
         breakpoint: 580,
         settings: {
            slidesToShow: 1.5
         }
      }, {
         breakpoint: 430,
         settings: {
            slidesToShow: 1.1,
            slidesToScroll: 1
         }
      }
      ]

   });
});
