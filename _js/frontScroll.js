function frontScroll() {

    const sectionFront_0 = document.getElementById('sectionFront_0'),
        sectionFront_1 = document.getElementById('sectionFront_1'),
        sectionFront_2 = document.getElementById('sectionFront_2'),
        sloganTopDesign = document.getElementById('sloganTopDesign'),
        sloganTopSmart = document.getElementById('sloganTopSmart'),
        sloganTopEffective = document.getElementById('sloganTopEffective'),
        sloganTopVisual = document.getElementById('sloganTopVisual'),
        sloganTopUnic = document.getElementById('sloganTopUnic'),
        sloganTopSpecific = document.getElementById('sloganTopSpecific'),
        sloganTopLine = document.getElementById('sectionTopLine')
    ;

    function sectionTopMove() {

        let tl = new gsap.timeline({
            scrollTrigger: {
                trigger: sectionFront_0,
                scroller: wrapper,
                scrub: true,
                start: "top top",
                end: "bottom top",
                toggleActions: "play none none reverse"
            },
            // onStart: () => {
            //     tl.set(scrollMarkerTop, {
            //         backgroundColor: '#f2a07c'
            //     })
            // }
        });

        tl
            .to(sloganTopLine, {
                duration: '0.6',
                y: '3%',
                autoAlpha: 0
            })
            .to([sloganTopSmart, sloganTopEffective], {
                duration: 0.6,
                delay: "-0.6",
                stagger: "0.1",
                autoAlpha: 0,
                y: "-10%"
            })
            .to(sloganTopDesign, {
                duration: '0.6',
                delay: "-0.2",
                x: "-5%",
                autoAlpha: 0
            })
            .to([sloganTopSpecific, sloganTopUnic, sloganTopVisual], {
                duration: '0.6',
                delay: "-1",
                stagger: "0.1",
                y: "5%",
                autoAlpha: 0
            })
        ;

        ScrollTrigger.refresh();
    }
    sectionTopMove();
}

