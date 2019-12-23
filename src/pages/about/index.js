import './index.css';
import '../../vendor/images';
import '../../../node_modules/swiper/css/swiper.min.css';
import Swiper from 'swiper';

// eslint-disable-next-line no-unused-vars
const swiper = new Swiper('.swiper-container', {
  updateOnWindowResize: true,
  slidesPerView: 3,
  spaceBetween: 10,
  slidesPerGroup: 3,
  loop: false,
  loopFillGroupWithBlank: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    200: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 10,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 10,
      slidesPerGroup: 2,
    },
    1023: {
      slidesPerView: 3,
      spaceBetween: 10,
      slidesPerGroup: 3,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next_mine',
    prevEl: '.swiper-button-prev_mine',
  },
});
