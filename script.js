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
    }, 
});
