
			$(function(){
				$('ul').hover(function() {
					$(this).toggleClass('current');
					if($(this).hasClass('current')){
						$('audio')[0].pause()
					}else{
						$('audio')[0].play()
					}
					
				});


			})
	