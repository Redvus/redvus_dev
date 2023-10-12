class ProjectFront {

    projectFrontTop(projectNum, projectTitle, projectImage, projectLink) {
        let tl = new gsap.timeline({
            scrollTrigger: {
                trigger: projectNum,
                scroller: wrapper,
                scrub: false,
                start: "top top",
                end: () => "+=" + projectNum.offsetHeight,
                toggleActions: "play none none reverse"
            },
            // onStart: () => {
            //     tl.set(wrapper, {
            //
            //     })
            // }
        });

        tl
            .from(projectTitle, {
                duration: 0.6,
                delay: "-0.4",
                autoAlpha: 0,
                scale: "1.03"
            })
            .from(projectImage, {
                duration: 0.6,
                delay: "-0.4",
                autoAlpha: 0,
                y: "2%",
                ease: "back.inOut"
            })
            .from(projectLink, {
                duration: 0.8,
                delay: "-0.6",
                autoAlpha: 0,
                x: "-3%",
                ease: "back.inOut"
            })
        ;
    }

    projectFrontTopNext(projectNum,
                        projectTitleNext,
                        projectImageNext,
                        projectLinkNext,
                        projectTitlePrev,
                        projectImagePrev,
                        projectLinkPrev) {
        let tl = new gsap.timeline({
            scrollTrigger: {
                trigger: projectNum,
                scroller: wrapper,
                scrub: false,
                start: "top top",
                end: "100% top",
                toggleActions: "play none none reverse"
            }
        });

        tl
            .to(projectImagePrev, {
                duration: 0.3,
                delay: "-0.1",
                autoAlpha: 0,
                y: "-7%",
                ease: "back.inOut"
            })
            .to(projectTitlePrev, {
                duration: 0.3,
                delay: "-0.1",
                autoAlpha: 0,
                y: "-7%",
                ease: "back.inOut"
            })
            .to(projectLinkPrev, {
                duration: 0.3,
                delay: "-0.1",
                autoAlpha: 0,
                y: "-7%",
            })
            .fromTo(projectImageNext, {
                autoAlpha: 0,
                y: "7%"
            }, {
                duration: 0.4,
                delay: "-0.1",
                autoAlpha: 1,
                y: 0,
                ease: "back.inOut"
            })
            .fromTo(projectTitleNext, {
                autoAlpha: 0,
                y: "7%"
            }, {
                duration: 0.3,
                delay: "-0.1",
                autoAlpha: 1,
                y: 0,
                ease: "back.inOut"
            })
            .fromTo(projectLinkNext, {
                autoAlpha: 0,
                y: "7%"
            }, {
                duration: 0.3,
                delay: "-0.1",
                autoAlpha: 1,
                y: 0,
                ease: "back.inOut"
            })
        ;
        ScrollTrigger.refresh();
    }

    projectFrontSimple(
        projectNum,
        projectTitle,
        projectLink,
        projectImagePrev,
        projectImageNext) {
        let tl = new gsap.timeline({
            scrollTrigger: {
                trigger: projectNum,
                scroller: wrapper,
                scrub: false,
                start: "bottom bottom",
                end: () => "+=" + projectNum.offsetHeight,
                toggleActions: "play none none reverse"
            }
        });

        tl
            .to(projectImagePrev, {
                autoAlpha: 0,
                scale: "0.95"
            })
            .from(projectImageNext, {
                duration: 0.6,
                delay: "-0.5",
                autoAlpha: 0,
                scale: "1.05"
            })
            .from(projectTitle, {
                duration: 0.6,
                delay: "-0.5",
                autoAlpha: 0

            })
            .from(projectLink, {
                duration: 0.6,
                delay: "-0.5",
                autoAlpha: 0
            })
        ;
        ScrollTrigger.refresh();
    }
}