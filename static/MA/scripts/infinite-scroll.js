/*
 * Simple infinite scroll function
 */
(function ($) {
    'use strict';

    var direction,
        timer = null,
        $footer = $('footer[role="contentinfo"]'),
        $footerTop = $footer.offset().top,
        $lastScrollTop = $(window).scrollTop(),
        $thumbsGrid = $('#infinite-grid div#thumbs-grid');

    $(window).on('scroll',function(){
        // determine direction of scroll
        if ($(window).scrollTop() > $lastScrollTop) {
            direction = 'down';
        } else {
            direction = 'up';
        }

        if((timer === null) && (($(this).scrollTop() + $(window).height()) > $footerTop) && (direction == 'down')){

            timer = window.setTimeout(function(){
                timer = null;
            }, 1000);

            $.ajax({
                type: 'GET',
                url: 'scripts/sample_data.html?v='+Math.random()*100,
                dataType: 'html',
                success: function(data){
                    $thumbsGrid.append(data);

                    window.setTimeout(function(){
                        $thumbsGrid.find('div.thumb-unit').removeClass('addl');
                    }, 1000);

                    $footerTop = $footer.offset().top;
                },
            });

        }

        $lastScrollTop = $(window).scrollTop();
  });

}( jQuery, undefined ));