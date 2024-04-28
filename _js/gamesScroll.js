function gamesScroll() {

    const
        sectionGame_0 = document.getElementById('sectionGame_0'),
        sectionGame_1 = document.getElementById('sectionGame_1'),
        sectionGame_2 = document.getElementById('sectionGame_2'),
        sectionGame_3 = document.getElementById('sectionGame_3'),
        sectionGame_4 = document.getElementById('sectionGame_4'),
        sectionGame_5 = document.getElementById('sectionGame_5'),
        sectionGame_6 = document.getElementById('sectionGame_6'),
        sectionGame_7 = document.getElementById('sectionGame_7'),
        sectionGame_8 = document.getElementById('sectionGame_8'),
        sectionGame_9 = document.getElementById('sectionGame_9'),
        sectionGame_10 = document.getElementById('sectionGame_10'),
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
        scrollMarker_7 = document.getElementById('scrollMarker_7'),
        scrollMarker_8 = document.getElementById('scrollMarker_8'),
        scrollMarker_9 = document.getElementById('scrollMarker_9'),
        scrollMarker_10 = document.getElementById('scrollMarker_10'),
        scrollName = new ScrollChange();
    ;

    const
        projectFrontAnim = new ProjectFront(),
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
        projectLink_6 = document.getElementById('projectLink_6'),
        projectTitle_7 = document.getElementById('projectTitle_7'),
        projectImage_7 = document.getElementById('projectImage_7'),
        projectLink_7 = document.getElementById('projectLink_7')
    ;

    // Интро
    scrollName.scrollChangeWihoutColor(
        sectionGame_1,
        scrollMarker_1,
        scrollMarker_0);

    // Игросказы
    scrollName.scrollChangeWihoutColor(
        sectionGame_2,
        scrollMarker_2,
        scrollMarker_1);

    // Старая квартира
    scrollName.scrollChangeWihoutColor(
        sectionGame_3,
        scrollMarker_3,
        scrollMarker_2);

    // Волшебное перо
    scrollName.scrollChangeWihoutColor(
        sectionGame_4,
        scrollMarker_4,
        scrollMarker_3);

    // // Краеведия
    scrollName.scrollChangeWihoutColor(
        sectionGame_5,
        scrollMarker_5,
        scrollMarker_4);

    // // Космические пазлы
    scrollName.scrollChangeWihoutColor(
        sectionGame_6,
        scrollMarker_6,
        scrollMarker_5);

    // Славянские мифы
    scrollName.scrollChangeWihoutColor(
        sectionGame_7,
        scrollMarker_7,
        scrollMarker_6);


    // Games
    projectFrontAnim.projectGame(
        sectionGame_1,
        projectTitle_1,
        projectLink_1,
        projectImage_0,
        projectImage_1);

    projectFrontAnim.projectGame(
        sectionGame_2,
        projectTitle_2,
        projectLink_2,
        projectImage_1,
        projectImage_2);

    projectFrontAnim.projectGame(
        sectionGame_3,
        projectTitle_3,
        projectLink_3,
        projectImage_2,
        projectImage_3);

    projectFrontAnim.projectGame(
        sectionGame_4,
        projectTitle_4,
        projectLink_4,
        projectImage_3,
        projectImage_4);

    projectFrontAnim.projectGame(
        sectionGame_5,
        projectTitle_5,
        projectLink_5,
        projectImage_4,
        projectImage_5);projectImage_5

    projectFrontAnim.projectGame(
        sectionGame_6,
        projectTitle_6,
        projectLink_6,
        projectImage_5,
        projectImage_6);

    projectFrontAnim.projectGame(
        sectionGame_7,
        projectTitle_7,
        projectLink_7,
        projectImage_6,
        projectImage_7);
}

