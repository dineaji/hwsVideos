/**
 * Redirect to Browser Alert page if IE8 or below
 */
(function () {
	"use strict";

	var url = window.location.pathname,
		filename = url.substring(url.lastIndexOf('/')+1);

	if (filename !== 'browseralert.html') {
		window.location.href = '/' + HOTWHEELS.languagePath + '/browseralert.html';
	}

}());