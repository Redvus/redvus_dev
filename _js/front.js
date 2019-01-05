;(function ($) {

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
    redvusWrapperContent = $('.section-container')
;

function redvusLogoStart() {

    var tl = new TimelineMax({
        // onComplete: redvusFirstSlogan(),
        delay: 1
    });

    tl
        .set(redvus_menu_cross, {
            scale: 0,
            transformOrigin: '50% 50%',
            autoAlpha: 0
        })
        .to(redvus_logo, 0.3, {
            autoAlpha: 1,
            ease: Power0.easeIn
        }, '-=0.6')
        .from(redvus_logo_v_pencil, 0.6, {
            x: -500,
            ease: Power1.easeOut
        })
        .from(redvus_logo_line_v, 0.6, {
            x: -500,
            ease: Power1.easeOut
        }, '-=0.6')
        .from(redvus_logo_d, 0.4, {
            x: -300,
            ease: Circ.easeOut
        }, '-=0.2')
        .from(redvus_logo_r, 0.4, {
            x: -200,
            ease: Back.easeOut
        })
        .from(redvus_logo_e_down, 0.3, {
            scaleX: '0%',
            ease: Power2.easeOut
        })
        .from(redvus_logo_e_middle, 0.3, {
            y: -200,
            ease: Back.easeOut
        }, '-=0.2')
        .from(redvus_logo_e_up, 0.3, {
            y: -200,
            ease: Back.easeOut
        }, '-=0.2')
        .from(redvus_logo_u_end, 0.3, {
            y: -200,
            ease: Back.easeOut
        })
        .from(redvus_logo_s_end, 0.45, {
            y: -200,
            ease: Back.easeOut
        }, '-=0.2')
        .staggerFrom([redvus_logo_studio_s, redvus_logo_studio_t, redvus_logo_studio_u, redvus_logo_studio_d, redvus_logo_studio_i, redvus_logo_studio_o], 0.2, {
            y: 100,
            ease: Back.easeOut
        }, 0.1)
        // .to(redvus_logo, 1, {
        //     scale: '0.4',
        //     ease:Power3.easeOut
        // })
        // .to(redvus_shutter_left, 2, {
        //     width: '15%',
        //     // backgroundColor: "transparent",
        //     ease:Back.easeOut
        // }, '-=1')
        // .to(redvus_shutter_right, 2, {
        //     width: '15%',
        //     // backgroundColor: "transparent",
        //     ease:Back.easeOut
        // }, '-=2')
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
    // .to([redvus_logo_r, redvus_logo_d, redvus_logo_e_up, redvus_logo_e_middle, redvus_logo_e_down, redvus_logo_studio, redvus_logo_u_end, redvus_logo_s_end], 0.2, {
    //     autoAlpha: 0,
    //     ease: Power1.easeOut
    // }, "-=1")
    // .to(redvus_logo_v_pencil, 0.6, {
    //     x: -40,
    //     ease:Power1.easeOut
    // }, "-=0.6")
    // .to(redvus_logo_line_v, 0.6, {
    //     x: -40,
    //     ease:Power1.easeOut
    // }, '-=0.6')
    // .set([redvus_shutter_left, redvus_shutter_right], {
    //     backgroundColor: "transparent"
    // })
    ;

    return tl;
}

/*============================
=            Menu            =
============================*/

function redvusMenuOpen() {

    var redvusMenuLi = $('.cd-navigation li'),
        redvusAdressLi = $('.shutter-right__adress li'),
        redvusNavSection = $('#redvusNavSection');

    var tl = new TimelineMax({
        paused: true,
        reversed: true
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
            width: '50%',
            backgroundColor: '#ff643c',
            ease: Power3.easeInOut
        }, '-=0.8')
        // .to(redvus_logo, 0.8, {
        //     scale: '0.5',
        //     ease: Power3.easeOut
        // }, '-=0.4')
        .to(redvusNavSection, 0.4, {
            autoAlpha: 0,
            ease: Power1.easeInOut
        }, '-=0.4')
        .to(redvusWrapperContent, 0.8, {
            // xPercent: '5',
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
            ease: Power1.easeOut
        }, '-=0.6')
        .to(redvus_menu_v, 0.6, {
            y: '-100',
            autoAlpha: 0,
            ease: Power1.easeOut
        }, '-=0.6')
        .to(redvus_menu_up, 0.6, {
            autoAlpha: 1,
            // stroke: '#fff',
            ease: Power1.easeOut
        }, '-=0.6')
        .to(redvus_menu_down, 0.6, {
            autoAlpha: 1,
            // stroke: '#fff',
            ease: Power1.easeOut
        }, '-=0.6')
        .to(redvus_menu_cross, 0.6, {
            scale: 1,
            autoAlpha: 1,
            // stroke: '#fff',
            ease: Power1.easeOut
        }, '-=0.6')
        .staggerFrom(redvusMenuLi, 0.6, {
            xPercent: "50%",
            autoAlpha: 0,
            ease: Back.easeOut
        }, "0.07", "-=0.2")
        .staggerFrom(redvusAdressLi, 0.6, {
            xPercent: "50%",
            autoAlpha: 0,
            ease: Back.easeOut
        }, "0.07", "-=0.4")
    // .to(redvus_logo, 1.3, {
    //     scale: '0.4',
    //     ease: Back.easeOut
    // }, '-=1.3')
    ;

    redvus_menu.on("click", function () {
        tl.reversed() ? tl.restart() : tl.reverse(-0.3);
    });

    return tl;
}

redvus_menu.on("mouseover", function () {
    TweenMax.to(this, 0.4, {
        scale: 1.1,
        ease: Elastic.easeOut.config(0.9, 0.4)
    });
}), redvus_menu.on("mouseleave", function () {
    TweenMax.to(this, 0.2, {
        scale: 1
    });
});

/*=====  End of Menu  ======*/

/*======================================
=            Load in Mobile            =
======================================*/

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
            ease: Power0.easeIn
        }, '-=0.6')
        .from(redvus_logo_v_pencil, 0.6, {
            x: -500,
            ease: Power1.easeOut
        })
        .from(redvus_logo_line_v, 0.6, {
            x: -500,
            ease: Power1.easeOut
        }, '-=0.6')
        .from(redvus_logo_d, 0.4, {
            x: -300,
            ease: Circ.easeOut
        }, '-=0.2')
        .from(redvus_logo_r, 0.4, {
            x: -200,
            ease: Back.easeOut
        })
        .from(redvus_logo_e_down, 0.3, {
            scaleX: '0%',
            ease: Power2.easeOut
        })
        .from(redvus_logo_e_middle, 0.3, {
            y: -200,
            ease: Back.easeOut
        }, '-=0.2')
        .from(redvus_logo_e_up, 0.3, {
            y: -200,
            ease: Back.easeOut
        }, '-=0.2')
        .from(redvus_logo_u_end, 0.3, {
            y: -200,
            ease: Back.easeOut
        })
        .from(redvus_logo_s_end, 0.45, {
            y: -200,
            ease: Back.easeOut
        }, '-=0.2')
        .staggerFrom([redvus_logo_studio_s, redvus_logo_studio_t, redvus_logo_studio_u, redvus_logo_studio_d, redvus_logo_studio_i, redvus_logo_studio_o], 0.2, {
            y: 100,
            ease: Back.easeOut
        }, 0.1)
        .to(redvus_logo, 1, {
            scale: '0.4',
            ease: Power3.easeOut
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

function redvusMenuOpenMobile() {

    var redvusMenuLi = document.querySelectorAll('.cd-navigation li'),
        redvusAdressLi = document.querySelectorAll('.shutter-right__adress li');

    var tl = new TimelineMax({
        paused: true,
        reversed: true
    });

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
        .to(redvusWrapperContent, 0.8, {
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
            ease: Power1.easeOut
        }, '-=0.6')
        .to(redvus_menu_v, 0.6, {
            y: '-100',
            autoAlpha: 0,
            ease: Power1.easeOut
        }, '-=0.6')
        .to(redvus_menu_up, 0.6, {
            autoAlpha: 1,
            // stroke: '#fff',
            ease: Power1.easeOut
        }, '-=0.6')
        .to(redvus_menu_down, 0.6, {
            autoAlpha: 1,
            // stroke: '#fff',
            ease: Power1.easeOut
        }, '-=0.6')
        .to(redvus_menu_cross, 0.6, {
            scale: 1,
            autoAlpha: 1,
            // stroke: '#fff',
            ease: Power1.easeOut
        }, '-=0.6')
        .staggerFrom(redvusMenuLi, 0.6, {
            yPercent: "50%",
            autoAlpha: 0,
            ease: Back.easeOut
        }, "0.1")
        .staggerFrom(redvusAdressLi, 0.6, {
            yPercent: "50%",
            autoAlpha: 0,
            ease: Back.easeOut
        }, "0.1", "-=0.4")
    // .to(redvus_logo, 1.3, {
    //     scale: '0.4',
    //     ease: Back.easeOut
    // }, '-=1.3')
    ;

    redvus_menu.on("click", function () {
        tl.reversed() ? tl.restart() : tl.reverse(-0.3);
    });

    return tl;
}

/*=====  End of Menu Mobile  ======*/


/*================================
=            Parallax            =
================================*/

function sectionParallax() {

    var rect = $('.section-project')[0].getBoundingClientRect();
    var mouse = { x: 0, y: 0, moved: false };

    $(".section-project").mousemove(function (e) {
        mouse.moved = true;
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    // Ticker event will be called on every frame
    TweenLite.ticker.addEventListener('tick', function () {
        if (mouse.moved) {
            parallaxIt(".section-project__text", -100);
            parallaxIt(".section-project__link", -50);
            parallaxIt(".section-project__image", -30);
        }
        mouse.moved = false;
    });

    function parallaxIt(target, movement) {
        TweenMax.to(target, 0.3, {
            x: (mouse.x - rect.width / 2) / rect.width * movement,
            y: (mouse.y - rect.height / 2) / rect.height * movement,
            transformOrigin: "center"
        });
    }

    $(window).on('resize scroll', function () {
        rect = $('.section-project')[0].getBoundingClientRect();
    })
}

/*=====  End of Parallax  ======*/


/*=============================================
=            GSAP Full Page Scroll            =
=============================================*/

function fullHeightScroll() {

    var $window = $(window);
    var $document = $(document);
    //Only links that starts with #
    var $navButtons = $("#redvusNavSection a").filter('[href^="#"]');
    var $navGoPrev = $(".go-prev");
    var $navGoNext = $(".go-next");
    var $slidesContainer = $(".section-container");
    var $slides = $(".section");
    var $currentSlide = $slides.first();

    var $slideTimeChange = 0.8,
        $slideEaseChange = Power2.easeInOut,
        $navTimeChange = 0.5;

    //Animating flag - is our app animating
    var isAnimating = false;

    //The height of the window
    var pageHeight = $window.innerHeight();

    //Key codes for up and down arrows on keyboard. We'll be using this to navigate change slides using the keyboard
    var keyCodes = {
        UP: 38,
        DOWN: 40
    }

    var currentIndex = 0;

    /*----------  Intro  ----------*/
    var sectionFirstArrowDown = $('.arrow-down'),
        frontSkillsLi = $('#frontSkills ul > li'),
        redvusSloganList = $('.skills'),
        section_0 = $('#section_0'),
        redvusNavSection = $('#redvusNavSection')
    ;

    var tl0 = new TimelineMax({
            onComplete: stopAnimation,
            // onComplete: introVivusAnimation,
            paused: true
        })
        .set(section_0, {
            backgroundColor: "#ff643c"
        })
        .staggerFrom(frontSkillsLi, 2, {
            scale: 0.9,
            // yPercent: "20",
            autoAlpha: 0,
            ease: Power4.easeOut
        }, "0.15")
        .from(redvusNavSection, 0.6, {
            xPercent: 100,
            autoAlpha: 0,
            ease: Power1.easeInOut
        }, "-=1")
        .from(sectionFirstArrowDown, 0.6, {
            // scale: 1.1,
            // yPercent: "100",
            autoAlpha: 0,
            ease: Power1.easeInOut
        }, "-=0.6")
        .set(redvusSloganList, {
            className: "+=hoverlist"
        })
        .reverse(false);

    /*----------  Section 1 БигБенКлуб  ----------*/
    var section_1 = $('#section_1'),
        sectionText_1 = $('#sectionText_1'),
        sectionImage_1 = $('#sectionImage_1'),
        sectionLink_1 = $('#sectionLink_1')
    ;

    var tl1 = new TimelineMax({
        onComplete: stopAnimation
        })
        // .to(section_1, 0.4, {
        //     backgroundColor: "#516575",
        //     ease: Power2.easeInOut
        // }, "-=0.4")
        .from(sectionImage_1, 1, {
            yPercent: 15,
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "-=0.6")
        .from(sectionText_1, 1, {
            yPercent: -15,
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "-=0.6")
        .from(sectionLink_1, 0.6, {
            xPercent: -15,
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "-=0.6")
        .reverse(false);

    /*----------  Section 2 ДизельАвто  ----------*/
    var section_2 = $('#section_2'),
        sectionText_2 = $('#sectionText_2'),
        sectionImage_2 = $('#sectionImage_2'),
        sectionLink_2 = $('#sectionLink_2')
    ;

    var tl2 = new TimelineMax({
            onComplete: stopAnimation
        })
        // .to(section_2, 0.4, {
        //     backgroundColor: "#666",
        //     ease: Power2.easeInOut
        // }, "-=0.4")
        .from(sectionLink_2, 1, {
            scale: 1.1,
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "-=0.6")
        .from(sectionText_2, 1, {
            scale: 1.1,
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "-=0.6")
        .from(sectionImage_2, 1, {
            scale: 1.1,
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "-=0.6")
        .reverse(false);

    /*----------  Section 3 ДжинДжу  ----------*/
    var section_3 = $('#section_3'),
        sectionText_3 = $('#sectionText_3'),
        sectionImage_3 = $('#sectionImage_3'),
        sectionLink_3 = $('#sectionLink_3')
    ;

    var tl3 = new TimelineMax({
            onComplete: stopAnimation
        })
        // .to(section_3, 0.4, {
        //     backgroundColor: "#666",
        //     ease: Power2.easeInOut
        // }, "-=0.4")
        .from(sectionLink_3, 1, {
            yPercent: 10,
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "-=0.6")
        .from(sectionText_3, 1, {
            yPercent: -10,
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "-=0.6")
        .from(sectionImage_3, 1, {
            yPercent: -10,
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "-=0.6")
        .reverse(false);

    /*----------  Section 4 Фотобокс  ----------*/
    var section_4 = $('#section_4'),
        sectionText_4 = $('#sectionText_4'),
        sectionImage_4 = $('#sectionImage_4'),
        sectionLink_4 = $('#sectionLink_4')
    ;

    var tl4 = new TimelineMax({
            onComplete: stopAnimation
        })
        // .to(section_4, 0.4, {
        //     backgroundColor: "#666",
        //     ease: Power2.easeInOut
        // }, "-=0.4")
        .from(sectionLink_4, 1, {
            scale: 0.9,
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "-=0.6")
        .from(sectionText_4, 1, {
            scale: 0.9,
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "-=0.6")
        .from(sectionImage_4, 1, {
            scale: 0.9,
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "-=0.6")
        .reverse(false);

    /*----------  Section 5 Форте  ----------*/
    var section_5 = $('#section_5'),
        sectionText_5 = $('#sectionText_5'),
        sectionImage_5 = $('#sectionImage_5'),
        sectionLink_5 = $('#sectionLink_5')
    ;

    var tl5 = new TimelineMax({
            onComplete: stopAnimation
        })
        // .to(section_5, 0.4, {
        //     backgroundColor: "#666",
        //     ease: Power2.easeInOut
        // }, "-=0.4")
        .from(sectionLink_5, 1, {
            scale: 0.9,
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "-=0.6")
        .from(sectionText_5, 1, {
            scale: 0.9,
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "-=0.6")
        .from(sectionImage_5, 1, {
            yPercent: -10,
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "-=0.6")
        .reverse(false);

    /*----------  Section 6 Алмаз  ----------*/
    var section_6 = $('#section_6'),
        sectionText_6 = $('#sectionText_6'),
        sectionImage_6 = $('#sectionImage_6'),
        sectionLink_6 = $('#sectionLink_6')
    ;

    var tl6 = new TimelineMax({
            onComplete: stopAnimation
        })
        // .to(section_6, 0.4, {
        //     backgroundColor: "#666",
        //     ease: Power2.easeInOut
        // }, "-=0.4")
        .from(sectionLink_6, 1, {
            scale: 0.9,
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "-=0.6")
        .from(sectionText_6, 1, {
            scale: 0.9,
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "-=0.6")
        .from(sectionImage_6, 1, {
            scale: 0.9,
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "-=0.6")
        .reverse(false);

    /*----------  Section 7 Шанталь  ----------*/
    var section_7 = $('#section_7'),
        sectionText_7 = $('#sectionText_7'),
        sectionImage_7 = $('#sectionImage_7'),
        sectionLink_7 = $('#sectionLink_7')
    ;

    var tl7 = new TimelineMax({
            onComplete: stopAnimation
        })
        // .to(section_7, 0.4, {
        //     backgroundColor: "#666",
        //     ease: Power2.easeInOut
        // }, "-=0.4")
        .from(sectionLink_7, 1, {
            yPercent: 10,
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "-=0.6")
        .from(sectionText_7, 1, {
            yPercent: -10,
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "-=0.6")
        .from(sectionImage_7, 1, {
            scale: 1.1,
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "-=0.6")
        .reverse(false);

    /*----------  Section 8 Форсунка  ----------*/
    var section_8 = $('#section_8'),
        sectionText_8 = $('#sectionText_8'),
        sectionImage_8 = $('#sectionImage_8'),
        sectionLink_8 = $('#sectionLink_8')
    ;

    var tl8 = new TimelineMax({
            onComplete: stopAnimation
        })
        // .to(section_8, 0.4, {
        //     backgroundColor: "#666",
        //     ease: Power2.easeInOut
        // }, "-=0.4")
        .from(sectionLink_8, 1, {
            scale: 0.9,
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "-=0.6")
        .from(sectionText_8, 1, {
            scale: 0.9,
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "-=0.6")
        .from(sectionImage_8, 1, {
            scale: 0.9,
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "-=0.6")
        .reverse(false);

    /*----------  Section 9 ТрэкшнГрупп  ----------*/
    var section_9 = $('#section_9'),
        sectionText_9 = $('#sectionText_9'),
        sectionImage_9 = $('#sectionImage_9'),
        sectionLink_9 = $('#sectionLink_9')
    ;

    var tl9 = new TimelineMax({
            onComplete: stopAnimation
        })
        // .to(section_9, 0.4, {
        //     backgroundColor: "#666",
        //     ease: Power2.easeInOut
        // }, "-=0.4")
        .from(sectionLink_9, 1, {
            scale: 1.1,
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "-=0.6")
        .from(sectionText_9, 1, {
            xPercent: -5,
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "-=0.6")
        .from(sectionImage_9, 1, {
            xPercent: 10,
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "-=0.6")
        .reverse(false);

    /*----------  Section 10 Экспонорм  ----------*/
    var section_10 = $('#section_10'),
        sectionText_10 = $('#sectionText_10'),
        sectionImage_10 = $('#sectionImage_10'),
        sectionLink_10 = $('#sectionLink_10')
    ;

    var tl10 = new TimelineMax({
            onComplete: stopAnimation
        })
        // .to(section_10, 0.4, {
        //     backgroundColor: "#666",
        //     ease: Power2.easeInOut
        // }, "-=0.4")
        .from(sectionLink_10, 1, {
            scale: 0.9,
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "-=0.6")
        .from(sectionText_10, 1, {
            scale: 1.1,
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "-=0.6")
        .from(sectionImage_10, 1, {
            yPercent: 10,
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "-=0.6")
        .reverse(false);

    /*----------  Section 11 Тарзания  ----------*/
    var section_11 = $('#section_11'),
        sectionText_11 = $('#sectionText_11'),
        sectionImage_11 = $('#sectionImage_11'),
        sectionLink_11 = $('#sectionLink_11')
    ;

    var tl11 = new TimelineMax({
            onComplete: stopAnimation
        })
        // .to(section_11, 0.4, {
        //     backgroundColor: "#666",
        //     ease: Power2.easeInOut
        // }, "-=0.4")
        .from(sectionLink_11, 1, {
            scale: 0.9,
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "-=0.6")
        .from(sectionText_11, 1, {
            yPercent: -5,
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "-=0.6")
        .from(sectionImage_11, 1, {
            xPercent: 10,
            yPercent: -5,
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "-=0.6")
        .reverse(false);

    /*----------  Section 12 Клубхаус  ----------*/
    var section_12 = $('#section_12'),
        sectionText_12 = $('#sectionText_12'),
        sectionImage_12 = $('#sectionImage_12'),
        sectionLink_12 = $('#sectionLink_12')
    ;

    var tl12 = new TimelineMax({
            onComplete: stopAnimation
        })
        // .to(section_12, 0.4, {
        //     backgroundColor: "#666",
        //     ease: Power2.easeInOut
        // }, "-=0.4")
        .from(sectionLink_12, 1, {
            scale: 0.9,
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "-=0.6")
        .from(sectionText_12, 1, {
            yPercent: 10,
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "-=0.6")
        .from(sectionImage_12, 1, {
            yPercent: -10,
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "-=0.6")
        .reverse(false);

    /*----------  Section 13 Архимед  ----------*/
    var section_13 = $('#section_13'),
        sectionText_13 = $('#sectionText_13'),
        sectionImage_13 = $('#sectionImage_13'),
        sectionLink_13 = $('#sectionLink_13')
    ;

    var tl13 = new TimelineMax({
            onComplete: stopAnimation
        })
        // .set(section_13, {
        //     backgroundColor: "#666"
        // })
        .from(sectionLink_13, 1, {
            scale: 0.9,
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "-=0.6")
        .from(sectionText_13, 1, {
            xPercent: 10,
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "-=0.6")
        .from(sectionImage_13, 1, {
            xPercent: -10,
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "-=0.6")
        .reverse(false);

    /*----------  Section 14 Такелаж  ----------*/
    var section_14 = $('#section_14'),
        sectionText_14 = $('#sectionText_14'),
        sectionImage_14 = $('#sectionImage_14'),
        sectionLink_14 = $('#sectionLink_14')
    ;

    var tl14 = new TimelineMax({
            onComplete: stopAnimation
        })
        // .to(section_14, 0.4, {
        //     backgroundColor: "#93787f",
        //     ease: Power2.easeInOut
        // }, "-=0.4")
        .from(sectionLink_14, 1, {
            scale: 0.9,
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "-=0.6")
        .from(sectionText_14, 1, {
            scale: 1.1,
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "-=0.6")
        .from(sectionImage_14, 1, {
            xPercent: 10,
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "-=0.6")
        .reverse(false);

    /*----------  Section 15 Бенчмарк  ----------*/
    var section_15 = $('#section_15'),
        sectionText_15 = $('#sectionText_15'),
        sectionImage_15 = $('#sectionImage_15'),
        sectionLink_15 = $('#sectionLink_15')
    ;

    var tl15 = new TimelineMax({
            onComplete: stopAnimation
        })
        // .to(section_15, 0.4, {
        //     backgroundColor: "#7e6f73",
        //     ease: Power2.easeInOut
        // }, "-=0.4")
        .from(sectionLink_15, 1, {
            scale: 1.1,
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "-=0.6")
        .from(sectionText_15, 1, {
            scale: 1.1,
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "-=0.6")
        .from(sectionImage_15, 1, {
            scale: 0.9,
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "-=0.6")
        .reverse(false);

    /*----------  Section 16 Габарит  ----------*/
    var section_16 = $('#section_16'),
        sectionText_16 = $('#sectionText_16'),
        sectionImage_16 = $('#sectionImage_16'),
        sectionLink_16 = $('#sectionLink_16')
    ;

    var tl16 = new TimelineMax({
            onComplete: stopAnimation
        })
        // .to(section_16, 0.4, {
        //     backgroundColor: "#666",
        //     ease: Power2.easeInOut
        // }, "-=0.4")
        .from(sectionLink_16, 1, {
            scale: 0.9,
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "-=0.6")
        .from(sectionText_16, 1, {
            yPercent: 10,
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "-=0.6")
        .from(sectionImage_16, 1, {
            yPercent: -10,
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "-=0.6")
        .reverse(false);

    /*----------  Section 17 Гараж  ----------*/
    var section_17 = $('#section_17'),
        sectionText_17 = $('#sectionText_17'),
        sectionImage_17 = $('#sectionImage_17'),
        sectionLink_17 = $('#sectionLink_17')
    ;

    var tl17 = new TimelineMax({
            onComplete: stopAnimation
        })
        // .to(section_17, 0.4, {
        //     backgroundColor: "#666",
        //     ease: Power2.easeInOut
        // }, "-=0.4")
        .from(sectionLink_17, 1, {
            scale: 0.9,
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "-=0.6")
        .from(sectionText_17, 1, {
            scale: 0.9,
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "-=0.6")
        .from(sectionImage_17, 1, {
            scale: 0.9,
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "-=0.6")
        .reverse(false);

    /*----------  Section 18 Timetolunch  ----------*/
    var section_18 = $('#section_18'),
        sectionText_18 = $('#sectionText_18'),
        sectionImage_18 = $('#sectionImage_18'),
        sectionLink_18 = $('#sectionLink_18')
    ;

    var tl18 = new TimelineMax({
            onComplete: stopAnimation
        })
        // .to(section_18, 0.4, {
        //     backgroundColor: "#516575",
        //     ease: Power2.easeInOut
        // }, "-=0.4")
        .from(sectionLink_18, 1, {
            scale: 1.1,
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "-=0.6")
        .from(sectionText_18, 1, {
            scale: 1.1,
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "-=0.6")
        .from(sectionImage_18, 1, {
            yPercent: -10,
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "-=0.6")
        .reverse(false);

    /*----------  Section 19 ДАП-тех  ----------*/
    var section_19 = $('#section_19'),
        sectionText_19 = $('#sectionText_19'),
        sectionImage_19 = $('#sectionImage_19'),
        sectionLink_19 = $('#sectionLink_19')
    ;

    var tl19 = new TimelineMax({
            onComplete: stopAnimation
        })
        // .to(section_19, 0.4, {
        //     backgroundColor: "#70615e",
        //     ease: Power2.easeInOut
        // }, "-=0.4")
        .from(sectionLink_19, 1, {
            yPercent: 10,
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "-=0.6")
        .from(sectionText_19, 1, {
            scale: 1.1,
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "-=0.6")
        .from(sectionImage_19, 1, {
            xPercent: 10,
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "-=0.6")
        .reverse(false);

    /*----------  Section 20 ДАП-сервис  ----------*/
    var section_20 = $('#section_20'),
        sectionText_20 = $('#sectionText_20'),
        sectionImage_20 = $('#sectionImage_20'),
        sectionLink_20 = $('#sectionLink_20')
    ;

    var tl20 = new TimelineMax({
            onComplete: stopAnimation
        })
        // .to(section_20, 0.4, {
        //     backgroundColor: "#5ea2bd",
        //     ease: Power2.easeInOut
        // }, "-=0.4")
        .from(sectionLink_20, 1, {
            scale: 1.1,
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "-=0.6")
        .from(sectionText_20, 1, {
            yPercent: -10,
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "-=0.6")
        .from(sectionImage_20, 1, {
            yPercent: 10,
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "-=0.6")
        .reverse(false);

    var tls = [tl0, tl20, tl19, tl18, tl17, tl15, tl14, tl13, tl12, tl11, tl10, tl9, tl8, tl7, tl5, tl2];

    //Going to the first slide
    goToSlide($currentSlide);

    //Adding event listeners
    $window.on("resize", onResize).resize();
    $window.on("mousewheel DOMMouseScroll", onMouseWheel);
    $document.on("keydown", onKeyDown);
    $navButtons.on("click", onNavButtonClick);
    $navGoPrev.on("click", goToPrevSlide);
    $navGoNext.on("click", goToNextSlide);


    /*----------  Internal functions  ----------*/
    //When a button is clicked - first get the button href, and then slide to the container, if there's such a container
    function onNavButtonClick(event) {
        //The clicked button
        var $button = $(this);

        //The slide the button points to
        var $slide = $($button.attr("href"));

        //If the slide exists, we go to it
        if ($slide.length) {
            goToSlide($slide);
            event.preventDefault();
        }
    }

    //Getting the pressed key. Only if it's up or down arrow, we go to prev or next slide and prevent default behaviour
    //This way, if there's text input, the user is still able to fill it
    function onKeyDown(event) {

        var PRESSED_KEY = event.keyCode;

        if (PRESSED_KEY == keyCodes.UP) {
            goToPrevSlide();
            event.preventDefault();
        } else if (PRESSED_KEY == keyCodes.DOWN) {
            goToNextSlide();
            event.preventDefault();
        }

    }

    //When user scrolls with the mouse, we have to change slides
    function onMouseWheel(event) {
        //Normalize event wheel delta
        var delta = event.originalEvent.wheelDelta / 30 || -event.originalEvent.detail;

        //If the user scrolled up, it goes to previous slide, otherwise - to next slide
        if (delta < -1) {
            goToNextSlide();
        } else if (delta > 1) {
            goToPrevSlide();
        }

        event.preventDefault();
    }

    //If there's a previous slide, slide to it
    function goToPrevSlide() {
        if ($currentSlide.prev().length) {
            goToSlide($currentSlide.prev());
        }
    }

    //If there's a next slide, slide to it/
    function goToNextSlide() {
        if ($currentSlide.next().length) {
            goToSlide($currentSlide.next());
        }
    }

    //Actual transition between slides/
    function goToSlide($slide) {
        //If the slides are not changing and there's such a slide
        if (!isAnimating && $slide.length) {
            //setting animating flag to true
            isAnimating = true;
            $currentSlide = $slide;

            //Sliding to current slide
            TweenMax.to($slidesContainer, $slideTimeChange, {
                scrollTo: {
                    y: pageHeight * $currentSlide.index()
                },
                onComplete: onSlideChangeEnd,
                onCompleteScope: this,
                ease: $slideEaseChange
            });

            //Definig slide status
            TweenMax.to($slides.filter(".active"), 0.1, {
                className: "-=active"
            });
            TweenMax.to($slides.filter($currentSlide), 0.1, {
                className: "+=active"
            });

            //Animating menu items
            TweenMax.to($navButtons.filter(".active"), $navTimeChange, {
                className: "-=active"
            });

            TweenMax.to($navButtons.filter('[href="#' + $currentSlide.attr("id") + '"]'), $navTimeChange, {
                className: "+=active"
            });

        }
    }

    //Once the sliding is finished, we need to restore "isAnimating" flag.
    //You can also do other things in this function, such as changing page title/
    function onSlideChangeEnd() {
        isAnimating = false;

        // Reverse the timeline for the previous slide
        tls[currentIndex].reversed(false).progress(0);

        // Change the index
        currentIndex = $currentSlide.index();

        // Play the timeline for the current slide
        tls[currentIndex].reversed(false);
    }

    function stopAnimation() {
        tls[currentIndex].clear();
    }

    //When user resize it's browser we need to know the new height, so we can properly align the current slide/
    function onResize(event) {

        //This will give us the new height of the window
        var newPageHeight = $window.innerHeight();

        //If the new height is different from the old height ( the browser is resized vertically ), the slides are resized
        if (pageHeight !== newPageHeight) {
            pageHeight = newPageHeight;

            //This can be done via CSS only, but fails into some old browsers, so I prefer to set height via JS
            TweenMax.set([$slidesContainer, $slides], {
                height: pageHeight + "px"
            });

            //The current slide should be always on the top
            TweenMax.set($slidesContainer, {
                scrollTo: {
                    y: pageHeight * $currentSlide.index()
                }
            });
        }

    }

    // var contactHeaderButton = $('#headerButton');
    // contactHeaderButton.on("click", goToSlide('#section_4'));
}

/*=====  End of GSAP Full Page Scroll  ======*/

function init() {
    redvusLogoStart();
    redvusMenuOpen();
    fullHeightScroll();
    sectionParallax();
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