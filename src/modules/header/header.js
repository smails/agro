window.addEventListener('scroll', () => {
  const head = document.querySelector('.header__top');
  if(window.pageYOffset > 200){
    head.classList.add('fix');
  } else{
    head.classList.remove('fix');
  }
})