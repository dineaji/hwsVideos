// Define Hot Wheels namespace
var HOTWHEELS = HOTWHEELS || {};

/*
 * CarsCarousels
 * 
 * Used by Cars section carousels for Make, Color, and Style sorts.
 * Applies bxSlider carousel behavior and appends additional
 * car thumbnails retrieved via XHR call when user hits right
 * arrow on a carousel.
 * 
 */
HOTWHEELS.CarsCarousels = (function () {
	"use strict";

    var init = function(){

        var hasControls = true,
            slideWidth = 288,
            slideWidthCars = 284,
            slideMargin = 14,
            isTouchDevice = $('html').hasClass('touch'),
            screenWidth = screen.width;
        // for 3 max slides on screen. See Cars Category pages

        var sliders = [];
        var carsSliders = $('section.cars ul.carousel-teaser');

        $.each(carsSliders, function(index){
            var self = $(this);
            self.mod = self.closest('.mod');
            self.totalCount = parseInt(self.mod.attr('totalcount'));
            self.yearId = self.mod.attr('yearkeyid');
            self.keywordUri = self.mod.attr('keyworduri');
            self.itemsPerRow = parseInt(self.mod.attr('itemsperrow'));
            self.pageNumber = parseInt(self.mod.attr('pagenumber'));
            self.pubId = self.mod.attr('publicationid');
            self.origCount = self.find('.thumb-unit').length;
            self.addlSlides = self.totalCount - self.origCount;
            self.addlLoads = self.addlSlides % self.itemsPerRow == 0 ? self.addlSlides / self.itemsPerRow : Math.floor(self.addlSlides / self.itemsPerRow) + 1;

            sliders[index] = $(this).bxSlider({
                mode: 'horizontal',
                minSlides: 1,
                maxSlides: 3,
                slideMargin: slideMargin, 
                slideWidth: slideWidthCars,
                controls: hasControls,
                pager: false,
                infiniteLoop: false,
                hideControlOnEnd: true,
                moveSlides: 1,
                speed: 300,
                totalSlides: self.totalCount,
                prevText: '<span class="icons icon-arrow-left"></span>',
                nextText: '<span class="icons icon-arrow-right"></span>',
                // ajaxUrl: '/CarCollections/ScrollComponents',
                ajaxUrl: 'scripts/sample_thumbs.html',    // NOTE:  uncomment this for local testing
                onSlideNext: function($slideElement, oldIndex, newIndex){    
                    var slideWidth = this.slideWidth + this.slideMargin,
                        sliderWidth = parseInt(self.css('width'),10);
                    if(self.addlLoads > 0) {
                        self.pageNumber++;

                        $.ajax({
                            url: this.ajaxUrl,
                            type: 'GET', // NOTE: uncomment this for local testing
                            // type: 'POST',
                            // data: JSON.stringify({
                            //  itemsPerRow: self.itemsPerRow,
                            //  pageNumber: self.pageNumber,
                            //  pubId: self.pubId,
                            //  keywordUri: self.keywordUri,
                            //  yearId: self.yearId
                            // }), // comment out for local testing
                            // contentType: 'application/json; charset=utf-8', // comment out for local testing
                            // dataType: 'text', 
                            dataType: 'html', // NOTE: uncomment this for local testing
                            success: function(response){
                                self.css('width', sliderWidth + (slideWidth * $(response).length)); // incrementally widen slider on each success
                                $(response).each(function(){
                                    if(self.addlSlides > 0){
                                        sliders[index].thumb = $(this);
                                        sliders[index].thumb.attr('style',self.thumbStyle);
                                        self.append(sliders[index].thumb);
                                        $(document).trigger('appendSlide'+index);
                                        self.addlSlides--;
                                    }
                                });
                   
                                self.addlLoads--;
                            },
                            error: function() {
                                // error handling
                                self.pageNumber--;
                            }
                        }); 
                    }               
                }
            });

            self.thumbStyle = self.find('.thumb-unit:first-child').attr('style');
        });

        // Because addSlide is a public method of bxslider, it can only be called after slider has been instantiated.  
        // therefore, we bind it to the custom event appendSlide+index
        var bxSliders = $(sliders);

        $.each(bxSliders, function (index) {
            $(document).on('appendSlide' + index, function () {
                sliders[index].addSlide(sliders[index].thumb[0]);
            });
        });
    };

    // Make HOTWHEELS.CarsCarousels.init(); available as a public method
    return {
        init: init
    };
})();


// Comment this out for actual testing
$(function() { 
    HOTWHEELS.CarsCarousels.init();
});
