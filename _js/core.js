$(document).ready(function() {
    $('.header__hamburger').on('click', function() {
        $('body').toggleClass('open-menu')
    })
    $('.header__search-button').on('click', function() {
        $('body').addClass('open-search')
    })
    $('.search__close').on('click', function() {
        $('body').removeClass('open-search')
    })

    if ($(window).width() < 1240) {
        var mySwiperSimilar = new Swiper('.similar__slider', {
            slidesPerView: 'auto',
            spaceBetween: 10,
            freeMode: true
        });

    } else {
        if (!(typeof mySwiperSimilar === 'undefined')) {
            $(window).on('resize', function() {
                mySwiperSimilar.destroy();
            })
        }
        $(".similar__item").unwrap();
    }

    if ($(window).width() >= 768) {
        $('.search input').on('focusin', function() {
            $(this).closest('.search').addClass('open');
        })
        $('.search input').on('focusout', function() {
            $(this).closest('.search').removeClass('open');
        })
    }

    $('.search input').on('keydown', function(e){
    	if (e.keyCode === '13'){
    		//поиск по сайту
    	}
    })


    $('.form__button').on('click', function(){
    	$(this).closest('.form').addClass('send');
    })


    var tags = $('.list--tags .tag').length;

    if (tags > 5){
    	$('.list--tags .tag').each(function(){
    		if ($(this).index() > 5){
    			$(this).hide();
    		}
    	})
    	$('.list--tags .list__more-tags').html('Ещё + ' + (tags-6) + ' тегов');
    }

    $('.list--tags .list__more-tags').on('click', function(){
    	$('.list--tags .tag').each(function(){
    		if ($(this).index() > 5){
    			$(this).fadeIn(300);
    		}
    	})
    	$(this).fadeOut(300);
    })

});