;(function ($) {

    /*=====================================
    =            Smooth Scroll            =
    =====================================*/

    function scrollbarAllSmooth() {
        $('body').niceScroll({
            cursorcolor:"#ffffff",
            cursorwidth: "5px",
            // cursorborder: "1px solid #fff",
            scrollspeed: 80,
            mousescrollstep: 10,
            zindex: 9999
        });
    }

    /*=====  End of Smooth Scroll  ======*/

    //First Slogan
    var redvusInfoContent = $('.wrapper-info__content'),
        redvusInfoStagger = $('.load-stagger')
    ;

    function redvusInfoActivate() {

        var tl = new TimelineMax({ delay: "4" });

        tl
            .from(redvusInfoContent, 2, {
                // scale: 1.1,
                yPercent: "3",
                autoAlpha: 0,
                ease: Power2.easeInOut
            })
            // .staggerFrom(redvusInfoStagger, 2, {
            //     // scale: 1.1,
            //     yPercent: "10",
            //     autoAlpha: 0,
            //     ease: Power2.easeInOut
            // }, 0.1)
        ;

        return tl;
    }

    // Animation logo on first page
    var redvus_logo_v_pencil = $('#redvus_logo_v_pencil'),
        redvus_logo_line_v = $('#redvus_logo_line_v'),
        redvus_logo_r = $('#redvus_logo_r'),
        redvus_logo_e_up = $('#redvus_logo_e_up'),
        redvus_logo_e_middle = $('#redvus_logo_e_middle'),
        redvus_logo_e_down = $('#redvus_logo_e_down'),
        redvus_logo_d = $('#redvus_logo_d'),
        redvus_logo_u_end = $('#redvus_logo_u_end'),
        redvus_logo_s_end = $('#redvus_logo_s_end'),
        redvus_logo_studio = $('#redvus_logo_studio'),
        redvus_logo = $('#redvus_logo'),
        redvus_shutter_left = $('.shutter-left'),
        redvus_shutter_right = $('.shutter-right'),
        redvus_menu = $('#menu'),
        redvus_menu_v = $('#menu_v'),
        redvus_menu_left = $('#menu_left_line'),
        redvus_menu_right = $('#menu_right_line'),
        redvus_menu_up = $('#menu_up_line'),
        redvus_menu_down = $('#menu_down_line'),
        redvus_menu_cross = $('#menu_cross')
        redvusFrontContent = $('.front-content')
    ;

    function redvusLogoStart() {

        var tl = new TimelineMax({
            onComplete: redvusInfoActivate(),
            delay: 0.6
        });

        tl
            .set(redvus_menu_cross, {
                scale: 0,
                transformOrigin: '50% 50%',
                autoAlpha: 0
            })
            .to(redvus_logo, 0.3, {
                autoAlpha: 1,
                ease:Power0.easeIn
            }, '-=0.6')
            .from(redvus_logo_v_pencil, 0.6, {
                x: -500,
                ease:Power1.easeOut
            })
            .from(redvus_logo_line_v, 0.6, {
                x: -500,
                ease:Power1.easeOut
            }, '-=0.6')
            .from(redvus_logo_d, 0.4, {
                x: -300,
                ease:Circ.easeOut
            }, '-=0.2')
            .from(redvus_logo_r, 0.4, {
                x: -200,
                ease:Back.easeOut
            })
            .from(redvus_logo_e_down, 0.3, {
                scaleX: '0%',
                ease:Power2.easeOut
            })
            .from(redvus_logo_e_middle, 0.3, {
                y: -200,
                ease:Back.easeOut
            }, '-=0.2')
            .from(redvus_logo_e_up, 0.3, {
                y: -200,
                ease:Back.easeOut
            }, '-=0.2')
            .from(redvus_logo_u_end, 0.3, {
                y: -200,
                ease:Back.easeOut
            })
            .from(redvus_logo_s_end, 0.45, {
                y: -200,
                ease:Back.easeOut
            }, '-=0.2')
            .staggerFrom([redvus_logo_studio_s,redvus_logo_studio_t,redvus_logo_studio_u,redvus_logo_studio_d,redvus_logo_studio_i,redvus_logo_studio_o], 0.2, {
                y: 100,
                ease:Back.easeOut
            }, 0.1)
            .to(redvus_logo, 1, {
                scale: '0.4',
                ease:Power3.easeOut
            })
            .to(redvus_shutter_left, 2, {
                width: '15%',
                // backgroundColor: "transparent",
                ease:Back.easeOut
            }, '-=1')
            .to(redvus_shutter_right, 2, {
                width: '15%',
                // backgroundColor: "transparent",
                ease:Back.easeOut
            }, '-=2')
            .to(redvus_menu, 0.5, {
                autoAlpha: 1,
                ease:Power0.easeIn
            }, '-=1')
            .from(redvus_menu_left, 0.8, {
                y: 100,
                ease:Power1.easeOut
            }, '-=1')
            .from(redvus_menu_right, 0.8, {
                y: 100,
                ease:Power1.easeOut
            }, '-=0.5')
            .from(redvus_menu_v, 0.8, {
                y: -100,
                ease:Back.easeOut
            }, '-=0.7')
        ;

        return tl;
    }

    /*============================
    =            Menu            =
    ============================*/

    function redvusMenuOpen() {

        var redvusMenuLi = $('.cd-navigation li'),
            redvusAdressLi = $('.shutter-right__adress li')
        ;

        var tl = new TimelineMax({
            paused:true,
            reversed:true
        });

        tl
            // .set(redvus_shutter_right, {
            //     backgroundColor: "#201011"
            // })
            .to(redvus_shutter_right, 0.8, {
                width: '50%',
                backgroundColor: '#201011',
                ease: Power3.easeInOut
            })
            .to(redvus_shutter_left, 0.8, {
                width: '15%',
                ease: Power3.easeInOut
            }, '-=0.8')
            .to(redvusInfoContent, 0.8, {
                paddingLeft: '40%',
                paddingRight: '10%',
                autoAlpha: 0,
                ease: Power2.easeInOut
            }, '-=0.8')
            .to(redvus_menu, 0.8, {
                x: '-50%',
                left: 0,
                rotation: '-405',
                ease: Back.easeInOut
            }, '-=0.8')
            .to([redvus_menu_left, redvus_menu_right], 0.6, {
                // stroke: '#fff',
                ease:Power1.easeOut
            }, '-=0.6')
            .to(redvus_menu_v, 0.6, {
                y: '-100',
                autoAlpha: 0,
                ease:Power1.easeOut
            }, '-=0.6')
            .to(redvus_menu_up, 0.6, {
                autoAlpha: 1,
                // stroke: '#fff',
                ease:Power1.easeOut
            }, '-=0.6')
            .to(redvus_menu_down, 0.6, {
                autoAlpha: 1,
                // stroke: '#fff',
                ease:Power1.easeOut
            }, '-=0.6')
            .to(redvus_menu_cross, 0.6, {
                scale: 1,
                autoAlpha: 1,
                // stroke: '#fff',
                ease:Power1.easeOut
            }, '-=0.6')
            .staggerFrom(redvusMenuLi, 0.6, {
                xPercent: "50%",
                autoAlpha: 0,
                ease: Back.easeOut
            }, "0.1")
            .staggerFrom(redvusAdressLi, 0.6, {
                xPercent: "50%",
                autoAlpha: 0,
                ease: Back.easeOut
            }, "0.1", "-=0.4")
            // .to(redvus_logo, 1.3, {
            //     scale: '0.4',
            //     ease: Back.easeOut
            // }, '-=1.3')
        ;

        redvus_menu.on('click', function () {
            tl.reversed() ? tl.restart() : tl.reverse(-0.3);
        });
    }

    redvus_menu.hover(function () {
        TweenMax.to(this, 0.4, {
            scale: 1.1,
            ease: Elastic.easeOut.config(0.9, 0.4)
        });
    }, function () {
        TweenMax.to(this, 0.2, {
            scale: 1
        });
    });

    /*=====  End of Menu  ======*/

    /*======================================
    =            Load in Mobile            =
    ======================================*/

    //Logo start mobile version
    function redvusLogoStartMobile() {

        var tl = new TimelineMax({
            onComplete: redvusFirstSlogan()
        });

        tl
            .set(redvus_menu_cross, {
                scale: 0,
                transformOrigin: '50% 50%',
                autoAlpha: 0
            })
            .to(redvus_logo, 0.3, {
                autoAlpha: 1,
                ease:Power0.easeIn
            }, '-=0.6')
            .from(redvus_logo_v_pencil, 0.6, {
                x: -500,
                ease:Power1.easeOut
            })
            .from(redvus_logo_line_v, 0.6, {
                x: -500,
                ease:Power1.easeOut
            }, '-=0.6')
            .from(redvus_logo_d, 0.4, {
                x: -300,
                ease:Circ.easeOut
            }, '-=0.2')
            .from(redvus_logo_r, 0.4, {
                x: -200,
                ease:Back.easeOut
            })
            .from(redvus_logo_e_down, 0.3, {
                scaleX: '0%',
                ease:Power2.easeOut
            })
            .from(redvus_logo_e_middle, 0.3, {
                y: -200,
                ease:Back.easeOut
            }, '-=0.2')
            .from(redvus_logo_e_up, 0.3, {
                y: -200,
                ease:Back.easeOut
            }, '-=0.2')
            .from(redvus_logo_u_end, 0.3, {
                y: -200,
                ease:Back.easeOut
            })
            .from(redvus_logo_s_end, 0.45, {
                y: -200,
                ease:Back.easeOut
            }, '-=0.2')
            .staggerFrom([redvus_logo_studio_s,redvus_logo_studio_t,redvus_logo_studio_u,redvus_logo_studio_d,redvus_logo_studio_i,redvus_logo_studio_o], 0.2, {
                y: 100,
                ease:Back.easeOut
            }, 0.1)
            .to(redvus_logo, 1, {
                scale: '0.4',
                ease:Power3.easeOut
            })
            .to(redvus_shutter_left, 2, {
                height: '60px',
                // backgroundColor: "transparent",
                ease: Power3.easeOut
            }, '-=1')
            .to(redvus_shutter_right, 2, {
                height: '60px',
                // backgroundColor: "transparent",
                ease: Power3.easeOut
            }, '-=2')
            .to(redvus_menu, 0.5, {
                autoAlpha: 1,
                ease: Power0.easeIn
            }, '-=1')
            .from(redvus_menu_left, 0.8, {
                y: 100,
                ease: Power1.easeOut
            }, '-=1')
            .from(redvus_menu_right, 0.8, {
                y: 100,
                ease: Power1.easeOut
            }, '-=0.5')
            .from(redvus_menu_v, 0.8, {
                y: -100,
                ease: Back.easeOut
            }, '-=0.7')
            // .set([redvus_shutter_left, redvus_shutter_right], {
            //     backgroundColor: "transparent"
            // })
        ;

        return tl;
    }

    /*=====  End of Load in Mobile  ======*/

    /*===================================
    =            Menu Mobile            =
    ===================================*/

    function redvusMenuOpenMobile() {

        var redvusMenuLi = $('.cd-navigation li');

        var tl = new TimelineMax({paused:true, reversed:true});

        tl
            // .set(redvus_shutter_right, {
            //     backgroundColor: "#201011"
            // })
            .to(redvus_shutter_right, 0.8, {
                height: '70%',
                backgroundColor: '#201011',
                ease: Power3.easeInOut
            })
            .to(redvus_shutter_left, 0.8, {
                height: '30%',
                ease: Power3.easeInOut
            }, '-=0.8')
            .to(redvusFrontContent, 0.8, {
                bottom: '25%',
                autoAlpha: 0,
                ease: Power2.easeInOut
            }, '-=0.8')
            .to(redvus_menu, 0.8, {
                y: '-50%',
                top: 0,
                rotation: '-405',
                ease: Back.easeInOut
            }, '-=0.8')
            .to([redvus_menu_left, redvus_menu_right], 0.6, {
                // stroke: '#fff',
                ease:Power1.easeOut
            }, '-=0.6')
            .to(redvus_menu_v, 0.6, {
                y: '-100',
                autoAlpha: 0,
                ease:Power1.easeOut
            }, '-=0.6')
            .to(redvus_menu_up, 0.6, {
                autoAlpha: 1,
                // stroke: '#fff',
                ease:Power1.easeOut
            }, '-=0.6')
            .to(redvus_menu_down, 0.6, {
                autoAlpha: 1,
                // stroke: '#fff',
                ease:Power1.easeOut
            }, '-=0.6')
            .to(redvus_menu_cross, 0.6, {
                scale: 1,
                autoAlpha: 1,
                // stroke: '#fff',
                ease:Power1.easeOut
            }, '-=0.6')
            .staggerFrom(redvusMenuLi, 0.6, {
                yPercent: "50%",
                autoAlpha: 0,
                ease: Back.easeOut
            }, "0.1")
            // .to(redvus_logo, 1.3, {
            //     scale: '0.4',
            //     ease: Back.easeOut
            // }, '-=1.3')
        ;

        redvus_menu.on('click', function () {
            tl.reversed() ? tl.restart() : tl.reverse(-0.3);
        });
    }

    redvus_menu.hover(function () {
        TweenMax.to(this, 0.4, {
            scale: 1.1,
            ease: Elastic.easeOut.config(0.9, 0.4)
        });
    }, function () {
        TweenMax.to(this, 0.2, {
            scale: 1
        });
    });

    /*=====  End of Menu Mobile  ======*/

    function init() {
        scrollbarAllSmooth();

        redvusLogoStart();
        redvusMenuOpen();
    }

    function initMobile() {
        redvusLogoStartMobile();
        redvusMenuOpenMobile();
    }

    if (document.body.clientWidth > 420 || screen.width > 420) {

        window.onload = function() {
            init();
        };

    } else {

        window.onload = function() {
            initMobile();
        };
    }

}(jQuery));