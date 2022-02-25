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
});


$('.personal__btn-control_next').click(() =>{
  personal.slideNext();
})
$('.personal__btn-control_prev').click(() =>{
  personal.slidePrev();
})