$(document).ready(function() {
    $('.header__hamburger').on('click', function() {
        $('body').toggleClass('open-menu')
    })

    $('.speaker__more').on('click', function(){
    	if($(this).html() !== 'Скрыть'){
    		$(this).closest('.speaker').find('.speaker__hide').slideDown(300);
	    	$(this).html('Скрыть');
    	} else {
    		$(this).closest('.speaker').find('.speaker__hide').slideUp(300);
	    	$(this).html('Подробнее');
    	}
    	
    })


    $(".menu--nav .menu__item").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).find('a').attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
});