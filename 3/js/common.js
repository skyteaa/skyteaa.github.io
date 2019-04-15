$(function() {

	if ( $('.js-bpopup-start').length ) {

		setTimeout(function(){
			$('.js-bpopup-start').addClass('active');	
		}, 1000);

	}

	$('.js-show-resolve-button').on('click', function(e){
		e.preventDefault();
		$(this).parents('.spopup').removeClass('active');
		$('.js-resolve-problem').addClass('active');
		countDown();
	});

	$('.js-resolve-problem').on('click', function(e){
		e.preventDefault();
		if ( !$(this).hasClass('disabled') ) {
			$('.js-bpopup-choose').addClass('active');
			$(this).removeClass('active');
			$(this).parents('.bpopup').removeClass('active');
		}
	});

	if ( $('.silver-button-var1').length ) {

		countDown();
		setTimeout(function(){
			$('.js-bpopup-var1-result').addClass('active');	
		}, 5000);

	}

	if ( $('.silver-button-var2').length ) {

		countDown();
		setTimeout(function(){
			$('.js-bpopup-var2-result').addClass('active');	
		}, 1000);

	}

	$('.js-parents-popup').on('click', function(e){
		e.preventDefault();
		$(this).parents('.bpopup').removeClass('active');
		$('.js-bpopup-var3-result').addClass('active');
	})

});

function countDown() {
	setTimeout(function(){
		if ( parseInt($('.js-silver-counter').html()) > 1 ) {
			$('.js-silver-counter').html(parseInt($('.js-silver-counter').html() - 1));
		}
		else {
			$('.js-silver-brackets').html('');
			$('.js-resolve-problem').removeClass('disabled');
		}
		countDown();
	}, 1000);
}