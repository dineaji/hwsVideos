/*
 * Get car search input value when 
 * submit button pressed
 * 
 */
(function ($) {
	"use strict";
	
	var carSearchBox = document.getElementById('search-cars'),
		searchTerm;
	
	function init() {
		getCarSearchTerm();
	}

	function getCarSearchTerm() {
		$('#btn-search-cars').on('click', function(e) {
			// prevent form from submitting
			e.preventDefault();

			searchTerm = carSearchBox.value;

			alert(searchTerm);
		});
	}

	// Start it
	init();

}( jQuery, undefined ));
