$(function() {

	// wall logic
	$('.wall .wall__reply').on('click', function(e){
		if ( !$(this).parents('.wall__item').hasClass('banned') ) {
			e.preventDefault();
			const chatId = $(this).data('chat-id');
			$('.chat[data-chat-id='+chatId+']').addClass('active');
		}
	});

	$('.wall .wall__report').on('click', function(e){
		if ( !$(this).parents('.wall__item').hasClass('banned') ) {
			e.preventDefault();
			const spopupId = $(this).data('spopup-id');
			$('.spopup[data-spopup-id='+spopupId+']').addClass('active');
		}
	});

	// messages logic
	$('.messages .wall__reply').on('click', function(e){
		if ( !$(this).parents('.messages__item').hasClass('banned') && !$(this).parents('.messages__item').hasClass('locked') ) {
			e.preventDefault();
			const chatId = $(this).data('chat-id');
			$('.chat[data-chat-id='+chatId+']').addClass('active');
		}
	});

	$('.messages .wall__report').on('click', function(e){
		if ( !$(this).parents('.messages__item').hasClass('banned') && !$(this).parents('.messages__item').hasClass('locked') ) {
			e.preventDefault();
			const spopupId = $(this).data('spopup-id');
			$('.spopup[data-spopup-id='+spopupId+']').addClass('active');
		}
	});

	// chat logic
	$('.chat').click(function(e){
		e.preventDefault();
		$(this).removeClass('active');
		}).children().click(function(e) {
			return false;
	});

	$('.chat__close').click(function(e){
		e.preventDefault();
		$(this).parents('.chat').removeClass('active');

		if ( $(this).parents('.chat').hasClass('maybe') ) {
			$('.spopup[data-spopup-id=5]').addClass('active');
		}

	});

	// spopup logic
	$('.spopup--messages button.spopup__close').click(function(e){
		e.preventDefault();
		const spopupId = $(this).parents('.spopup').data('spopup-id');
		console.log(spopupId);
		if ( spopupId < 4 ) {
			$('.messages__item[data-chat-id='+(spopupId+1)+']').removeClass('locked');
			$('.messages__item[data-chat-id='+spopupId+']').addClass('banned');
			$('.medals__counter').html( parseInt($('.medals__counter').html())+1 );
		}
		$(this).parents('.spopup').removeClass('active');
	});

});
