(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$(document).ready(function() {
    $('.header__hamburger').on('click', function() {
        $('body').toggleClass('open-menu')
    })

    $('.speaker__more').on('click', function() {
        if ($(this).html() === 'Скрыть' || $(this).html() === 'Ocultar') {
            $(this).closest('.speaker').find('.speaker__hide').slideUp(300);
            if ($(this).html() === 'Скрыть') {
                $(this).html('Подробнее');
            } else if ($(this).html() === 'Ocultar') {
                $(this).html('Leer más');
            }
        } else if ($(this).html() === 'Подробнее' || $(this).html() === 'Leer más') {
            $(this).closest('.speaker').find('.speaker__hide').slideDown(300);
            if ($(this).html() === 'Leer más') {
                $(this).html('Ocultar');
            } else if ($(this).html() === 'Подробнее') {
                $(this).html('Скрыть');
            }
        }

    })


    $(".menu--nav .menu__item").on("click", function(event) {
        event.preventDefault();
        $('body').removeClass('open-menu');
        var id = $(this).find('a').attr('href'),
            top = $(id).offset().top - 30;
        $('body,html').animate({ scrollTop: top }, 1000);
    });


    $(window).scroll(function() {

        if ($(this).scrollTop() > $('.header').outerHeight() + 50) {
            $('.header').addClass('transformed');
        } else {
            $('.header').removeClass('transformed');
        }

        if ($(this).scrollTop() > $('.main').outerHeight() / 2) {
            $('.header').addClass('animated');
        } else {
            $('.header').removeClass('animated');
        }
        if ($(this).scrollTop() > $('.main').outerHeight()) {
            $('.header').addClass('showed');
        } else {
            $('.header').removeClass('showed');
        }


    })


    $('.form__button').click(function(e) {
        var $this = $(this),
            $form = $(this).closest('.form'),
            data = $this.closest('form').serialize(),
            $email = $this.closest('.form').find('input[name="email"]'),
            pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i,
            $input = $this.closest('.form').find('.input');

        if ($email.val() !== '') {
            if (!pattern.test($email.val())) {
                $email.closest('.input').addClass('error error--email');
            } else {
                $email.closest('.input').removeClass('error error--email');
            }
        } else {
            $email.closest('.input').addClass('error error--email');
        }
        if (!$input.hasClass('error')) {
            $(this).closest('.form').addClass('loading');
            $.ajax({
                type: 'POST',
                url: '/send.php',
                data: data,
                success: function(data) {
                    $form.removeClass('loading');
                    $form.addClass('send');
                }
            });
        }
    });


    var mySwiper = '';
    mySwiper = new Swiper('.partners__slider', {
        navigation: {
            nextEl: '.partners__btn--next',
            prevEl: '.partners__btn--prev',
        },
        spaceBetween: 10,
        slidesPerView: 'auto',
        freeMode: true,
        breakpoints: {
            767: { spaceBetween: 20, slidesOffsetBefore: 20, slidesOffsetAfter: 20 },
            1023: { spaceBetween: 60, slidesOffsetBefore: 20,slidesOffsetAfter: 20 },
            1239: { spaceBetween: 82, slidesOffsetBefore: 60,slidesOffsetAfter: 60 },
            1559: { spaceBetween: 95, slidesOffsetAfter: 60 },
            5000: { spaceBetween: 120, slidesOffsetAfter: 150 }
        }
    })



});
},{}]},{},[1]);
