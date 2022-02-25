// window.addEventListener('scroll', () => {
//   const footer = document.querySelector('.footer');
//   const footerOver = document.querySelector('.footer__inner');
//   if(window.pageYOffset + window.innerHeight > footer.offsetTop){
//     const diff = (document.body.scrollHeight - window.pageYOffset - window.innerHeight) / 100;
//     if(diff < 0){
//       footerOver.style.cssText = `transform: scale(1); opacity: 1`
//     } else{
//       footerOver.style.cssText = `transform: scale(${diff / 10}); opacity: ${diff}`
//     }
//   } else{
//    footerOver.style.cssText = `transform: scale(0); opacity: 0`
//   }
// })