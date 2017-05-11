(function($) {
	"use strict";
	
		/*====================================
		 Bootstrap Fix For WinPhone 8 And IE10
		======================================*/
		
		if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
			var msViewportStyle = document.createElement("style");
			msViewportStyle.appendChild(
				document.createTextNode(
					"@-ms-viewport{width:auto!important}"
				)
			);
			document.getElementsByTagName("head")[0].
				appendChild(msViewportStyle);
		}	
		
		
		/*====================================
					Android stock browser
		======================================*/
		
		$(function () {
		  var nua = navigator.userAgent
		  var isAndroid = (nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1)
		  if (isAndroid) {
			$('select.form-control').removeClass('form-control').css('width', '100%')
		  }
		})	



		/*====================================
					Preloader
		======================================*/

		$(window).load(function() {
		
			var preloaderDelay = 350,
				preloaderFadeOutTime = 800;
	
			function hidePreloader() {
				var loadingAnimation = $('#loading-animation'),
					preloader = $('#preloader');
	
				loadingAnimation.fadeOut();
				preloader.delay(preloaderDelay).fadeOut(preloaderFadeOutTime);
			}
	
			hidePreloader();
	
		});
		
		
		
		/*====================================
					Background
		======================================*/
		
		//Image Background 
		$(".image-background").backstretch("images/image-bg.jpg");

		
		/*====================================
					Clock Countdown
		======================================*/

		$('#clock-countdown').countdown('2017/07/07 10:00:00').on('update.countdown', function(event) {
			var $this = $(this).html(event.strftime(''
				+ '<div class="counter-container"><div class="counter-box first"><div class="number">%-D</div><span>Dagen</span></div>'
				+ '<div class="counter-box"><div class="number">%H</div><span>Uren</span></div>'
				+ '<div class="counter-box"><div class="number">%M</div><span>Minuten</span></div>'
				+ '<div class="counter-box last"><div class="number">%S</div><span>Seconden</span></div></div>'
			));
		});
		
		

		/*====================================
					Nice Scroll
		======================================*/
			
		$("html").niceScroll({
			cursorcolor: '#ccc',
			cursoropacitymin: '0',
			cursoropacitymax: '1',
			cursorwidth: '3px',
			zindex: 10000,
			horizrailenabled: false,
		});

				
			
		/*====================================
					Animated.css
		======================================*/

		$('.animated').appear(function() {
			var element = $(this),
				animation = element.data('animation'),
				animationDelay = element.data('animation-delay');
				if ( animationDelay ) {
	
					setTimeout(function(){
						element.addClass( animation + " visible");
					}, animationDelay);
	
				} else {
					element.addClass( animation + " visible");
				}
		});


})(jQuery);