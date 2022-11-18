$(function () {
    //--スクロール
    $(".totop a").click(function () {
        $("html , body").animate({
            scrollTop: 0
        }, 500);

        return false;

    });



    //--ふわっ
    $(function () {
        $(window).scroll(function () {
            const windowHeight = $(window).height();
            const scroll = $(window).scrollTop();

            $('.element,.element2,.element3,.element4').each(function () {
                const targetPosition = $(this).offset().top;
                if (scroll > targetPosition - windowHeight + 100) {
                    $(this).addClass("is-fadein");
                }
            });
        });
    });

    $(".openbtn").click(function () {
        $(this).toggleClass('active');
    });

    $(function () {
        $('.openbtn').on('click', function () {
            $('.respon_nav_list').toggleClass('open');
        })
    });

});