class ScrollChange {

    scrollChangeName(sectionNum, sectionNumColor, scrollNumFrom, scrollNumTo) {
        const wrapperChange = document.querySelector('.wrapper__top');

        let tl = new gsap.timeline({
            scrollTrigger: {
                trigger: sectionNum,
                scroller: wrapper,
                scrub: false,
                start: "bottom bottom",
                end: () => "+=" + sectionNum.offsetHeight,
                toggleActions: "play none none reverse"
            }
        });

        tl
            .to(scrollNumTo, {
                duration: 0.2,
                y: "-50%",
                autoAlpha: 0
            })
            .fromTo(scrollNumFrom, {
                y: "50%",
                autoAlpha: 0
            }, {
                duration: 0.2,
                y: 0,
                autoAlpha: 1
            })
            .to(wrapperChange, {
                duration: 0.4,
                delay: "-0.4",
                backgroundColor: sectionNumColor
            })
        ;
        ScrollTrigger.refresh();
    }

    scrollChangeNameMobile(sectionNum, sectionNumColor, scrollNumFrom, scrollNumTo) {
        const wrapperChange = document.querySelector('.wrapper__top'),
            shutterLeft = document.querySelector('.shutter-left'),
            shutterRight = document.querySelector('.shutter-right')
        ;

        let tl = new gsap.timeline({
            scrollTrigger: {
                trigger: sectionNum,
                scroller: wrapper,
                scrub: false,
                start: "bottom bottom",
                end: () => "+=" + sectionNum.offsetHeight,
                toggleActions: "play none none reverse"
            }
        });

        tl
            .to(scrollNumTo, {
                duration: 0.2,
                y: "-50%",
                autoAlpha: 0
            })
            .fromTo(scrollNumFrom, {
                y: "50%",
                autoAlpha: 0
            }, {
                duration: 0.2,
                y: 0,
                autoAlpha: 1
            })
            .to([wrapperChange, shutterLeft, shutterRight], {
                duration: 0.4,
                delay: "-0.4",
                backgroundColor: sectionNumColor
            })
        ;
        ScrollTrigger.refresh();
    }
}