$(document).ready(function(){
	$(document).on('click', ".slider-col .slider .slides li", function () { 
		var promoText = $(this).find(".promoCaption h2").text();
		var currPosition = $(this).index()+1;
		var modPosition = $(this).index()+1;
		//utag.link({  eve_cat:"promo" , eve_act:"cda click", eve_lab:"p"+currPosition+":"+promoText, eve_des:"homepage",eve_pos:"" });
		utag.link({  eve_cat:"promo" , eve_act:"module["+modPosition+"]", eve_lab:"p["+currPosition+"]:"+promoText, eve_des:"homepage: cda",eve_pos:"" });
	});

		$(document).on('click', ".slide-one", function () { 
		var promoText = $(this).find(".promo-info h3").text();
		var currPosition = $(this).index()+1;
		//var modPosition = $(this).index()+1;
		//utag.link({  eve_cat:"promo" , eve_act:"cda click", eve_lab:"p"+currPosition+":"+promoText, eve_des:"homepage",eve_pos:"" });
		utag.link({  eve_cat:"promo" , eve_act:"module[2]", eve_lab:"p["+currPosition+"]:"+promoText, eve_des:"homepage: cda",eve_pos:"" });
	});
	
	$(document).on('click', ".slide-two", function () { 
		var promoText = $(this).find(".promo-info h3").text();
		var currPosition = $(this).index()+1;
		//var modPosition = $(this).index()+1;
		//utag.link({  eve_cat:"promo" , eve_act:"cda click", eve_lab:"p"+currPosition+":"+promoText, eve_des:"homepage",eve_pos:"" });
		utag.link({  eve_cat:"promo" , eve_act:"module[3]", eve_lab:"p["+currPosition+"]:"+promoText, eve_des:"homepage: cda",eve_pos:"" });
	});
	
  try{
		var marvelCheck = $("#hdnPageType").val(),
		loopingBool;
		if(marvelCheck!="marvel"){
		// $('.top-marquee-container .flexslider,.featured-marquee-container .slider').flexslider({
		// 	animation:'slide',controlNav:false,slideshowSpeed:4000,animationSpeed:1100,slideshow: true,  animationLoop: true
		// });
		loopingBool = true;
		}else{
		// 	$('.top-marquee-container .flexslider,.featured-marquee-container .slider').flexslider({
		// 	animation:'slide',controlNav:false,slideshowSpeed:4000,animationSpeed:1100,slideshow: false,  animationLoop: false
		// });
		loopingBool = false;
		}
		var hiddenPageType = $("#hdnPageType").val();
		if(hiddenPageType!="starwars"){
			$('.top-marquee-container .flexslider').loadVideoSlider({
				slider: { animation: 'slide', controlNav: true, directionNav: false, slideshowSpeed: 4000, animationSpeed: 1100, slideshow: true, animationLoop: false },
				video: {}
			});	
			$('.featured-marquee-container .slider').loadVideoSlider({
				slider: { animation: 'slide', controlNav: false, slideshowSpeed: 4000, animationSpeed: 1100, slideshow: true, animationLoop: false },
				video: {}
			});	
		}

		$('.nav-menu>a').click(function(){
			$(this).toggleClass("active-menu");
			mobileNavigation();
		});
		$('.mobile-profile-avatar').click(function(){
			$(this).toggleClass("active-profile");
			mobileProfileNavigation();
		});

		$("li.nav-more").click(function(){
	        $(this).toggleClass("active-more");
		});

		/* new sub nav changes start */
	    $(".top-main-nav >li").hover(function(){
		 	if($(this).find(".sub-nav-items li").length > 0){
		        $(this).find(".sub-nav").addClass("active");
		        $("#sub-nav-bg").addClass("active");
		        $("#sub-nav-bg").height($('.sub-nav-items').outerHeight() + 10 );
			}
			else if($(this).find(".subMenu-list-items").length > 0){
		        $(this).find(".sub-nav").addClass("active");
		        $("#sub-nav-bg").addClass("active");
		        $("#sub-nav-bg").height($('.subMenu-list-items').outerHeight());
			}
		},function(){
		       $("#sub-nav-bg").removeClass("active");
		       $(this).find(".sub-nav").removeClass("active");
		       $("#sub-nav-bg").height(0);
		});

		$(".nav-search").hover(function(){
			$("#sub-nav-bg").removeClass("active");
		});
		
		$(".top-main-nav >li >a").on('click',function(e){
	        	if ($(window).width() <= 879){
	        		if($(this).siblings(".sub-nav").find('ul').length > 0){
	        			e.preventDefault();
					$(this).toggleClass('expand');
					$(this).siblings(".sub-nav").slideToggle();
				}
			}
	    });

		$(".top-main-nav .sub-nav .subMenus-list .title").on('click',function(e){
	        if ($(window).width() <= 879){
	        	$(this).toggleClass('expand');
				if($(this).siblings('ul').length > 0) {
					$(this).siblings("ul").slideToggle();
				}
				else if($(this).siblings('div').find('div.navmarquee__slides').length > 0) {
					$(this).siblings('div').find("div.navmarquee__slides").slideToggle();	

					if($(this).siblings('div').find("div.navmarquee__slides").find('.navmarquee__slide').length > 3) {
						$('.more-feature').slideToggle();
						$(this).siblings('div').find("div.navmarquee__slides").find('.navmarquee__slide').removeClass('expand');
					}
					$(this).siblings('div').find("div.navmarquee__slides").find('.navmarquee__slide').first().addClass('expand');
				}
	       	}
	    });

	    $('.more-feature a').on('click', function (e) {
	    	if($("div.navmarquee__slide.expand:last").next().index() < $('div.navmarquee__slide').length - 2) {
	    		$("div.navmarquee__slide.expand:last").next().addClass('expand');
	    	}
	    })
	    
    
    		/* new sub nav changes end*/
  		navigationAppend();
  }
  catch(err){
    console.log("Hotwheels Nav -->"+"document.ready()"+err.message)
  } 
  $(".closebtn").on("click",function(e){
	 var loginPageCheck = document.location.href.match(/[^\/]+$/)[0];
	 if((loginPageCheck=="loginpage.html") || (loginPageCheck=="loginpage.html#")){
		document.location.href="/";
		}
	});	
	
	var hdnLocaleName = $("#hdnLocaleName").val();
	if(hdnLocaleName=="zh-cn"){
		$(".fixed-header").css("top","0em");
		$(".top-main-nav").css({"float":"none","margin":"0 auto"});
		$(".signup-links").css("display","none");
	}

    // Code for opening interstitial on click of social links
	$("li.show-interstitial a,div.show-interstitial a").on("click", function (e) {
	    e.preventDefault();
	    var socialURL = $(this).attr("href");
	    $(".modal-overlay").css("display", "block");
	    $(".ps_WTBConfirmationDialogStyle").removeClass("ps_HiddenStyle");
	    $(".ps_WTBConfirmationDialogStyle .ps_ButtonsStyle .keep-going").attr("href", socialURL);
	});

	$(".ps_ButtonsStyle .close-interstitial").on("click", function (e) {
	    e.preventDefault();
	    $(".ps_WTBConfirmationDialogStyle").addClass("ps_HiddenStyle");
	    $(".modal-overlay").css("display", "none");
	});
	
	$(".ps_ButtonsStyle .keep-going").on("click", function (e) {
		e.preventDefault();
	    $(".ps_WTBConfirmationDialogStyle").addClass("ps_HiddenStyle");
	    $(".modal-overlay").css("display", "none");
		var navigateURL = $(this).attr("href");
		window.open(navigateURL);
	});
});

