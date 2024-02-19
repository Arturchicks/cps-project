const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 16,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  }
});

const swiperPagination = document.querySelector('.swiper-pagination'); 
const swiperWrapper = document.querySelector('.swiper-wrapper'); 
const slides = document.querySelectorAll('.swiper-slide'); 
const showHideBtn = document.querySelector('.showHideBtn');
const swiperContainer = document.querySelector('.swiper-container'); 
if (innerWidth < 768) {
  showHideBtn.style.display = 'none'; 
  swiperWrapper.style.marginLeft = '16px'; 
}
if (innerWidth >= 768 && innerWidth < 1120) {
  swiper.destroy(); 
  swiperWrapper.style.flexWrap = 'wrap'; 
  swiperWrapper.style.gap = '16px 2%';
  swiperPagination.style.display = 'none';
for (let i = 0; i < slides.length; i++) {
  if (i > 5) {
    slides[i].classList.add('hidden') 
  }
 }

let areElementsShown = true;
function hideElements() {
  slides.forEach(element => {
   element.classList.remove('hidden');
  });
  areElementsShown = false;
  showHideBtn.textContent = 'Скрыть все';
  showHideBtn.classList.add('showHideBtn1');
}

function showElements() {
  for (let i = 0; i < slides.length; i++) {
    if (i > 5) {
    slides[i].classList.add('hidden'); 
    }
  }; 
  areElementsShown = true;
  showHideBtn.textContent = 'Показать все';
  showHideBtn.classList.remove('showHideBtn1');
}

showHideBtn.addEventListener('click', (e) => {

  areElementsShown ? hideElements() : showElements();

}) 
}; 
if (innerWidth >= 1120) {
  swiper.destroy(); 
  swiperWrapper.style.flexWrap = 'wrap'; 
  swiperWrapper.style.gap = '16px 2%';
  swiperPagination.style.display = 'none';
  for (let i = 0; i < slides.length; i++) {
    if (i > 7) {
      slides[i].classList.add('hidden') 
    }
   }
   let areElementsShown = true;
function hideElements() {
  slides.forEach(element => {
   element.classList.remove('hidden');
  });
  areElementsShown = false;
  showHideBtn.textContent = 'Скрыть все';
  showHideBtn.classList.add('showHideBtn1');
}

function showElements() {
  for (let i = 0; i < slides.length; i++) {
    if (i > 7) {
    slides[i].classList.add('hidden'); 
    }
  }; 
  areElementsShown = true;
  showHideBtn.textContent = 'Показать все';
  showHideBtn.classList.remove('showHideBtn1');
}

showHideBtn.addEventListener('click', (e) => {

  areElementsShown ? hideElements() : showElements();

}) 
}; 