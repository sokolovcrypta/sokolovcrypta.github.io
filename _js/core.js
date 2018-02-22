$(document).ready(function() {
    $('.header__hamburger').on('click', function() {
        $('body').toggleClass('open-menu')
    })

    $('.speaker__more').on('click', function() {
        if ($(this).html() !== 'Скрыть') {
            $(this).closest('.speaker').find('.speaker__hide').slideDown(300);
            $(this).html('Скрыть');
        } else {
            $(this).closest('.speaker').find('.speaker__hide').slideUp(300);
            $(this).html('Подробнее');
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
        if ($(this).scrollTop() > 10) {
            $('.header').addClass('fixed');
        } else {
            $('.header').removeClass('fixed');
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



});