$(window).load(function() {
	$("html,body").animate({scrollTop: 0}, 500);
	 
});

$(window).scroll(function(){
	//scrollingPosition();
	//$('.home-ma').css('background-position-y', getbodyPosition()+'px');
});

$(window).resize(function(){
	navigationAppend();
	//scrollingPosition();
});

function mobileNavigation(){
	try{
		$('.mobile-profile-avatar').removeClass('active-profile');
		$('.account-settings').removeClass("active-profile-menu");
		$('.mobile-main-nav').toggleClass("active-main-menu");
	}
	catch(err){
		console.log("Header Top Mobile Navigation -->"+"mobileNavigation() -->"+err.message);
	}	
}

function mobileProfileNavigation(){
	try{
		$('.nav-menu>a').removeClass('active-menu');
		$('.mobile-main-nav').removeClass("active-main-menu");
		$('.account-settings').toggleClass("active-profile-menu");
	}
	catch(err){
		console.log("Header Top Mobile Navigation -->"+"mobileProfileNavigation() -->"+err.message);
	}	
}

function navigationAppend(){
	try{
	  	if($(window).width() <= 879) {
			$( ".signup-links li" ).appendTo( ".nav-menu .mobile-main-nav").addClass('cloned-element');
			$( ".acc-profile-nav li" ).appendTo( ".account-mobile").addClass('cloned-element1');
		}else{	
	  		$('.cloned-element').appendTo('.signup-links').removeClass('cloned-element');
			$('.cloned-element1' ).appendTo('.acc-profile-nav').removeClass('cloned-element1');
		}
	}
	catch(err){
		console.log("Header Top Navigation -->"+"navigationAppend() -->"+err.message);
	}
}

