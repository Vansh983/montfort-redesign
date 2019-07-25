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
    $('body').toggleClass('overflow')
  })
  $('.item').click(function(){
    $('.bar1').toggleClass('bar1_ac')
    $('.bar2').toggleClass('bar2_ac')
    $('.bar3').toggleClass('bar3_ac')
    $('.profile').toggleClass('menu_ac')
    $('body').toggleClass('overflow')
  })
  $('.it1').click(function(){
			$('body, html').animate({scrollTop:$('.land').offset().top-50}, 1000)
	})
  $('.it2').click(function(){
			$('body, html').animate({scrollTop:$('.about').offset().top-50}, 1000)
	})
  $('.it3').click(function(){
			$('body, html').animate({scrollTop:$('.mission').offset().top-50}, 1000)
	})
  $('.it4').click(function(){
			$('body, html').animate({scrollTop:$('.abp').offset().top-50}, 1000)
	})
  $('.it5').click(function(){
			$('body, html').animate({scrollTop:$('.members').offset().top-50}, 1000)
	})
  $('.it6').click(function(){
			$('body, html').animate({scrollTop:$('.news').offset().top-50}, 1000)
	})
  $('.it7').click(function(){
			$('body, html').animate({scrollTop:$('.contact').offset().top-50}, 1000)
	})
  $('.dot1').hover(function(){
    $('.p1').toggleClass('dothover')
  })
  $('.dot2').hover(function(){
    $('.p2').toggleClass('dothover')
  })
  $('.dot3').hover(function(){
    $('.p3').toggleClass('dothover')
  })
  $('.dot4').hover(function(){
    $('.p4').toggleClass('dothover')
  })
  $('.dot5').hover(function(){
    $('.p5').toggleClass('dothover')
  })
  $('.dot6').hover(function(){
    $('.p6').toggleClass('dothover')
  })
  $('button').click(function(){
    $('.card').toggleClass('shadow')

	})
})
