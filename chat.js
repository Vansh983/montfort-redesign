$(document).ready(function(){

$(function(){
		var i=0;

	$('input').keydown(function(e){
		$('.message-area').animate({scrollTop:$('input').offset().top+1000}, 1000)
		var x=e.keyCode;
		var value=$('input').val();

		if(x===13){
			$('input').val('');
			if(i==0){
			setTimeout(function(){
			$('.message-area').append('<div class="user-message"><p>'+value+'</p></div>')
		},400)
			setTimeout(function(){
			if (value == 'yes') {
				$('.message-area').append('<div class="message">What is your name?</div>')
			}else if (value == 'no') {
				$('.message-area').append('<div class="message">No problem, just give me any random name, fake or real.</div>')
			}else{
				$('.message-area').append('<div class="message">Answer in yes or no please.</div>')
				i=0;
			}
		},900)
			}
			else if(i==1){
				setTimeout(function(){
			$('.message-area').append('<div class="user-message"><p>'+value+'</p></div>')
		},400)
			setTimeout(function(){
			$('.message-area').append('<div class="message">Okay '+value+', Would you like to speak to a teacher or a councellor?</div>')
		},900)
			}
			else if(i==2){
				setTimeout(function(){
			$('.message-area').append('<div class="user-message"><p>'+value+'</p></div>')
		},400)
			setTimeout(function(){
				if (value == 'yes') {
					$('.message-area').append('<div class="message">I will try to connect you</div>')
				}else if (value == 'no') {
					$('.message-area').append('<div class="message">No? Ok it is your call. You can just speak anything here. It will never be disclosed to anyone I promise. So, Where did the problem begin?</div>')
				}else{
					$('.message-area').append('<div class="message">Answer in yes or no please.</div>')
					i=2;
				}
		},900)
		}

			else if(i==3){
				setTimeout(function(){
			$('.message-area').append('<div class="user-message"><p>'+value+'</p></div>')
				}, 300)
				setTimeout(function(){
					if (value=='thats all') {
						$('.message-area').append('<div class="message">All right! I hope you felt good sharing this with me. And again, this will always stay between you and me ;)</div>');

					}else{
						$('.message-area').append('<div class="message">Okay...</div>');
						i=3;
					}
				},1000)
			}
		++i;
		}

	})
})

})
