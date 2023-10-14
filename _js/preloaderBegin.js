'use strict';

function preloaderBeginLoad() {
    const wrapperBegin = document.querySelector('.wrapper-begin'),
        bodyBlock = document.body,
        wrapperShutterLeft = document.querySelector('.wrapper__shutter_left'),
        wrapperShutterRight = document.querySelector('.wrapper__shutter_right')
    ;

    function preloaderBeginAnim() {
        let tlShutter = gsap.timeline({
            onComplete: () => {
                wrapperBegin.removeChild(wrapperShutterLeft);
                wrapperBegin.removeChild(wrapperShutterRight);
                bodyBlock.removeChild(wrapperBegin);
            },
            delay: "-0.3"
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

    preloaderBeginAnim();
}