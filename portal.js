$(document).ready(function(){
  $(window).load(function(){
    console.log('b');
      setInterval(function(){
        $('.logo').addClass('logo-ac');
      },500)
    setInterval(function(){
      $('.logo').addClass('shift-l');
      $('.form').addClass('logo-ac');
      $('.form').addClass('shift');
      $('.line-v').addClass('line-a')
    },1500)


  })
  // $('.sel-pc, .new-pc').hover(function(){
  //   $('.sel-pc').toggleClass('op0');
  //   $('.new-pc').toggleClass('op1');
  //
  // })
  // $('.sel-phone, .new-phone').hover(function(){
  //   $('.sel-phone').toggleClass('op0');
  //   $('.new-phone').toggleClass('op1');
  //
  // })
  $('.sel-user , .st3').click(function(){
       $('body, html').animate({scrollTop:$('.interface').offset().top},"2000");
});
$('.back').click(function(){
     $('body, html').animate({scrollTop:$('.loading').offset().top},"2000");
});


$('.submit_b').click(function(){
$('.select').addClass('logo-ac');
$('.login').addClass('tab-ac');
$('.logo').addClass('tab-ac');
$('.bars').addClass('opa');
$('.line-v').addClass('nopa');

        setInterval(function(){
        }, 500);
        setInterval(function(){
          $('.logo, .line-v, .login').addClass('nod');

        }, 1000)

})


$('.sett').click(function(){
  $('.slideshow1').toggleClass('tab2-ac');
  $('.arrow2').toggleClass('tab2-ac');
  $('.back2').toggleClass('tab2-ac');
  $('.settings').toggleClass('set-ac');

})

$('.it2').click(function(){
  $('.movie').removeClass('tab-ac');
  $('.browse').addClass('tab-ac');
  $('.apps').addClass('tab-ac');
  $('.games').addClass('tab-ac');
  $('.tv').addClass('tab-ac');
  $('.it1').removeClass('scale');
  $('.it2').addClass('scale');
  $('.it3').removeClass('scale');
  $('.it4').removeClass('scale');
  $('.it5').removeClass('scale');
  // $(this).addClass('scale');
})
$('.it3').click(function(){
  $('.movie').addClass('tab-ac');
  $('.browse').addClass('tab-ac');
  $('.apps').addClass('tab-ac');
  $('.games').addClass('tab-ac');
  $('.tv').removeClass('tab-ac');
  $('.it1').removeClass('scale');
  $('.it2').removeClass('scale');
  $('.it3').addClass('scale');
  $('.it4').removeClass('scale');
  $('.it5').removeClass('scale');
  // $(this).addClass('scale');
})
$('.it4').click(function(){
  $('.movie').addClass('tab-ac');
  $('.browse').addClass('tab-ac');
  $('.apps').removeClass('tab-ac');
  $('.games').addClass('tab-ac');
  $('.tv').addClass('tab-ac');
  $('.it1').removeClass('scale');
  $('.it2').removeClass('scale');
  $('.it3').removeClass('scale');
  $('.it4').addClass('scale');
  $('.it5').removeClass('scale');
  //  $(this).addClass('scale');
})
$('.it1').click(function(){
  $('.movie').addClass('tab-ac');
  $('.browse').removeClass('tab-ac');
  $('.apps').addClass('tab-ac');
  $('.games').addClass('tab-ac');
  $('.tv').addClass('tab-ac');
  $('.it1').addClass('scale');
  $('.it2').removeClass('scale');
  $('.it3').removeClass('scale');
  $('.it4').removeClass('scale');
  $('.it5').removeClass('scale');
  // $(this).addClass('scale');
})
$('.it5').click(function(){
  $('.movie').addClass('tab-ac');
  $('.browse').addClass('tab-ac');
  $('.apps').addClass('tab-ac');
  $('.games').removeClass('tab-ac');
  $('.tv').addClass('tab-ac');
  $('.it1').removeClass('scale');
  $('.it2').removeClass('scale');
  $('.it3').removeClass('scale');
  $('.it4').removeClass('scale');
  $('.it5').addClass('scale');
  // $(this).addClass('scale');
})
$('.it6').click(function(){
  $('.search').addClass('search-ac')
  $('.it6').addClass('searchall')
})
$('.glyphicon-search').click(function(){
  $('.search').toggleClass('search-ac')
  $('.it6').toggleClass('searchall')
})
$('.it6').hover(function(){
  $('.search').toggleClass('search-hover')
})
$('.sel-pc, .st2').click(function(){
  $('.second').addClass('note-a')
  $('.select').addClass('tab-ac')
  // setInterval(function(){
  //   $('.select').addClass('nod');
  //
  // }, 2000)
})
$('.c2').click(function(){
  $('.second').removeClass('note-a')
  $('.select').removeClass('tab-ac')

})
$('.bars, .stuff').click(function(){
  $('.bar1').toggleClass('bar1_ac')
  $('.bar2').toggleClass('bar2_ac')
  $('.bar3').toggleClass('bar3_ac')
  $('.profile').toggleClass('menu_ac')
})
$('.sel-phone, .st4').click(function(){
  $('.live').toggleClass('tab-ac')
  $('.select').toggleClass('tab-ac')
  $('.connecting').toggleClass('tab-ac')
  setInterval(function(){
    $('.connecting').addClass('tab-ac');

  }, 3000)
  setInterval(function(){
    $('.done').removeClass('tab-ac');

  }, 3500)
})
$('.back2').click(function(){
  $('.slideshow1').addClass('tab-ac')
  $('.sett').addClass('tab-ac')
  $('.arrow2').addClass('tab-ac')
  $('.back2').addClass('tab-ac')
  $('.select').removeClass('tab-ac')
})
$('.a2').click(function(){
  $('.slideshow1').addClass('sl-ac')
})
$('.a1').click(function(){
  $('.slideshow1').removeClass('sl-ac')
})
$('.myHTMLvideo').click(function() {
    this.pause() ? this.play() : this.pause();
});

})
