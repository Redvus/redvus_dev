

function initMain() {
    keyLock();
    scrollSmooth();
    sloganBeginLoad();
    redvusMenuOpen();
}

function initMainMobile() {
    sloganBeginLoadMobile();
    redvusMenuOpenMobile();
}

if (document.body.clientWidth > 820 || screen.width > 820) {
    initMain();
} else {
    initMainMobile();
}