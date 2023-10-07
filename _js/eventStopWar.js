;(function ($) {

    'use strict';

	const stopWarTop = document.querySelectorAll('#stopwarTop > svg'),
		stopWarMiddle = document.getElementById('stopwarMiddle'),
		stopWarBottom = document.getElementById('stopwarBottom'),
		stopWarBlock = document.querySelector('.event-top')
	;

	function stopWarLoad() {
		let tl = new gsap.timeline({
			delay: 1.3,
			onComplete: stopWarClose(5)
		});

		tl
			.to(stopWarBlock, {
				delay: '-1.3',
				autoAlpha: 1,
				'display': 'flex',
				zIndex: 9998,
				easy: 'elastic'
			})
			.from(stopWarTop, {
				duration: 0.7,
				y: '-10%',
				autoAlpha: 0,
				easy: 'elastic'
			})
			.from(stopWarBottom, {
				duration: 0.7,
				delay: '-0.4',
				y: '10%',
				autoAlpha: 0,
				easy: 'elastic'
			})
			.from(stopWarMiddle, {
				duration: 0.7,
				delay: '-0.2',
				scale: '0.9',
				autoAlpha: 0,
				easy: 'elastic'
			})
		;

		return tl;
	}

	function stopWarClose(delay) {
		let tl = new gsap.timeline({
			delay: delay
		});

		tl
			.to(stopWarBlock, {
				duration: 0.7,
				autoAlpha: 0,
				easy: 'elastic'
			})
		;

		return tl;
	}

    function cookieStopWar() {

        if (!$.cookie('RedvusstopWar')) {
			stopWarLoad();
        }
        $.cookie('RedvusstopWar', true, {
            expires: 0, //Cookie удаляется после закрытия браузера
            path: '/'
        });
    }

    function cookieStopWarMobile() {

        if (!$.cookie('RedvusstopWarM')) {

        }
        $.cookie('RedvusstopWarM', true, {
            expires: 0, //Cookie удаляется после закрытия браузера
            path: '/'
        });
    }

    function initDesktop() {
		// stopWarLoad();
		cookieStopWar();
    }

    function initMobile() {

    }

    if (document.body.clientWidth > 420 || screen.width > 420) {
        initDesktop();
    } else {
        initMobile();
    }

})(jQuery);