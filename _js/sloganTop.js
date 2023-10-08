function sloganTopLoad() {

    const sectionTopBlock = document.createElement('div'),
        sectionTop = document.querySelector('.section-top')
    ;

    sectionTopBlock.className = 'section-top__block';
    sectionTopBlock.innerHTML = `
        <img src="assets/images/sloganTop/sloganTop_smart.svg" id="sloganTop_smart" alt="Разумный">
        <img src="assets/images/sloganTop/sloganTop_effective.svg" id="sloganTop_effective" alt="Эффективный">
        <img src="assets/images/sloganTop/sloganTop_design.svg" id="sloganTop_design" alt="Дизайн">
        <img src="assets/images/sloganTop/sloganTop_visual.svg" id="sloganTop_visual" alt="Визуально">
        <img src="assets/images/sloganTop/sloganTop_unic.svg" id="sloganTop_unic" alt="Уникальный">
        <img src="assets/images/sloganTop/sloganTop_specific.svg" id="sloganTop_specific" alt="Самобытный">
        <div class="section-top__line" id="sectionTopLine">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="1000" viewBox="0 0 10 1000">
                <line id="Line_1" data-name="Line 1" y2="1000" transform="translate(5 5)"/>
            </svg>
        </div>
    `;
    sectionTop.appendChild(sectionTopBlock);

    const sloganTopDesign = document.getElementById('sloganTop_design'),
        sloganTopSmart = document.getElementById('sloganTop_smart'),
        sloganTopEffective = document.getElementById('sloganTop_effective'),
        sloganTopVisual = document.getElementById('sloganTop_visual'),
        sloganTopUnic = document.getElementById('sloganTop_unic'),
        sloganTopSpecific = document.getElementById('sloganTop_specific'),
        sloganTopLine = document.getElementById('sectionTopLine')
    ;

    let tl = gsap.timeline({
        delay: "-0.5"
    });
    tl
        .from(sloganTopDesign, {
            duration: 1.3,
            delay: 0.7,
            autoAlpha: 0
        })
        .from([sloganTopSmart, sloganTopEffective], {
            duration: 0.8,
            delay: "-0.8",
            stagger: "0.1",
            x: "-10%",
            autoAlpha: 0,
            ease: "back.inOut"
        })
        .from([sloganTopVisual, sloganTopUnic, sloganTopSpecific], {
            duration: 0.8,
            delay: "-0.8",
            stagger: "0.1",
            x: "10%",
            autoAlpha: 0,
            ease: "back.inOut"
        })
        .from(sloganTopLine, {
            duration: 1,
            delay: "-0.4",
            y: "5%",
            autoAlpha: 0,
            ease: "elastic"
        })
    ;
}

// sloganTopLoad();