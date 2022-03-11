const reviews = new Swiper('.reviews__slider', {
  speed: 400,
  loop: true,
  navigation: {
    nextEl: '.reviews__btn-control_next',
    prevEl: '.reviews__btn-control_prev',
  },
});

const personal = new Swiper('.personal__slider', {
  speed: 400,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 3,
  breakpoints: {
    575: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    1023: {
      slidesPerView: 2
    }
  }
});


$('.personal__btn-control_next').click(() =>{
  personal.slideNext();
})
$('.personal__btn-control_prev').click(() =>{
  personal.slidePrev();
})

const sertif = new Swiper('.sertif__slider', {
  speed: 400,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 4,
  breakpoints: {
    575: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    1023: {
      slidesPerView: 2
    },
    1200: {
      slidesPerView: 3
    }
  }
});


$('.sertif__btn-control_next').click(() =>{
  sertif.slideNext();
})
$('.sertif__btn-control_prev').click(() =>{
  sertif.slidePrev();
})