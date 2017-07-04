/*
 * Simple infinite scroll function
 */
(function ($) {
    'use strict';

    if($('.adhesion-unit.phone').length && (window.innerWidth < 768) && !($('.adhesion-unit.phone').hasClass('bottom'))){
        $('body').css('padding-top', '50px');
    }

    if($('.adhesion-unit.tablet').length && (window.innerWidth >= 768) && (window.innerWidth < 980) && !($('.adhesion-unit.tablet').hasClass('bottom'))){
        $('body').css('padding-top', '114px');
    }

    $('.adhesion-unit .close').on('click',function(){
        $('.adhesion-unit').hide();
        $('body').css('padding-top', '0');
    });

}( jQuery, undefined ));