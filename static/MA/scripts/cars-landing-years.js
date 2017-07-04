/* 
 * Applies event to year links on Cars Landing.
 * Stub code for Mattel to use.
 */

$(function ($) {
	"use strict";

	var year;

	$('body.page-cars #second-nav li.dropdown').on('click', function() {
		year = $(this).data('subnav');

		alert('User chose ' + year);
	});

}( jQuery, undefined ));