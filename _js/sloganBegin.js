'use strict';

function sloganBeginLoad() {
    const wrapperBegin = document.querySelector('.wrapper'),
        containerSlogan = document.createElement('div'),
        wrapperShutterLeft = document.createElement('div'),
        wrapperShutterRight = document.createElement('div')
    ;

    wrapperBegin.className += ' wrapper-begin';
    wrapperShutterLeft.className = 'wrapper__shutter wrapper__shutter_left';
    wrapperShutterRight.className = 'wrapper__shutter wrapper__shutter_right';

    containerSlogan.className += 'container-begin';
    containerSlogan.innerHTML = `
    <img src="assets/images/slogan/sloganBegin_ne.svg" id="sloganBegin_ne" alt="Не">
    <img src="assets/images/slogan/sloganBegin_vseTak.svg" id="sloganBegin_vseTak" alt="Все так">
    <img src="assets/images/slogan/sloganBegin_simple.svg" id="sloganBegin_simple" alt="Просто">
    <img src="assets/images/slogan/sloganBegin_asItSeems.svg" id="sloganBegin_asItSeems" alt="Как кажется">
    <img src="assets/images/slogan/sloganBegin_hard.svg" id="sloganBegin_hard" alt="Сложно">
    <img src="assets/images/slogan/sloganBegin_looksLke.svg" id="sloganBegin_looksLke" alt="Выглядит на самом деле">
`;
    wrapperBegin.appendChild(containerSlogan);
    wrapperBegin.appendChild(wrapperShutterLeft);
    wrapperBegin.appendChild(wrapperShutterRight);

    const sloganBegin_ne = document.getElementById('sloganBegin_ne'),
        sloganBegin_vseTak = document.getElementById('sloganBegin_vseTak'),
        sloganBegin_simple = document.getElementById('sloganBegin_simple'),
        sloganBegin_asItSeems = document.getElementById('sloganBegin_asItSeems'),
        sloganBegin_hard = document.getElementById('sloganBegin_hard'),
        sloganBegin_looksLke = document.getElementById('sloganBegin_looksLke')
    ;

    let tl = gsap.timeline({
        onComplete: () => {
            wrapperBegin.removeChild(containerSlogan);
            wrapperBegin.className = 'wrapper';
            let tlShutter = gsap.timeline({
                onComplete: () => {
                    wrapperBegin.removeChild(wrapperShutterLeft);
                    wrapperBegin.removeChild(wrapperShutterRight);
                }
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
        }
    });

    tl
        .from([sloganBegin_ne, sloganBegin_vseTak, sloganBegin_simple], {
            duration: 0.8,
            stagger: 0.2,
            x: '-7%',
            autoAlpha: 0,
            ease: "back.inOut"
        })
        .from(sloganBegin_asItSeems, {
            duration: 0.8,
            delay: "-0.7",
            x: '7%',
            autoAlpha: 0,
            ease: "back.inOut"
        })
        .to(sloganBegin_simple, {
            duration: 0.3,
            delay: "0.7",
            autoAlpha: 0,
            y: "440%"
        })
        .to(sloganBegin_asItSeems, {
            duration: 0.3,
            delay: "-0.3",
            autoAlpha: 0,
            y: "-10%"
        })
        .from(sloganBegin_hard, {
            duration: 0.8,
            delay: "-0.2",
            x: '-7%',
            autoAlpha: 0,
            ease: "back.inOut"
        })
        .from(sloganBegin_looksLke, {
            duration: 0.8,
            delay: "-0.8",
            x: '57%',
            autoAlpha: 0,
            ease: "back.inOut"
        })
        .to(sloganBegin_ne, {
            duration: 0.3,
            delay: "0.8",
            y: '-15%',
            autoAlpha: 0
        })
        .to(sloganBegin_vseTak, {
            duration: 0.3,
            delay: "-0.3",
            x: '-15%',
            autoAlpha: 0
        })
        .to(sloganBegin_hard, {
            duration: 0.3,
            delay: "-0.1",
            y: '515%',
            autoAlpha: 0
        })
        .to(sloganBegin_looksLke, {
            duration: 0.3,
            delay: "-0.1",
            x: '65%',
            autoAlpha: 0
        })
    ;
}

sloganBeginLoad();