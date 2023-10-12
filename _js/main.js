

function initMain() {
    scrollSmooth();
    // sloganBeginLoad();
    sloganTopLoad();
    frontScroll();
}

function initMainMobile() {

}

if (document.body.clientWidth > 820 || screen.width > 820) {
    initMain();
} else {
    initMainMobile();
}