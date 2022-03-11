$('.buy__start').click(function(){
  if(!$(this).hasClass('disabled')){
    $('.order').removeClass('hidden');
    $(this).addClass('disabled');
    $('.order__next').removeClass('disabled');
    $('html, body').animate({
      scrollTop: $('.order').offset().top - 100
    }, 500)
    }
});
$('.order__next').click(function(){
  $('.order__submit').removeAttr('disabled');
  if(window.innerWidth < 575){
    $('html, body').animate({
      scrollTop: $('.order__col:last').offset().top - 100
    }, 500)
  }
});

$('.buy__check-hidden').change(function () {
  if($(this).prop('checked')){
    $('.buy-item__check-hidden').attr('checked', 'checked');
  } else{
    $('.buy-item__check-hidden').removeAttr('checked');
  }
});

$('.buy__remove').click(() => {
  $('.buy-item').each((inedx, item) => {
    if($(item).find('.buy-item__check-hidden').prop('checked')){
      $(item).find('.remove-item').trigger('click');
    }
  })
})