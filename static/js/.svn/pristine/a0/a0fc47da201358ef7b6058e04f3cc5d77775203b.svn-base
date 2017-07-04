/*
 * Rating Stars on games/videos
 */
(function ($) {
    "use strict";

    var ratings = $('.rating');

    $.each(ratings, function () {
        var ratingClass = $(this).attr('class').match(/rating-\d+[_]?[0-9]?/)[0],
	        newRatingClass = '',
	        ratingWidth = $(this).width();

        $(this)

	    .on('mouseover', function () {
	        // remove rating on mouseover
	        $(this).removeClass(ratingClass);
	    })

	    .on('mousemove', function (e) {
	        // update rating as users hover over stars
	        $(this).removeClass(newRatingClass);
	        var offX = (e.offsetX || e.clientX - $(e.target).offset().left);	        
	        newRatingClass = 'rating-' + Math.ceil((offX / ratingWidth) * 5);
	        $(this).addClass(newRatingClass);
	    })

	    .on('mouseout', function () {
	        // restore to actual rating on mouseout
	        $(this).removeClass(newRatingClass).addClass(ratingClass);
	    })

	    .on('click', function () {
	        // update rating on click
	        var username = $("#hdnUserName").val();
	        if (username == "" || username == 'empty') {
	            //alert('user not logged in');
	            $("#contentRating").attr("data-target", "rate-login");	            
	            //$('#rate-login').show();
	        }
	        else {
	            ratingClass = newRatingClass;
	            //alert('Rating: ' + ratingClass.replace('rating-', ''));
	            var gamePageURL = $("#hdnPageURL").val(); var hdnLocaleName = $("#hdnLocaleName").val();
	            var ratingObject = {}; ratingObject = { pageUrl: gamePageURL, rating: ratingClass.replace('rating-', ''), localeName: hdnLocaleName };
	            // MATTEL CODE GOES HERE
	            $.ajax({
	                url: '/RatingRWD/SaveRating', type: 'POST', data: JSON.stringify(ratingObject), contentType: 'application/json; charset=utf-8', dataType: 'json',
	                success: function (response) {
	                    if (response.Message.indexOf('Saved') != -1) {

	                    } else if (response.Message.indexOf('Saved') > 0) {
	                        $(this).removeClass(ratingClass);
	                    }
	                }, error: function (xhr) { }
	            });
	        }
	    });
    });

}(jQuery, undefined));