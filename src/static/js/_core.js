/* eslint-disable eqeqeq */

$('.js-open-modal').click((e) => {
  e.preventDefault();
  $('.modal').hide();
  const modal = e.target.getAttribute('href') != null ? e.target.getAttribute('href') : e.target.parentElement.getAttribute('href');
  $(`[data-type="${modal}"]`).fadeIn();
});

$(window).click((e) => {
  if (e.target.classList.contains('modal') && e.target.style.display == 'block') {
    $('.modal').fadeOut();
  }
});

$('.modal__close').click((e) => {
  $('.modal').fadeOut();
});

$('select').select2({
  minimumResultsForSearch: Infinity,
  width: 'style',
  selectOnClose: true,
});

$('.select-mobible').on('select2:select', (e) => {
  const sl = e.params.data.text;
  let box;
  $('.contacts-tab__title').each((index, item) => {
    if (item.textContent.trim() == sl) {
      box = $(item).parent();
    }
    return box;
  });
  $(`[data-contacts-box="${box.data('contacts-nav')}"]`).addClass('active').siblings().removeClass('active');
  box.addClass('active').siblings().removeClass('active');
});
$('[data-calc="tree"] select').on('select2:select', (e) => {
  const { data } = e.params;
  $('[data-calc="tree"] [data-select]').attr('style', '');
  $(`[data-calc="tree"] [data-select=${data.id}]`).fadeIn();
});

$('[data-calc="four"] select').on('select2:select', (e) => {
  const { data } = e.params;
  $('[data-calc="four"] [data-select]').attr('style', '');
  $(`[data-calc="four"] [data-select=${data.id}]`).fadeIn();
  if (data.id > 3) {
    $('.field.hidden').fadeIn().attr('value', '');
    $('.field.hidden input').attr('value', '');
  } else {
    $('.field.hidden').hide();
  }
});
$('.field__input').focus(function () {
  $(this).prev().css({ top: '-10px', 'font-size': '10px' });
});

$('.field__input').blur(function () {
  if ($(this).val() == '' || $(this).val() == '+7(___) ___-__-__') {
    $(this).prev().attr('style', '');
  }
});

$('input[type="tel"]').mask('+7(999) 999-99-99', { autoclear: false });

$('body').mousemove((e) => {
  if (window.innerWidth > 1280) {
    $('.overlay').css('transform', `translate(${e.clientY / 150}px, ${e.clientX / 150}px)`);
    $('.shadow').css('background', `radial-gradient(50% 50% at 50% 50%, rgba(230, 43, 34, ${e.clientY / 1000}) 0%, rgba(230, 43, 34, 0) 100%)`);
  }
});