/*function scrollingPosition(){
	try{
	    var header_scroll = $('.main-header'),scroll = $(window).scrollTop();
	    if ((scroll > 0) && (scroll <=114)){
			$('.header').addClass('header-fadein');
			header_scroll.removeClass('fixed-header');
			$('.mattel-top-fixedbar').css('z-index','8');
		}
		else if(scroll >= 115){
			header_scroll.addClass('fixed-header');
			$('.header').removeClass('header-fadein');
			$('.mattel-top-fixedbar').css('z-index','1000');
		}
		else{
			header_scroll.removeClass('fixed-header');
			$('.header').removeClass('header-fadein');
			$('.mattel-top-fixedbar').css('z-index','8');
		}

		if(scroll <= 203)
			$(header_scroll).nextAll("main,.body-bg").css("padding-top", getContainerPosition()+'px');
	}
	catch(err){
		console.log("Header Top Navigation -->"+"scrollingPosition() -->"+err.message);
	}
}*/

function getContainerPosition(){
	try{
		var headerHt = $('.main-header').height(),
			headerTop = $('.main-header').offset().top-5;
		var position = headerHt+headerTop;
		return position;
	}
	catch(err){
		console.log("Header Top Navigation -->"+"getContainerPosition() -->"+err.message);
	}
}

