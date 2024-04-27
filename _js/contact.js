;(function ($) {

function init() {
    preloaderBeginLoad();
    redvusMenuOpen();
}

function initMobile() {
    preloaderBeginMobileLoad();
    redvusMenuOpenMobile();
}

if (document.body.clientWidth > 420 || screen.width > 420) {
    window.onload = function() {
        init();
    };
} else {
    window.onload = function() {
        initMobile();
    };
}

/*=============================================
=            Attach file            =
=============================================*/

// document.querySelector("html").classList.add('js');

// var fileInput = document.querySelector(".input-file"),
//     button = document.querySelector(".input-file-trigger"),
//     the_return = document.querySelector(".file-return");

// button.addEventListener("keydown", function (event) {
//     if (event.keyCode == 13 || event.keyCode == 32) {
//         fileInput.focus();
//     }
// });
// button.addEventListener("click", function (event) {
//     fileInput.focus();
//     return false;
// });
// fileInput.addEventListener("change", function (event) {
//     the_return.innerHTML = this.value;
// });

/*=====  End of Attach file  ======*/

/*----------  Input mask  ----------*/
$('#af_phone').inputmask({
    mask: "+7 (999) 999 99 99",
    showMaskOnHover: false
});
$('#af_name').inputmask({
    mask: "[a{1,64}]",
    showMaskOnHover: false
});
$('#af_email').inputmask({
    mask: "*{1,64}@a{1,64}[.a{1,3}]",
    showMaskOnHover: false,
    definitions: {
        '*': {
        validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
        cardinality: 1,
        casing: "lower"
        }
    }
});

// $('.input-button__button').click(function() {
//     $(this).toggleClass('input-button__button--clicked');
//         $('.input-button__button p').text(function(i, text) {
//         return text === "Sent!" ? "Send" : "Sent!";
//     });
// });

}(jQuery));