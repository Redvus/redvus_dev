;(function ($) {

    //First Slogan
    var redvusSloganNe = document.getElementById('ne'),
        redvusSloganAsItSeems = document.getElementById('as_it_seems'),
        redvusSloganVseTak = document.getElementById('vse_tak'),
        redvusSloganSimple = document.getElementById('simple'),
        redvusSloganLooksLike = document.getElementById('looks_like'),
        redvusSloganInReality = document.getElementById('in_reality'),
        redvusSloganHard = document.getElementById('hard'),
        redvusSloganNE = document.querySelectorAll('#ne tspan'),
        redvusFrontSlogan = document.getElementById('frontSlogan'),
        redvusFrontText = document.querySelector('.section-top__text'),
        frontSkills = document.getElementById('frontSkills'),
        frontSkillsLi = document.querySelectorAll('#frontSkills ul > li'),
        frontSkillsTitle = document.querySelector('#frontSkills h3'),
        redvusSloganList = document.querySelector('.skills')
    ;

    function redvusFirstSlogan() {

        var tl = new TimelineMax({delay: "4"});

        tl
            // .staggerFrom(redvusSloganNE, 2, {
            //     // scale: 1.1,
            //     xPercent: "-30",
            //     autoAlpha: 0,
            //     ease: Back.easeInOut
            // }, 0.3)
            // .from(redvusSloganVseTak, 1, {
            //     // scale: 1.1,
            //     xPercent: "-50",
            //     autoAlpha: 0,
            //     ease: Back.easeInOut
            // }, "-=1")
            // .from(redvusSloganSimple, 1, {
            //     // scale: 1.1,
            //     yPercent: "30",
            //     autoAlpha: 0,
            //     ease: Back.easeInOut
            // }, "-=0.6")
            // .from(redvusSloganAsItSeems, 1, {
            //     // scale: 1.1,
            //     yPercent: "50",
            //     autoAlpha: 0,
            //     ease: Back.easeInOut
            // }, "-=0.3")
            // .to(redvusSloganSimple, 0.3, {
            //     // scale: 1.1,
            //     yPercent: "30",
            //     autoAlpha: 0,
            //     ease: Back.easeInOut
            // }, "+=0.8")
            // .to(redvusSloganAsItSeems, 0.3, {
            //     // scale: 1.1,
            //     yPercent: "30",
            //     autoAlpha: 0,
            //     ease: Back.easeInOut
            // })
            // .from(redvusSloganHard, 1, {
            //     // scale: 1.1,
            //     yPercent: "50",
            //     autoAlpha: 0,
            //     ease: Back.easeInOut
            // })
            // .from(redvusSloganLooksLike, 1, {
            //     // scale: 1.1,
            //     xPercent: "50",
            //     autoAlpha: 0,
            //     ease: Back.easeInOut
            // })
            // .from(redvusSloganInReality, 1, {
            //     // scale: 1.1,
            //     xPercent: "50",
            //     autoAlpha: 0,
            //     ease: Back.easeInOut
            // }, "-=0.6")
            // .to(redvusFrontSlogan, 2, {
            //     // scale: 1.1,
            //     // xPercent: "50",
            //     autoAlpha: 0,
            //     ease: Power1.easeInOut
            // })
            .from(redvusWrapperContent, 0.5, {
                // scale: 1.1,
                // xPercent: "50",
                autoAlpha: 0,
                ease: Power1.easeInOut
            })
            // .from(frontSkills, 1, {
            //     // scale: 1.1,
            //     // xPercent: "50",
            //     autoAlpha: 0,
            //     ease: Power1.easeInOut
            // }, "-=0.5")
            .staggerFrom(frontSkillsLi, 0.6, {
                // scale: 1.1,
                yPercent: "20",
                autoAlpha: 0,
                ease: Back.easeInOut
            }, 0.1)
            .from(sectionFirstArrowDown, 0.8, {
                // scale: 1.1,
                // yPercent: "100",
                autoAlpha: 0,
                ease: Back.easeInOut
            })
            .set(redvusSloganList, {
                className: "+=hoverlist"
            })
        ;

        return tl;
    }

    // Animation logo on first page
    var redvus_logo_v_pencil = document.getElementById('redvus_logo_v_pencil'),
        redvus_logo_line_v = document.getElementById('redvus_logo_line_v'),
        redvus_logo_r = document.getElementById('redvus_logo_r'),
        redvus_logo_e_up = document.getElementById('redvus_logo_e_up'),
        redvus_logo_e_middle = document.getElementById('redvus_logo_e_middle'),
        redvus_logo_e_down = document.getElementById('redvus_logo_e_down'),
        redvus_logo_d = document.getElementById('redvus_logo_d'),
        redvus_logo_u_end = document.getElementById('redvus_logo_u_end'),
        redvus_logo_s_end = document.getElementById('redvus_logo_s_end'),
        redvus_logo_studio = document.getElementById('redvus_logo_studio'),
        redvus_logo = document.getElementById('redvus_logo'),
        redvus_shutter_left = document.querySelector('.shutter-left'),
        redvus_shutter_right = document.querySelector('.shutter-right'),
        redvus_menu = document.getElementById('menu'),
        redvus_menu_v = document.getElementById('menu_v'),
        redvus_menu_left = document.getElementById('menu_left_line'),
        redvus_menu_right = document.getElementById('menu_right_line'),
        redvus_menu_up = document.getElementById('menu_up_line'),
        redvus_menu_down = document.getElementById('menu_down_line'),
        redvus_menu_cross = document.getElementById('menu_cross')
        redvusWrapperContent = document.querySelector('.wrapper-front__content')
    ;

    function redvusLogoStart() {

        var tl = new TimelineMax({
            onComplete: redvusFirstSlogan(),
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

        var redvusMenuLi = document.querySelectorAll('.cd-navigation li'),
            redvusAdressLi = document.querySelectorAll('.shutter-right__adress li')
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
            .to(redvusWrapperContent, 0.8, {
                xPercent: '5',
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

        redvus_menu.onclick = function () {
            tl.reversed() ? tl.restart() : tl.reverse(-0.3);
        };

        return tl;
    }

    redvus_menu.onmouseover = function () {
        TweenMax.to(this, 0.4, {
            scale: 1.1,
            ease: Elastic.easeOut.config(0.9, 0.4)
        });
    }, redvus_menu.onmouseleave = function () {
        TweenMax.to(this, 0.2, {
            scale: 1
        });
    };

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

        var redvusMenuLi = document.querySelectorAll('.cd-navigation li'),
            redvusAdressLi = document.querySelectorAll('.shutter-right__adress li')
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

        redvus_menu.onclick = function () {
            tl.reversed() ? tl.restart() : tl.reverse(-0.3);
        };

        return tl;
    }

    // redvus_menu.hover(function () {
    //     TweenMax.to(this, 0.4, {
    //         scale: 1.1,
    //         ease: Elastic.easeOut.config(0.9, 0.4)
    //     });
    // }, function () {
    //     TweenMax.to(this, 0.2, {
    //         scale: 1
    //     });
    // });

    /*=====  End of Menu Mobile  ======*/

    /*======================================
    =            First Projects            =
    ======================================*/

    var sectionFirstProject = document.querySelectorAll('#sectionFirst .section-title'),
        sectionFirstTitle = document.querySelectorAll('#sectionFirst .section-project__text h2'),
        sectionFirstText = document.querySelectorAll('#sectionFirst .section-project__text'),
        sectionFirstDescription = document.querySelectorAll('#sectionFirst .section-project__link'),
        sectionFirstImage = document.querySelectorAll('#sectionFirst .section-project__image'),
        sectionFirst = document.getElementById('sectionFirst'),
        sectionFirstShutterLeft = document.querySelector('.shutter-left'),
        sectionFirstShutterRight = document.querySelector('.shutter-right'),
        wrapperBack = document.querySelector('.wrapper'),
        sectionFirstArrowDown = document.querySelector('.arrow-down'),
        sectionFrontSkills = document.getElementById('frontSkills'),
        sectionFirstTop = document.getElementById('sectionFirstTop'),
        sectionLinkProject = document.querySelectorAll('.section-project__text a::before')
    ;

    var controller = new ScrollMagic.Controller({
        // refreshInterval: 300
    });

    /*----------  First Section Back  ----------*/
    function sectionFirstBackScroll() {
        var sectionFirstBackAction = new ScrollMagic.Scene({
                triggerElement: sectionFirst,
                triggerHook: 0.6,
                duration: '100%'
            })
            .setClassToggle(wrapperBack, 'wrapper--back-first')
            // .addIndicators({
            //     name: 'sectionFirstBack'
            // })
            .addTo(controller)
        ;
    }

    /*----------  First Section Title  ----------*/
    function sectionFirstTitleScroll() {

        var sectionFirstTitleAction = new ScrollMagic.Scene({
                triggerElement: sectionFirst,
                triggerHook: 0.4,
                duration: '100%'
            })
            .setClassToggle(sectionFirstProject, 'is-active')
            // .addIndicators({
            //     name: 'sectionFirstTitle'
            // })
            .addTo(controller)
        ;
    }

    /*----------  First Link Project  ----------*/
    function sectionFirstLinkScroll() {

        // var sectionFirstLinkShow = TweenMax.to(sectionFirstDescription, 0.4, {
        //     // scale: 1.1,
        //     // yPercent: "100",
        //     autoAlpha: 1,
        //     ease: Power1.easeInOut
        // });

        var sectionFirstLinkAction = new ScrollMagic.Scene({
                triggerElement: sectionFirst,
                triggerHook: 0.2,
                duration: '100%'
            })
            // .setTween(sectionFirstLinkShow)
            .setClassToggle(sectionFirstDescription, 'is-active')
            // .addIndicators({
            //     name: 'sectionSecondTitle'
            // })
            .addTo(controller)
        ;
    }

    /*----------  First Arrow Down  ----------*/
    function firstArrowDownScroll() {

        var ArrowDownClear = TweenMax.from(sectionFirstArrowDown, 0.8, {
            // scale: 1.1,
            // yPercent: "100",
            autoAlpha: 0,
            ease: Back.easeInOut
        });

        var firstArrowDownAction = new ScrollMagic.Scene({
                triggerElement: sectionFirst,
                triggerHook: 0.85,
                duration: '100%'
            })
            .setTween(ArrowDownClear)
            // .setClassToggle(sectionFirstArrowDown, 'is-hidden')
            // .addIndicators({
            //     name: 'sectionSecondTitle'
            // })
            .addTo(controller)
        ;
    }

    /*----------  First Section  ----------*/
    function sectionFirstScroll() {

        var tl = new TimelineMax();

        tl
            .to(frontSkills, 0.5, {
                // backgroundColor: "#cccccc",
                autoAlpha: 0,
                // display: 'n_25',
                ease: Power0.easeNone
            })
            .to(sectionFirstTitle, 1, {
                yPercent: "-150%",
                // color: "#201011",
                // autoAlpha: 1,
                // display: 'n_25',
                ease: Power0.easeNone
            }, '-=0.5')
            // .to(sectionFirstDescription, 0.5, {
            //     yPercent: "-100%",
            //     // autoAlpha: 1,
            //     // display: 'n_25',
            //     ease: Power0.easeNone
            // }, '-=1')
            .to(sectionFirstImage, 1, {
                yPercent: "-150%",
                autoAlpha: 1,
                // display: 'n_25',
                ease: Power0.easeNone
            }, '-=1')
            // .set(sectionFirstArrowDown, {className: "+=is-hidden"})
        ;

        var sectionFirstAction = new ScrollMagic.Scene({
                triggerElement: sectionFirst,
                triggerHook: 1,
                duration: '100%'
            })
            .setTween(tl)
            // .setClassToggle(sectionFrontSkills, 'is-hidden')
            // .addIndicators({
            //     name: 'sectionFirst'
            // })
            .addTo(controller)
        ;
    }

    /*=====  End of First Projects  ======*/

    /*======================================
    =            Second Project            =
    ======================================*/

    var sectionSecondProject = document.querySelectorAll('#sectionSecond .section-title'),
        sectionSecondTitle = document.querySelectorAll('#sectionSecond .section-project__text h2'),
        sectionSecondDescription = document.querySelectorAll('#sectionSecond .section-project__link'),
        sectionSecondImage = document.querySelectorAll('#sectionSecond .section-project__image'),
        sectionSecond = document.getElementById('sectionSecond')
    ;

    /*----------  Second Section Back  ----------*/
    function sectionSecondBackScroll() {
        var sectionSecondBackAction = new ScrollMagic.Scene({
                triggerElement: sectionSecond,
                triggerHook: 0.6,
                duration: '100%'
            })
            .setClassToggle(wrapperBack, 'wrapper--back-second')
            // .addIndicators({
            //     name: 'sectionSecondBack'
            // })
            .addTo(controller)
        ;
    }

    /*----------  Second Section Title  ----------*/
    function sectionSecondTitleScroll() {
        var sectionSecondTitleAction = new ScrollMagic.Scene({
                triggerElement: sectionSecond,
                triggerHook: 0.4,
                duration: '100%'
            })
            .setClassToggle(sectionSecondProject, 'is-active')
            // .addIndicators({
            //     name: 'sectionSecondTitle'
            // })
            .addTo(controller)
        ;
    }

    /*----------  Second Link Project  ----------*/
    function sectionSecondLinkScroll() {
        var sectionSecondLinkAction = new ScrollMagic.Scene({
                triggerElement: sectionSecond,
                triggerHook: 0.2,
                duration: '100%'
            })
            .setClassToggle(sectionSecondDescription, 'is-active')
            // .addIndicators({
            //     name: 'sectionSecondTitle'
            // })
            .addTo(controller)
        ;
    }

    /*----------  Second Section  ----------*/
    function sectionSecondScroll() {
        var tl = new TimelineMax();
        tl
            .to(sectionFirst, 0.5, {
                autoAlpha: 0,
                // display: 'n_25',
                ease: Power0.easeNone
            })
            .to(sectionSecondTitle, 1, {
                yPercent: "-150%",
                // color: "#201011",
                // autoAlpha: 1,
                // display: 'n_25',
                ease: Power0.easeNone
            }, '-=0.5')
            // .to(sectionSecondDescription, 0.5, {
            //     yPercent: "-100%",
            //     // autoAlpha: 1,
            //     // display: 'n_25',
            //     ease: Power0.easeNone
            // }, '-=1')
            .to(sectionSecondImage, 1, {
                yPercent: "-150%",
                autoAlpha: 1,
                // display: 'n_25',
                ease: Power0.easeNone
            }, '-=1')
            // .set(sectionFirstArrowDown, {className: "+=is-hidden"})
        ;

        var sectionSecondAction = new ScrollMagic.Scene({
                triggerElement: sectionSecond,
                triggerHook: 1,
                duration: '100%'
            })
            .setTween(tl)
            // .addIndicators({
            //     name: 'sectionSecond'
            // })
            .addTo(controller)
        ;
    }

    /*=====  End of Second Project  ======*/

    /*=====================================
    =            Bottom Section            =
    =====================================*/

    var sectionBottomProject = document.querySelectorAll('#sectionBottom .section-title'),
        sectionBottomTitle = document.querySelectorAll('#sectionBottom .section-project__text h2'),
        sectionBottomImage = document.querySelectorAll('#sectionBottom .section-project__image'),
        sectionBottom = document.getElementById('sectionBottom'),
        sectionSecondText = document.querySelectorAll('#sectionSecond .section-project__text'),
        sectionBottomLink = document.querySelectorAll('#sectionBottom ul > li')
    ;

    /*----------  Bottom Section Title  ----------*/
    function sectionBottomTitleScroll() {
        var sectionBottomTitleAction = new ScrollMagic.Scene({
                triggerElement: sectionBottom,
                triggerHook: 0.6,
                duration: '100%'
            })
            .setClassToggle(sectionBottomProject, 'is-active')
            // .addIndicators({
            //     name: 'sectionSecondTitle'
            // })
            .addTo(controller)
        ;
    }

    /*----------  Bottom Section  ----------*/
    function sectionBottomScroll() {
        var tl = new TimelineMax();
        tl
            // .to([sectionSecondText, sectionSecondImage], 0.5, {
            //     autoAlpha: 0,
            //     // display: 'n_25',
            //     ease: Power0.easeNone
            // })
            .staggerFrom(sectionBottomLink, 0.6, {
                // scale: 1.1,
                yPercent: "20",
                autoAlpha: 0,
                ease: Back.easeInOut
            }, 0.1)
            // .set(sectionFirstArrowDown, {className: "+=is-hidden"})
        ;

        var sectionBottomAction = new ScrollMagic.Scene({
                triggerElement: sectionBottom,
                triggerHook: 0.85,
                duration: '100%'
            })
            .setTween(tl)
            // .addIndicators({
            //     name: 'sectionBottom'
            // })
            .addTo(controller)
        ;
    }

    /*=====  End of Bottom Section  ======*/

    function init() {

        redvusLogoStart();
        redvusMenuOpen();

        sectionFirstScroll();
        sectionFirstBackScroll();
        sectionFirstTitleScroll();
        sectionFirstLinkScroll();
        firstArrowDownScroll();

        sectionSecondScroll();
        sectionSecondBackScroll();
        sectionSecondTitleScroll();
        sectionSecondLinkScroll();

        sectionBottomScroll();
        sectionBottomTitleScroll();
    }

    function initMobile() {
        redvusLogoStartMobile();
        redvusMenuOpenMobile();

        sectionFirstScroll();
        sectionFirstBackScroll();
        sectionFirstTitleScroll();
        sectionFirstLinkScroll();
        // firstArrowDownScroll();

        sectionSecondScroll();
        sectionSecondBackScroll();
        sectionSecondTitleScroll();
        sectionSecondLinkScroll();

        sectionBottomScroll();
        sectionBottomTitleScroll();
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