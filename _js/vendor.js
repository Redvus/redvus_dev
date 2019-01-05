(function ($) {

    // function cookieFront() {

    //     if (!$.cookie('was')) {

    //         permissionBlock.removeClass('permission-hidden');

    //     }

    //     $.cookie('was', true, {
    //         expires: 7,
    //         path: '/'
    //     });

    // }

    /*=====================================
    =            Smooth Scroll            =
    =====================================*/

    // var Scrollbar = window.Scrollbar;
    // Scrollbar.init(document.getElementById('main-scrollbar'), {
    //     speed: 1,
    //     // overscrollEffectColor: ''
    // });

    function scrollbarAllSmooth() {
        $('body').niceScroll({
            cursorcolor: "#ffffff",
            cursorwidth: "5px",
            // cursorborder: "1px solid #fff",
            scrollspeed: 80,
            mousescrollstep: 10,
            zindex: 9999
        });
    }

    // scrollbarAllSmooth();

}(jQuery));