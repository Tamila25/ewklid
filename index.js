window.addEventListener('DOMContentLoaded', function(){
  document.querySelector('#burger').addEventListener('click', function(){
    document.querySelector('#menu').classList.toggle('active')
  })
  document.querySelector('#close').addEventListener('click', function(){
    document.querySelector('#menu').classList.toggle('active')
  })
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
})