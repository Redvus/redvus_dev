
function initMain() {
    preloaderGamesLoad();
    scrollSmooth();
    redvusMenuOpen();
}

function initMainMobile() {
    preloaderBeginMobileLoad();
    scrollSmoothMobile();
    redvusMenuOpenMobile();
}

if (document.body.clientWidth > 820 || screen.width > 820) {
    initMain();
} else {
    initMainMobile();
}