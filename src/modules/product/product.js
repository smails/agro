const similar = new Swiper('.similar__slider', {
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


$('.similar__btn-control_next').click(() =>{
  similar.slideNext();
})
$('.similar__btn-control_prev').click(() =>{
  similar.slidePrev();
})

$('.product-page__tab-btn').click(function() {
  $(this).addClass('active').siblings().removeClass('active');
  $('.product-page__tab-content').removeClass('active');
  $('.product-page__tab-content').eq($(this).index()).addClass('active');
})

$('.counter__btn_plus').click(function(){
  let cont = $(this).prev().val();
  $(this).prev().val(+cont + 1);
  $(this).prev().trigger('change');
});

$('.counter__btn_minus').click(function(){
  let cont = $(this).next().val();
  if(cont > 1){
    $(this).next().val(+cont - 1);
  }
  $(this).next().trigger('change');
});