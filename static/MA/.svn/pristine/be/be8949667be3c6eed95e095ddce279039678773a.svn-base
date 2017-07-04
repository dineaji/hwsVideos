/*
 * Functions related to car vs car functionality
 */

(function($) {
	'use strict';

	/* define variables */
	var $cards = $('#matchup div.car'),
		$actives = $cards.filter('.active'),
		$inners = $cards.find('div.inner'),
		$cars = $cards.find('div.bg'),
		$names = $cars.find('div.name'),
		$imgs = $cars.find('img'),
		$bars = $cards.find('div.bar'),
		$data = [],
		selectedId,
		notSelectedId,
		userChoseCar = false; // is set to true whenever user makes a choice

	// Initialize data and behavior
	function init() {
		getInitialData();

		$('section.car-vs-car a.next').on('click', function(event){
			shiftCards(event);
		});
		
		activateCarVoting();	
	}

	function makeCar(data, index){
		$names.eq(index).html(data[0]['name']);
		$imgs.eq(index).attr('src', data[0]['img']);
		$cards.eq(index).attr('data-id', data[0]['carId']);
		$cards.eq(index).attr('data-views', data[0]['views']+1);
		$cards.eq(index).attr('data-votes', data[0]['votes']);
	}

	// initialize 6 cars from inline JSON, store the rest in $data
	function getInitialData() {
		$.each(HOTWHEELS.initialCarData, function(index){
			makeCar($(this), index);

			if(index > 5){
				$data.push($(this)[0]);
			}
		});
	}

	// enable voting on an active car by clicking on it
	function activateCarVoting() {
		userChoseCar = false; // reset it

		$actives.on('click', function(event) {
			event.preventDefault();
			chooseCar( $(this) );
		});
	}

	// shift cards forwards on next click
	function shiftCards(event) {
		event.preventDefault();

		$inners.removeClass('loaded');

		$('div.result-state').off('click');

		window.setTimeout(function(){
			$inners.addClass('loaded');

			/* if no more cars can be fetched, don't do anything */
			if($data.length == 0){
				return;
			}

			/* move cards 1+2 to the front */
			for(var i = 2; i > 0; i--){
				$cards.eq(i).find('div.bg').html($cars.eq(i-1).html());
				$cards.eq(i).attr('data-id', $cards.eq(i-1).attr('data-id'));
				$cards.eq(i).attr('data-views', $cards.eq(i-1).attr('data-views'));
				$cards.eq(i).attr('data-votes', $cards.eq(i-1).attr('data-votes'));
			}

			/* move cards 5+6 to the front */
			for(var j = 3; j < 5; j++){
				$cards.eq(j).find('div.bg').html($cars.eq(j+1).html());
				$cards.eq(j).attr('data-id', $cards.eq(j+1).attr('data-id'));
				$cards.eq(j).attr('data-views', $cards.eq(j+1).attr('data-views'));
				$cards.eq(j).attr('data-votes', $cards.eq(j+1).attr('data-votes'));
			}

			/* populate new card 1 from $data, then remove it from array */
			makeCar($data, 0);
			$data.shift();

			/* populate new card 6 from $data, then remove it from array */
			makeCar($data, 5);
			$data.shift();

			/* if 2 or less pairs of data left, request more data, and increment the jsonIndex */
			if($data.length <= 4){
				$.getJSON('http://www.hotwheels.com/requestCarData', function(data){
					$.each(data, function(index){
						$data.push($(this)[0]);
					});
				});
			}

			// Only perform if user chose a car from the previous active set. Otherwise, multiple events get applied and the next time user chooses a car, the results are sent to the server multiple times
			if (userChoseCar) {
				$actives.removeClass('winner').find('div.choose').show().next('div.status').hide();

				$actives.removeClass('result-state');

				activateCarVoting();
			}

		}, 250);
	}

	// Reports car data to server and displays results view
	function chooseCar($selectedCar){
		selectedId = $selectedCar.attr('data-id'),
		notSelectedId = $actives.not($selectedCar).attr('data-id');
		
		userChoseCar = true;

		/* Post results to server. The selected car's ID must be first. */
		$.post('http://www.hotwheels.com/votingResults?selected='+selectedId+'&notSelected='+notSelectedId);

		/* toggles button and results/bars */
		$actives.find('div.choose').hide().next('div.status').show();

		/* add one vote to the selected car */
		$selectedCar.attr('data-votes', parseInt($selectedCar.attr('data-votes'))+1);
		
		var firstPercentage = Math.round(100 * ($actives.eq(0).attr('data-votes') / $actives.eq(0).attr('data-views'))),
			secondPercentage = Math.round(100 * ($actives.eq(1).attr('data-votes') / $actives.eq(1).attr('data-views'))),
			totalPercentage = firstPercentage + secondPercentage,
			tie = false;

		$.each($actives, function(){
			var $val = Math.round(100 * Math.round(100 * ($(this).attr('data-votes') / $(this).attr('data-views'))) / totalPercentage);
			$(this).find('div.fill').css('width',$val+'%');
			$(this).find('div.number').html($val+'%');

			if($val === 50){
				tie = true;
			}
		});

		if(firstPercentage >= secondPercentage){
			$actives.eq(0).addClass('winner result-state');
			$actives.eq(1).addClass('result-state');

			if(tie){
				$actives.eq(0).find('div.number').html('51%');
				$actives.eq(1).find('div.number').html('49%');
			}
		} else {
			$actives.eq(1).addClass('winner result-state');
			$actives.eq(0).addClass('result-state');
		} 

		// unbind click on active cars so user can't vote twice
		$actives.off('click');

		// clicking on a car card does the same thing as the arrow
		$('html.no-touch div.result-state').on('click', function(event){
			shiftCards(event);
		});
	}

	// Start it up
	init();

}(jQuery, undefined));