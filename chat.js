$(document).ready(function(){

$(function(){
		var i=0;

	$('input').keydown(function(e){

		var x=e.keyCode;
		var value=$('input').val();

		if(x===13){
			$('input').val('');
			if(i==0){
			setTimeout(function(){
			$('.message-area').append('<div class="user-message"><p>'+value+'</p></div>')
		},400)
			setTimeout(function(){
			$('.message-area').append('<div class="message"><p>Okay,'+value+', and?</p></div>')
		},900)
			}
			else if(i==1){
				setTimeout(function(){
			$('.message-area').append('<div class="user-message"><p>'+value+'</p></div>')
		},400)
			setTimeout(function(){
			$('.message-area').append('<div class="message"><p>Would you like to speak to a councellor?</p></div>')
		},900)
			}
			else if(i==2){
				setTimeout(function(){
			$('.message-area').append('<div class="user-message"><p>'+value+'</p></div>')
		},400)
			setTimeout(function(){
				if (value == 'yes') {
					$('.message-area').append('<div class="message"><p>You said yes</p></div>')
				}else if (value == 'no') {
					$('.message-area').append('<div class="message"><p>You said no</p></div>')
				}
		},900)
		}

			else if(i==3){
				setTimeout(function(){
			$('.message-area').append('<div class="user-message">'+value+'</div>')
				}, 300)
				setTimeout(function(){
					if(value=='yes' || value=='Yes' || value=='YES'){
						$('.message-area').append('<div class="message"></div>')
						$('.message-area').append('<div class="message"></div>')
							page();
					}
					else if(value=='no' || value=='No' || value=='NO'){
						$('.message-area').append('<div class="message"></div>')
						$('.message-area').append('<div class="message"></div>')
					}
					else{
						$('.message-area').append('<div class="message"></div>')
						i=2;
					}
				},1000)
			}
		++i;
		}

	})
})

})
