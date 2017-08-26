(function ($) {

    $(window).load(function() {

        // Animation logo on first page
        var redvus_logo_v_pencil = $('#redvus_logo_v_pencil'),
            redvus_logo_line_v = $('#redvus_logo_line_v'),
            redvus_logo_r = $('#redvus_logo_r'),
            redvus_logo_e_up = $('#redvus_logo_e_up'),
            redvus_logo_e_middle = $('#redvus_logo_e_middle'),
            redvus_logo_e_down = $('#redvus_logo_e_down'),
            redvus_logo_d = $('#redvus_logo_d'),
            redvus_logo_u_end = $('#redvus_logo_u_end'),
            redvus_logo_s_end = $('#redvus_logo_s_end'),
            redvus_logo_studio = $('#redvus_logo_studio');
            redvus_logo = $('#redvus_logo');

        var slogan_R = $('#slogan_R'),
            slogan_real = $('#slogan_real'),
            slogan_E = $('#slogan_E'),
            slogan_effecive = $('#slogan_effective'),
            slogan_D = $('#slogan_D'),
            slogan_design = $('#slogan_design'),
            slogan_V = $('#slogan_V'),
            slogan_visual = $('#slogan_visual'),
            slogan_U = $('#slogan_U'),
            slogan_unical = $('#slogan_unical'),
            slogan_S = $('#slogan_S'),
            slogan_style = $('#slogan_style');

        var redvus_logo_tl = new TimelineMax();

        redvus_logo_tl.from(redvus_logo_v_pencil, 2, {x: -500, ease:Power1.easeOut})
            .from(redvus_logo_line_v, 2, {x: -500, ease:Power1.easeOut}, '-=2')
            .from(redvus_logo_d, 0.8, {x: -300, ease:Power3.easeOut}, '-=0.3')
            .from(slogan_V, 2, {opacity: 0, ease:Power1.easeOut}, '-=2')
            .from(redvus_logo_r, 0.7, {x: -200, ease:Power2.easeOut})
            .from(redvus_logo_e_down, 0.7, {scaleX: '0%', ease:Power2.easeOut})
            .from(redvus_logo_e_middle, 0.7, {y: -200, ease:Back.easeOut}, '-=0.2')
            .from(redvus_logo_e_up, 0.7, {y: -200, ease:Back.easeOut}, '-=0.2')
            .from(redvus_logo_u_end, 0.7, {y: -200, ease:Bounce.easeOut})
            .from(redvus_logo_s_end, 0.7, {y: -200, ease:Bounce.easeOut}, '-=0.2')
            .from(redvus_logo_studio_s, 0.3, {x: 300, ease:Back.easeOut}, '-=0.2')
            .from(redvus_logo_studio_t, 0.3, {x: 300, ease:Back.easeOut}, '-=0.2')
            .from(redvus_logo_studio_u, 0.3, {x: 300, ease:Back.easeOut}, '-=0.2')
            .from(redvus_logo_studio_d, 0.3, {x: 300, ease:Back.easeOut}, '-=0.2')
            .from(redvus_logo_studio_i, 0.3, {x: 300, ease:Back.easeOut}, '-=0.2')
            .from(redvus_logo_studio_o, 0.3, {x: 300, ease:Back.easeOut}, '-=0.2');
        // redvus_logo_tl.to(redvus_logo, 3, {y: '-100%', ease:Linear.easeOut}, '-=1');

        var redvus_slogan_tl = new TimeLineMax();

        redvus_slogan_tl.from(slogan_V, 2, {opacity: 0, ease:Power1.easeOut}, '-=2')
            .from(slogan_visual, 2, {opacity: 0, ease:Power1.easeOut});

    });





}) (jQuery);