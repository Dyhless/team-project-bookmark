
import Swiper, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.css';
import fondsInfo from './fonds-info.js';

Swiper.use([Navigation]);

document.addEventListener('DOMContentLoaded', generateSlides);


function generateSlides() {

  const isMobile = window.innerWidth < 768;
  const slidesPerView = isMobile ? 4 : 6;

  let allSlides;

  if (fondsInfo.length > slidesPerView * 2) {
    allSlides = fondsInfo;
  } else {
    allSlides = [...fondsInfo, ...fondsInfo];
  }

  let swiper;

  function updateSlider() {
    if (swiper) {
      swiper.update();
    }
  }

  function handleResize() {
    updateSlider();
  }

  const swiperOptions = {
    direction: 'vertical',
    loop: true,
    slidesPerView: slidesPerView,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };

  swiper = new Swiper('.swiper-container', swiperOptions);

  allSlides.forEach((slide, index) => {

    const originalIndex = index % fondsInfo.length;

    const slideHTML = `
      <div class="swiper-slide">
        <div class="slide__content">
          <div class="slide__number">${(originalIndex + 1)
            .toString()
            .padStart(2, '0')}</div>
          <a href="${slide.url}" class="slider__link" target="_blank">
            <img
            src="${slide.img}"
            alt="${slide.title}"
            class="slider__png">
          </a>
        </div>
      </div>
    `;
    document
      .querySelector('.swiper-wrapper')
      .insertAdjacentHTML('beforeend', slideHTML);
  });

  updateSlider();

  window.addEventListener('resize', handleResize);
}

