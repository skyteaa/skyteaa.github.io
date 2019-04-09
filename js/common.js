$(function() {

	// wall logic
	$('.wall .wall__reply').on('click', function(e){
		if ( !$(this).parents('.wall__item').hasClass('banned') && !$(this).parents('.wall__item').hasClass('wall__item--banned') ) {
			e.preventDefault();
			const chatId = $(this).data('chat-id');
			$('.chat[data-chat-id='+chatId+']').addClass('active');
		}
		else {
			return false;
		}
	});

	$('.wall .wall__report').on('click', function(e){
		if ( !$(this).parents('.wall__item').hasClass('banned') && !$(this).parents('.wall__item').hasClass('wall__item--banned') ) {
			e.preventDefault();
			const spopupId = $(this).data('spopup-id');
			$('.spopup[data-spopup-id='+spopupId+']').addClass('active');
		}
		else {
			return false;
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

	$('.chat__close').click(function(e){
		e.preventDefault();

		// $(this).parents('.chat').removeClass('active');

		if ( $(this).parents('.chat').hasClass('maybe') ) {
			$('.spopup[data-spopup-id=6]').addClass('active');
		}

		const Chat = $(this).parents('.chat');
		if ( Chat.find('.chat__item--showed').last().next('.chat__item').length ) {
			Chat.find('.chat__item--showed').last().next('.chat__item').addClass('chat__item--showed').next('.chat__item').addClass('chat__item--showed');
		}
		else {
			if ( !Chat.find('.chat__result').hasClass('active') ) {
				Chat.find('.chat__result').addClass('active');
			}
			else {
				Chat.removeClass('active');
			}
			if ( Chat.hasClass('maybe') ) {
				Chat.removeClass('active');
			}
		}

	});

	// spopup messages logic
	$('.spopup--messages button.spopup__close').click(function(e){
		e.preventDefault();
		const spopupId = $(this).parents('.spopup').data('spopup-id');
		if ( spopupId != 4 ) {
			$('.messages__item[data-chat-id='+spopupId+']').addClass('banned');
			$('.medals__counter').html( parseInt($('.medals__counter').html())+1 );
		}
		$(this).parents('.spopup').removeClass('active');
		if ( $(this).parents('.spopup').data('spopup-id') == 6 ) {
			$('.messages__item.maybe').addClass('banned');
		}
		if ( parseInt($('.medals__counter').html()) == 9 ) {
			window.open('success.html','_self');
		}
	});

	// spopup wall logic
	$('.spopup--wall .spopup__close').click(function(e){
		e.preventDefault();
		console.log('yo');
		const spopupId = $(this).parents('.spopup').data('spopup-id');
		// not all blocked
		if ( $('.wall__item--banned').length == 3 ) {
			window.open('locked-wall.html','_self');
		}
		else {
			$('.wall__item[data-chat-id='+spopupId+']').addClass('wall__item--banned');
			$(this).parents('.spopup').removeClass('active');
			$('.medals__counter').html( parseInt($('.medals__counter').html())+1 );
		}
	});

});
