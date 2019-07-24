$(document).ready(function(){
  setInterval(function(){
    $('.landtext, .line').addClass('active')
  }, 600)
  setInterval(function(){
    // $('video').play()
  }, 0)
  $('.bars').click(function () {
    $('.bar1').toggleClass('bar1_ac')
    $('.bar2').toggleClass('bar2_ac')
    $('.bar3').toggleClass('bar3_ac')
    $('.profile').toggleClass('menu_ac')
  })
})