function getbodyPosition(){
	try{
		var bodyPosition = $('.main-header').offset().top*.8;
		return bodyPosition;
	}
	catch(err){
		console.log("Header Top Navigation -->"+"getbodyPosition() -->"+err.message);
	}
}
/* Tagging starts here for MixedAudience */
	$(document).on('click', ".topbar-shop-mattel,.topbar-center-text", function () {
		//restrict shop realted page firing duplicate
		if(!(CONTROLLER=="Wishlist" || CONTROLLER=="ShopCatalog")){
			var pageName = $("#hdnsiteSection").val();
			if(pageName == "index"){pageName = "homepage"}	
			utag.link({  eve_cat:"products" , eve_act:"retailer click", eve_lab:"Mattel Shop", eve_des:pageName,eve_pos:"header" });
		}
	});
	$(document).on('click', ".social-links li", function () {		
		if(!(CONTROLLER=="Wishlist" || CONTROLLER=="ShopCatalog")){
		var pageName = $("#hdnsiteSection").val();
		var socialMediaName = $(this).find("a").attr("title");
			if(pageName == "index"){pageName = "homepage"}	
			utag.link({  eve_cat:"promo" , eve_act:"share", eve_lab:socialMediaName, eve_des:pageName,eve_pos:"main nav" });
		}
	});
	/* firing for all nav items so added not property for binding only main nav sub item */
	$(document).on('click', ".sub-nav-items li:not('.option')", function () {
		var pageName = $("#hdnsiteSection").val();
		if(pageName == "index"){pageName = "homepage"}
		var subPromoTitle = $(this).find("a").attr("title");
		var navTitle = $(this).parent().closest('li').find(".link").text();
		var currPosition = $(this).index()+1;
		utag.link({  eve_cat:"promo" , eve_act:"sub nav click", eve_lab:navTitle+":p"+currPosition+":"+subPromoTitle, eve_des:pageName,eve_pos:"" });
	});
	$(document).on('click', ".top-marquee-container .slider .flex-viewport .slides li", function () {
		var promoText = $(this).find(".marquee-promo-text").text();
		var currPosition = $(this).index();
		utag.link({  eve_cat:"promo" , eve_act:"cda click", eve_lab:"p"+currPosition+":"+promoText, eve_des:"homepage",eve_pos:"" });
	});	
	$(document).on('click', ".games-banner", function () {
		var hiddenPageType = $("#hdnPageType").val();
		if(hiddenPageType=="kd"){
		var promoText = $(this).find(".mod-title").text();
			utag.link({  eve_cat:"promo" , eve_act:"module4", eve_lab:"p1:"+promoText, eve_des:"key segment page: track builder",eve_pos:"" });
		}else{
		var isClass= $('body').hasClass('page-home-ma'),
		$parTag=$(this).parents().closest("section"),
		moduleTitle = (isClass) ? $parTag.find(".mod-heading span").text() : $(".mod-heading.light.container a").text(),
		promoText = $(this).find(".mod-title").text().trim(),
		currPosition =  (isClass) ? "module"+($parTag.index()-2) : "module"+($parTag.index()+1),
		pagename=(isClass) ? "homepage" : "games: landing page";
		utag.link({  eve_cat:"promo" , eve_act:"module click", eve_lab:moduleTitle+":p1:"+promoText, eve_des:pagename,eve_pos:currPosition });
		}
	});
	$(document).on('click', ".games-featured .thumb-unit", function () {
		var hiddenPageType = $("#hdnPageType").val();
		if(hiddenPageType=="kd"){
		var currPosition = $(this).index()+1;
		var promoText = $(this).find(".title").text();
			utag.link({  eve_cat:"promo" , eve_act:"module4", eve_lab:"p"+currPosition+":"+promoText, eve_des:"key segment page: track builder",eve_pos:"" });
		}else{
		var isClass= $('body').hasClass('page-home-ma'),
		$parTag=$(this).parents().closest("section"),
		moduleTitle = (isClass) ? $parTag.find(".mod-heading span").text() : $parTag.find(".mod-heading").text(),
		promoText = $(this).find("a .title").text().trim(),
		currPosition = (isClass) ? "module"+($parTag.index()-2) : "module"+($parTag.index()+1),
		currPromoPosition = (isClass) ? $(this).index()+2 : $(this).index()+1,
		pagename=(isClass) ? "homepage" : "games: landing page";
		utag.link({  eve_cat:"promo" , eve_act:"module click", eve_lab:moduleTitle+":p"+currPromoPosition+":"+promoText, eve_des:pagename,eve_pos:currPosition });
		}		
	});
	/*$(document).on('click', ".apps .bx-wrapper .bx-viewport .bxslider li img,.apps .bx-wrapper .bx-viewport .bxslider li span.title", function () {
		var moduleTitle = $(this).parents().closest("section").find(".mod-heading span").text();
		var promoText = $(this).parents().closest("li").find(".title-reatiler-container .title").text();
		var currPosition = $(this).parents().closest("section").index()+1;
		var actualLength = $(".apps .bx-wrapper .bx-viewport .bxslider li").length/3;
		var currPromoPosition = $(this).parents().closest("li").index() - actualLength+1;
		utag.link({  eve_cat:"promo" , eve_act:"module click", eve_lab:moduleTitle+":p"+currPromoPosition+":"+promoText, eve_des:"homepage",eve_pos:"module"+currPosition });		
	});*/
	$(document).on('click', ".apps .bx-wrapper .bx-viewport .bxslider li .apps-retailer-left,.apps .bx-wrapper .bx-viewport .bxslider li .apps-retailer-right", function () {
		var moduleTitle = $(this).parents().closest("section").find(".mod-heading span").text();
		var promoText = $(this).parents().closest("li").find(".title-reatiler-container .title").text();
		var currPosition = $(this).parents().closest("section").index();
		var actualLength = $(".apps .bx-wrapper .bx-viewport .bxslider li").length/3;
		var currPromoPosition = $(this).parents().closest("li").index() - actualLength+1;
		var retailerName = $(this).attr("alt");	
		utag.link({  eve_cat:"promo" , eve_act:"retailer click", eve_lab:retailerName, eve_des:"homepage",eve_pos:moduleTitle+":p"+currPromoPosition+":"+promoText });		
	});
	$(document).on('click', ".didyouknow .promo-read-more", function () {
		var moduleTitle = $(this).parents().closest("section").find(".mod-heading span").text();
		var promoText = $(this).parents().find(".designer-content-text").text();
		var currPosition = $(this).parents().closest("section").index();
		var currPromoPosition = $(this).index()+1;
		utag.link({  eve_cat:"promo" , eve_act:"module click", eve_lab:moduleTitle+":p"+currPromoPosition+":"+promoText, eve_des:"homepage",eve_pos:"module"+currPosition });		
	});
	$(document).on('click', ".featured-marquee-container .slider .flex-viewport .slides li", function () {
		var moduleTitle = $("#productHeading .mod-heading span").text();
		var promoText = $(this).find(".marquee-promo-text").text();
		var currPosition = $(this).parents().closest("section").index()-1;
		var currPromoPosition = $(this).index();
		utag.link({  eve_cat:"promo" , eve_act:"module click", eve_lab:moduleTitle+":p"+currPromoPosition+":"+promoText, eve_des:"homepage",eve_pos:"module"+currPosition});
	});	
	$(document).on('click', ".events-carousel #slider1 .viewport .overview li .event-date", function () {
		var moduleTitle = $("#EventsHeading .mod-heading span").text();
		var promoText = $(this).parents().find(".description h1").text();
		var currPosition = $(this).parents().closest("section").index()-2;
		var currPromoPosition = $(this).parent().index();	
		utag.link({  eve_cat:"promo" , eve_act:"module click", eve_lab:moduleTitle+":p"+currPromoPosition+":"+promoText, eve_des:"homepage",eve_pos:"module"+currPosition });		
	});
	$(document).on('click', ".user-profile-top .main-events__event__image__wrap,.user-profile-top .main-events__event__info", function () {
		var eventTitle = $(this).parent().find(".main-events__event__title").text();	
		utag.link({  eve_cat:"promo" , eve_act:"events", eve_lab:eventTitle, eve_des:"profile page",eve_pos:"" });		
	});	
	$(document).on('click', ".driver-license__image", function () {
		utag.link({  eve_cat:"profile" , eve_act:"customize", eve_lab:"customize license: change picture", eve_des:"profile page",eve_pos:"" });
	});	
	$(document).on('click', ".driver-license__car__image", function () {
		utag.link({  eve_cat:"profile" , eve_act:"customize", eve_lab:"customize license: change car", eve_des:"profile page",eve_pos:"" });	
	});
	$(document).on('click', ".driver-license__settings", function () {
		utag.link({  eve_cat:"profile" , eve_act:"customize", eve_lab:"customize license: settings", eve_des:"profile page",eve_pos:"" });	
	});	
	$(document).on('click', "user-settings__buttons .change-picture", function () {
		utag.link({  eve_cat:"profile" , eve_act:"customize", eve_lab:"customize license: change picture", eve_des:"profile page",eve_pos:"" });
	});	
	$(document).on('click', "user-settings__buttons .change-car", function () {
		utag.link({  eve_cat:"profile" , eve_act:"customize", eve_lab:"customize license: change car", eve_des:"profile page",eve_pos:"" });	
	});	
	$(document).on('click', "user-settings__buttons .change-background", function () {
		utag.link({  eve_cat:"profile" , eve_act:"customize", eve_lab:"customize license: change background", eve_des:"profile page",eve_pos:"" });	
	});	
	$(document).on('click', ".my-car-collection.empty .thumb-unit", function () {
		var moduleTitle = $(this).parents().find(".my-car-collection .profile-heading").text();
		var promoText = $(this).find(".thumb-info .title").text();
		var currPosition = $(this).parents().closest(".profile-collection").index()+1;
		utag.link({  eve_cat:"profile" , eve_act:"module click", eve_lab:moduleTitle+":p1:"+promoText, eve_des:"profile page",eve_pos:"module"+currPosition });
	});
	$(document).on('click', ".my-tracks.empty .thumb-unit", function () {
		var moduleTitle = $(this).parents().find(".my-tracks .profile-heading").text();
		var promoText = $(this).find(".thumb-info .title").text();
		var currPosition = $(this).parents().closest(".profile-collection").index()+1;
		utag.link({  eve_cat:"profile" , eve_act:"module click", eve_lab:moduleTitle+":p1:"+promoText, eve_des:"profile page",eve_pos:"module"+currPosition });
	});	
	$(document).on('click', ".user-profile-wishlist .product-tiles .product-tile--empty", function () {
		var moduleTitle = $(this).parents().find(".wishlist-header-text").text();
		var promoText = $(this).find(".add-to-wishlist p").text();
		var currPosition = $(this).parents().closest("section").index()+1;
		utag.link({  eve_cat:"profile" , eve_act:"module click", eve_lab:moduleTitle+":p1:"+promoText, eve_des:"profile page",eve_pos:"module"+currPosition });
	});	
	$(function(){
                if($(window).width()<=1024)
                {
                                if($(".top-main-nav.mobile-main-nav>li").length<=5) {
                                                $(".top-main-nav.mobile-main-nav").addClass("lesser-nav");
                                }
                }
})
/* End here */
