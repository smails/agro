$('.banner').mousemove(function (e) {
  $('.banner__bg-move').css('transform', `translate(${e.pageX / 250}px, ${e.pageY / 250}px)`)
  $('.banner__tools').css('transform', `translate(${e.pageX / 100}px, ${e.pageY / 100}px)`)
})