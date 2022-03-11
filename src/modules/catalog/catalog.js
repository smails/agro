$('.catalog-list__open-filter').click(function () {
  if(!$(this).hasClass('open')){
    $(this).addClass('open');
    $('.filter').width(300);
  } else{
    $(this).removeClass('open');
    $('.filter').width(0)
  }
});

$('.filter__head').click(function () {
  if(!$(this).hasClass('open')){
    $(this).addClass('open');
    $(this).next().slideDown(300);
    setTimeout(() => {
      $(this).next().removeClass('hidden');
    }, 300);
  } else{
    $(this).removeClass('open');
    $(this).next().slideUp(300);
    setTimeout(() => {
      $(this).next().addClass('hidden');
    }, 300);
  }
});