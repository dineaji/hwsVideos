/*
 * Rating Stars on games/videos
 */
(function ($) {
	"use strict";
	
	var ratings = $('.rating');

	$.each(ratings, function(){
		var ratingClass = $(this).attr('class').match(/rating-\d+[_]?[0-9]?/)[0],
	        newRatingClass = '',
	        ratingWidth = $(this).width();

	    $(this)

	    .on('mouseover', function(){
			// remove rating on mouseover
	        $(this).removeClass(ratingClass);
	    })
	    
	    .on('mousemove', function(e){
			// update rating as users hover over stars
	        $(this).removeClass(newRatingClass);
	        newRatingClass = 'rating-'+Math.ceil((e.offsetX / ratingWidth) * 5);
	        $(this).addClass(newRatingClass);
	    })

	    .on('mouseout', function(){ 
			// restore to actual rating on mouseout
	        $(this).removeClass(newRatingClass).addClass(ratingClass);
	    })

	    .on('click', function(){
			// update rating on click
	        ratingClass = newRatingClass;
	        alert('Rating: '+ratingClass.replace('rating-',''));

	        // MATTEL CODE GOES HERE
	        $.ajax({
				url: 'http://www.hotwheels.com'
	        });
	    });
	});

}( jQuery, undefined ));