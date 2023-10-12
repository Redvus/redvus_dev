function frontScroll() {

    const sectionFront_0 = document.getElementById('sectionFront_0'),
        sectionFront_1 = document.getElementById('sectionFront_1'),
        sectionFront_2 = document.getElementById('sectionFront_2'),
        sectionFront_3 = document.getElementById('sectionFront_3'),
        sectionFront_4 = document.getElementById('sectionFront_4'),
        sectionFront_5 = document.getElementById('sectionFront_5'),
        sectionFront_6 = document.getElementById('sectionFront_6'),
        sloganTopDesign = document.getElementById('sloganTopDesign'),
        sloganTopSmart = document.getElementById('sloganTopSmart'),
        sloganTopEffective = document.getElementById('sloganTopEffective'),
        sloganTopVisual = document.getElementById('sloganTopVisual'),
        sloganTopUnic = document.getElementById('sloganTopUnic'),
        sloganTopSpecific = document.getElementById('sloganTopSpecific'),
        sloganTopLine = document.getElementById('sectionTopLine'),
        scrollMarker_0 = document.getElementById('scrollMarker_0'),
        scrollMarker_1 = document.getElementById('scrollMarker_1'),
        scrollMarker_2 = document.getElementById('scrollMarker_2'),
        scrollMarker_3 = document.getElementById('scrollMarker_3'),
        scrollMarker_4 = document.getElementById('scrollMarker_4'),
        scrollMarker_5 = document.getElementById('scrollMarker_5'),
        scrollMarker_6 = document.getElementById('scrollMarker_6'),
        scrollName = new ScrollChange();
    ;

    const projectFrontAnim = new ProjectFront(),
        projectTitle_0 = document.getElementById('projectTitle_0'),
        projectImage_0 = document.getElementById('projectImage_0'),
        projectLink_0 = document.getElementById('projectLink_0'),
        projectTitle_1 = document.getElementById('projectTitle_1'),
        projectImage_1 = document.getElementById('projectImage_1'),
        projectLink_1 = document.getElementById('projectLink_1'),
        projectTitle_2 = document.getElementById('projectTitle_2'),
        projectImage_2 = document.getElementById('projectImage_2'),
        projectLink_2 = document.getElementById('projectLink_2'),
        projectTitle_3 = document.getElementById('projectTitle_3'),
        projectImage_3 = document.getElementById('projectImage_3'),
        projectLink_3 = document.getElementById('projectLink_3'),
        projectTitle_4 = document.getElementById('projectTitle_4'),
        projectImage_4 = document.getElementById('projectImage_4'),
        projectLink_4 = document.getElementById('projectLink_4'),
        projectTitle_5 = document.getElementById('projectTitle_5'),
        projectImage_5 = document.getElementById('projectImage_5'),
        projectLink_5 = document.getElementById('projectLink_5'),
        projectTitle_6 = document.getElementById('projectTitle_6'),
        projectImage_6 = document.getElementById('projectImage_6'),
        projectLink_6 = document.getElementById('projectLink_6')
    ;

    scrollName.scrollChangeName(sectionFront_1, "rgb(56,66,82)", scrollMarker_1, scrollMarker_0);
    scrollName.scrollChangeName(sectionFront_2, "rgb(57,50,70)", scrollMarker_2, scrollMarker_1);
    scrollName.scrollChangeName(sectionFront_3, "rgb(56,75,82)", scrollMarker_3, scrollMarker_2);
    scrollName.scrollChangeName(sectionFront_4, "rgb(56,82,74)", scrollMarker_4, scrollMarker_3);
    scrollName.scrollChangeName(sectionFront_5, "rgb(76,56,82)", scrollMarker_5, scrollMarker_4);
    scrollName.scrollChangeName(sectionFront_6, "rgb(82,56,67)", scrollMarker_6, scrollMarker_5);

    function sectionTopMove() {
        let tl = new gsap.timeline({
            scrollTrigger: {
                trigger: sectionFront_0,
                scroller: wrapper,
                scrub: true,
                start: "top top",
                end: () => "+=" + sectionFront_0.offsetHeight,
                toggleActions: "play none none reverse"
            }
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
                y: "-20%"
            })
            .to(sloganTopDesign, {
                duration: '0.6',
                delay: "-0.2",
                x: "-5%",
                autoAlpha: 0
            })
            .to([sloganTopSpecific, sloganTopUnic, sloganTopVisual], {
                duration: '0.6',
                delay: "-1.1",
                stagger: "0.1",
                y: "20%",
                autoAlpha: 0
            })
        ;

        ScrollTrigger.refresh();
    }
    sectionTopMove();

    projectFrontAnim.projectFrontSimple(
        sectionFront_1,
        projectTitle_1,
        projectLink_1,
        projectImage_0,
        projectImage_1);

    projectFrontAnim.projectFrontSimple(
        sectionFront_2,
        projectTitle_2,
        projectLink_2,
        projectImage_1,
        projectImage_2);

    // projectFrontAnim.projectFrontTopNext(
    //     sectionFront_1,
    //     projectTitle_1,
    //     projectImage_1,
    //     projectLink_1,
    //     projectTitle_0,
    //     projectImage_0,
    //     projectLink_0
    // );
    //
    // projectFrontAnim.projectFrontTopNext(
    //     sectionFront_2,
    //     projectTitle_2,
    //     projectImage_2,
    //     projectLink_2,
    //     projectTitle_1,
    //     projectImage_1,
    //     projectLink_1
    // );
    //
    // projectFrontAnim.projectFrontTopNext(
    //     sectionFront_3,
    //     projectTitle_3,
    //     projectImage_3,
    //     projectLink_3,
    //     projectTitle_2,
    //     projectImage_2,
    //     projectLink_2
    // );
    //
    // projectFrontAnim.projectFrontTopNext(
    //     sectionFront_4,
    //     projectTitle_4,
    //     projectImage_4,
    //     projectLink_4,
    //     projectTitle_3,
    //     projectImage_3,
    //     projectLink_3
    // );
    //
    // projectFrontAnim.projectFrontTopNext(
    //     sectionFront_5,
    //     projectTitle_5,
    //     projectImage_5,
    //     projectLink_5,
    //     projectTitle_4,
    //     projectImage_4,
    //     projectLink_4
    // );
    //
    // projectFrontAnim.projectFrontTopNext(
    //     sectionFront_6,
    //     projectTitle_6,
    //     projectImage_6,
    //     projectLink_6,
    //     projectTitle_5,
    //     projectImage_5,
    //     projectLink_5
    // );
}

