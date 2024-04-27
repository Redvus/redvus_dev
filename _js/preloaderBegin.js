'use strict';

function preloaderBeginLoad() {
    const wrapperBegin = document.querySelector('.wrapper-begin'),
        bodyBlock = document.body,
        containerSlogan = document.createElement('div'),
        wrapperShutterLeft = document.querySelector('.wrapper__shutter_left'),
        wrapperShutterRight = document.querySelector('.wrapper__shutter_right')
    ;

    containerSlogan.className += 'wrapper-begin__container';
    containerSlogan.innerHTML = `
        <picture class="wrapper-begin__images">
            <img src="assets/images/front/small/benchmark_s.png" alt="" id="preloaderImage_1">
            <img src="assets/images/front/small/dap_s.png" alt="" id="preloaderImage_2">
            <img src="assets/images/front/small/smibs_s.png" alt="" id="preloaderImage_3">
            <img src="assets/images/front/small/forte_s.png" alt="" id="preloaderImage_4">
            <img src="assets/images/front/small/tarzaniya_s.png" alt="" id="preloaderImage_5">
        </picture>
    `;
    wrapperBegin.appendChild(containerSlogan);

    const preloaderImage_1 = document.getElementById('preloaderImage_1'),
        preloaderImage_2 = document.getElementById('preloaderImage_2'),
        preloaderImage_3 = document.getElementById('preloaderImage_3'),
        preloaderImage_4 = document.getElementById('preloaderImage_4'),
        preloaderImage_5 = document.getElementById('preloaderImage_5')
    ;

    function preloaderBeginAnim() {
        let tl = gsap.timeline({
           onComplete: () => {
               wrapperBegin.removeChild(containerSlogan);
               let tlShutter = gsap.timeline({
                   onComplete: () => {
                       wrapperBegin.removeChild(wrapperShutterLeft);
                       wrapperBegin.removeChild(wrapperShutterRight);
                       bodyBlock.removeChild(wrapperBegin);
                   },
                   delay: "-0.2"
               });
               tlShutter
                   .to(wrapperShutterLeft, {
                       duration: 0.4,
                       delay: "0.4",
                       x: "-100%",
                       zIndex: "-1"
                   })
                   .to(wrapperShutterRight, {
                       duration: 0.4,
                       delay: "-0.4",
                       x: "100%",
                       zIndex: "-1"
                   })
               ;
               redvusLogoStart();
               redvusMenuStart();
           }
        });

        tl
            .fromTo(preloaderImage_1, {
                autoAlpha: 0
            }, {
                duration: 0.05,
                autoAlpha: 1
            })
            .to(preloaderImage_1, {
                duration: 0.05,
                delay: 0.1,
                autoAlpha: 0
            })
            .fromTo(preloaderImage_2, {
                autoAlpha: 0
            }, {
                duration: 0.05,
                autoAlpha: 1
            })
            .to(preloaderImage_2, {
                duration: 0.05,
                delay: 0.1,
                autoAlpha: 0
            })
            .fromTo(preloaderImage_3, {
                autoAlpha: 0
            }, {
                duration: 0.05,
                autoAlpha: 1
            })
            .to(preloaderImage_3, {
                duration: 0.05,
                delay: 0.1,
                autoAlpha: 0
            })
            .fromTo(preloaderImage_4, {
                autoAlpha: 0
            }, {
                duration: 0.05,
                autoAlpha: 1
            })
            .to(preloaderImage_4, {
                duration: 0.05,
                delay: 0.1,
                autoAlpha: 0
            })
            .fromTo(preloaderImage_5, {
                autoAlpha: 0
            }, {
                duration: 0.05,
                autoAlpha: 1
            })
            .to(preloaderImage_5, {
                duration: 0.05,
                delay: 0.1,
                autoAlpha: 0
            })
        ;
    }

    preloaderBeginAnim();
}

function preloaderBeginMobileLoad() {
    const wrapperBegin = document.querySelector('.wrapper-begin'),
        bodyBlock = document.body,
        containerSlogan = document.createElement('div'),
        wrapperShutterLeft = document.querySelector('.wrapper__shutter_left'),
        wrapperShutterRight = document.querySelector('.wrapper__shutter_right')
    ;

    containerSlogan.className += 'wrapper-begin__container';
    containerSlogan.innerHTML = `
        <picture class="wrapper-begin__images">
            <img src="assets/images/front/small/benchmark_s.png" alt="" id="preloaderImage_1">
            <img src="assets/images/front/small/dap_s.png" alt="" id="preloaderImage_2">
            <img src="assets/images/front/small/smibs_s.png" alt="" id="preloaderImage_3">
            <img src="assets/images/front/small/forte_s.png" alt="" id="preloaderImage_4">
            <img src="assets/images/front/small/tarzaniya_s.png" alt="" id="preloaderImage_5">
        </picture>
    `;
    wrapperBegin.appendChild(containerSlogan);

    const preloaderImage_1 = document.getElementById('preloaderImage_1'),
        preloaderImage_2 = document.getElementById('preloaderImage_2'),
        preloaderImage_3 = document.getElementById('preloaderImage_3'),
        preloaderImage_4 = document.getElementById('preloaderImage_4'),
        preloaderImage_5 = document.getElementById('preloaderImage_5')
    ;

    function preloaderBeginAnim() {
        let tl = gsap.timeline({
            onComplete: () => {
                wrapperBegin.removeChild(containerSlogan);
                let tlShutter = gsap.timeline({
                    onComplete: () => {
                        wrapperBegin.removeChild(wrapperShutterLeft);
                        wrapperBegin.removeChild(wrapperShutterRight);
                        bodyBlock.removeChild(wrapperBegin);
                    },
                    delay: "-0.2"
                });
                tlShutter
                    .to(wrapperShutterLeft, {
                        duration: 0.4,
                        delay: "0.4",
                        y: "-100%",
                        zIndex: "-1"
                    })
                    .to(wrapperShutterRight, {
                        duration: 0.4,
                        delay: "-0.4",
                        y: "100%",
                        zIndex: "-1"
                    })
                ;
                redvusLogoStart();
                redvusMenuStart();
            }
        });

        tl
            .fromTo(preloaderImage_1, {
                autoAlpha: 0
            }, {
                duration: 0.05,
                autoAlpha: 1
            })
            .to(preloaderImage_1, {
                duration: 0.05,
                delay: 0.1,
                autoAlpha: 0
            })
            .fromTo(preloaderImage_2, {
                autoAlpha: 0
            }, {
                duration: 0.05,
                autoAlpha: 1
            })
            .to(preloaderImage_2, {
                duration: 0.05,
                delay: 0.1,
                autoAlpha: 0
            })
            .fromTo(preloaderImage_3, {
                autoAlpha: 0
            }, {
                duration: 0.05,
                autoAlpha: 1
            })
            .to(preloaderImage_3, {
                duration: 0.05,
                delay: 0.1,
                autoAlpha: 0
            })
            .fromTo(preloaderImage_4, {
                autoAlpha: 0
            }, {
                duration: 0.05,
                autoAlpha: 1
            })
            .to(preloaderImage_4, {
                duration: 0.05,
                delay: 0.1,
                autoAlpha: 0
            })
            .fromTo(preloaderImage_5, {
                autoAlpha: 0
            }, {
                duration: 0.05,
                autoAlpha: 1
            })
            .to(preloaderImage_5, {
                duration: 0.05,
                delay: 0.1,
                autoAlpha: 0
            })
        ;
    }

    preloaderBeginAnim();
}