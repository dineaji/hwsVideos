var device="Desktop"
var instagramJSON;
var imgCount=6;
var girdSlideTemplate;
$(document).ready(function(ev){
var currLocale = $("#hdnLocaleName").val();
var pubId = $("#hwn-container").data("pubid");
var videotimer;
var videoTimer;
 //instagramInit();
 if($(".page-videos-detail")[0]){
     $.getJSON( "/" + currLocale + "/customdata/getvideos.json", function( data ) {
		 var html = "";
		 //console.log(data);
		 var allVideoCategories = JSON.parse(data);
		 html = PrintVideoCarousel(allVideoCategories.VideoDisplayMainCategories, allVideoCategories);
		 html += PrintVideoCarousel(allVideoCategories.VideoDisplaySubCategories, allVideoCategories);


$("#hwn-container").append(html);
if(!$('.hwn-carousal').parent(".bx-viewport").length){
	$('.hwn-carousal').bxSlider({
        auto: false,
        minSlides: 1,
        maxSlides: 500,
        slideWidth: 240,
        slideMargin: 2,
        infiniteLoop:false,
        hideControlOnEnd: true
    });
}
});
}
  $(".more-button").click(function (){              
		$('html, body').animate({
			scrollTop: $("#games").offset().top-135
		}, 1000);
	});
	$(".signin").hover(function(){ 
		$(".join-team").addClass("hover")
	}, function(){
       $(".join-team").removeClass("hover")
    });
	$(".marquee-cta").on("click", function(){
		var promoURL = $(this).find("a").attr("href");
		window.location = promoURL;
	});
	
	var pageType = $("#hdnPageType").val();
		var modalEnabled = $("#displayModal").val();
		if(modalEnabled=="true"){
			var forceFridayCookie = getCookie("starwars-force-friday");
			if(forceFridayCookie != "closed"){
				$('#basic-modal-content').css("display","block");
				$('#basic-modal-content').modal();
				utag.view({  page_id:"star wars modal" });
			}else{
				$('#basic-modal-content').css("display","none");
			}
		}
	$("#simplemodal-overlay,.simplemodal-container").on("click",function(){
		document.cookie = "starwars-force-friday=closed";		
		$("#simplemodal-overlay,.simplemodal-container").css("display","none");
		utag.link({  eve_cat:"promo" , eve_act:"module click", eve_lab:"star wars: modal", eve_des:"",eve_pos:"" });
	});	
});

function PrintVideoCarousel(VideoCategoryItems, allVideoCategories) {
    var currLocale = $("#hdnLocaleName").val();
    var pubId = $("#hwn-container").data("pubid");
    var html = "";
    $.each(VideoCategoryItems, function (index, item) {

        var filterVideoCategories = allVideoCategories.VideoCategories.filter(function (selectedCategory) {
            return selectedCategory.CategorySEOName == item.CategorySEOName
        });
        if (filterVideoCategories.length > 0) {
            var filteredItem = filterVideoCategories[0];


            // var firstVideoUrl = filteredItem.Videos[0].ContentUrl;
            var categoryURL = "/" + currLocale + "/videos/" + item.Title;
            // html += '<div class="cat-container"><h3><a href="' + categoryURL + '">' + item.CategoryName+'</a></h3><div class="thumbs-grid hwn-carousal clearfix" id="thumbs-grid">';
            html += '<div class="cat-container"><h3><a href="' + categoryURL + '">' + item.Title + '</a></h3><div class="thumbs-grid hwn-carousal clearfix" id="thumbs-grid">';
            $.each(filteredItem.Videos, function (index1, item1) {
                var contentURL = item1.ContentUrl;
                if (contentURL == null) {
                    contentURL = "";
                }
                html += '<div class="thumb-unit video" style="opacity: 1; display: block;"><a compid="' + item1.CmsId + '" href="/' + currLocale + '/videos/detail/' + contentURL + '?keywordName=' + filteredItem.CategoryName + '&keywordId=' + filteredItem.CategoryId + '"><img src="' + item1.ThumbNailPath + '" alt="' + item1.Title + '" class="thumb"><div class="thumb-info"><span class="title">' + item1.Title + '</span></div></a></div>';
            });
            html += '</div></div>';

        }
        else {
            console.log(item.CategorySEOName);
        }


    });

    return html;



}


function getCookie(name)
  {
    var re = new RegExp(name + "=([^;]+)");
    var value = re.exec(document.cookie);
    return (value != null) ? unescape(value[1]) : null;
  }

function instagramInit(){
    var instImages="";
    $.ajax({
      type: "GET",
      dataType: "jsonp",
      cache: false,
      //url:"https://api.instagram.com/v1/tags/monsterhigh/media/recent?client_id=e4d9cf5dc91a4d39a9b35583476e121e",
      //url: "https://api.instagram.com/v1/media/popular?client_id=78ec0d85e302485e9ef6072b7440e342",
      //url: "https://api.instagram.com/v1/media/popular?client_id=e4d9cf5dc91a4d39a9b35583476e121e&client_secret=d9813acaef55452a8b7a865fdb64a3af",
      //url: "https://api.instagram.com/oauth/authorize/?client_id=e4d9cf5dc91a4d39a9b35583476e121e&redirect_uri=http://www.monsterhigh.com/oauth/instagram&response_type=code",

      //access_token=21177272.e4d9cf5.f5607ce0e6d44f3f8a56a1fe3adf38a7
      //url:"https://api.instagram.com/v1/users/self/feed?access_token=21177272.e4d9cf5.f5607ce0e6d44f3f8a56a1fe3adf38a7",
      url:"https://api.instagram.com/v1/users/21177272/media/recent/?access_token=21177272.e4d9cf5.f5607ce0e6d44f3f8a56a1fe3adf38a7",

      success: function(data) {
        //console.log(data)
        data
        instagramJSON=data;
        instagramGrid();
         /*$.each(data.data,function(data,index){
                            
                instImages+="<img "+"src="+index.images.low_resolution.url+" />";
            instImages+="<img "+"src="+index.images.standard_resolution.url+" />";
            });
         //$("#instaContainer").html(instImages);*/
         }
         
    });
}

girdSlideTemplate= "<ul><li class='row'><ul class='row-content'><li class='big-img'><a href='http://instagram.com/monsterhigh' target='_blank'><img src=''></a></li><li class='small-img'><a href='http://instagram.com/monsterhigh' target='_blank'><img src=''></a></li><li class='small-img'><a href='http://instagram.com/monsterhigh' target='_blank'><img src=''></a></li></ul></li><li class='row'><ul class='row-content'><li class='small-img'><a href='http://instagram.com/monsterhigh' target='_blank'><img src=''></a></li><li class='small-img'><a href='http://instagram.com/monsterhigh' target='_blank'><img src=''></a></li><li class='small-img'><a href='http://instagram.com/monsterhigh' target='_blank'><img src=''></a></li></ul></li></ul>";

function instagramGrid(){
    $('#grid ul.grid-wrapper').html('');
    
    var count=1//Math.round(instagramJSON.data.length()/6);
    for(var index=0;index<count;index++){
        $('#grid ul.grid-wrapper').append('<li class="grid">'+girdSlideTemplate+'</li>');
        startIndex=index*6;
        imgUpdate(startIndex);
    }


}
function imgUpdate(startIndex){
     $('#grid ul.grid-wrapper img').each(function(){
        $(this).attr('src',instagramJSON.data[startIndex].images.standard_resolution.url);
        $(this).parent().attr('href',instagramJSON.data[startIndex].link+'?modal=true');
        startIndex++;
     })

}

function showEmailSignUp(){
	$('.email-signup').css('visibility','visible');
}
function hideEmailSignUp(){
	$('.email-signup').css('visibility','hidden');
}
function startSlidersTrigger(){
 $('.bxslider').bxSlider({
            auto: false,
            minSlides: 4,
            maxSlides: 20,
            slideWidth: 300,
            slideMargin: 40,
            preventDefaultSwipeX: false,
            touchEnabled: false
        });
		$('.flexslider').flexslider();
		$(".top-marquee-container,.bxslider,.games-section").css("visibility","visible");
}

$(window).load(function () {
	$(".container").css("visibility","visible");
	$(".pageLoader").css("display","none");
	//var videotimer;
	if($(".page-games-detail")[0]){
		if($("#hdnendlessracer")[0]){
			if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
				var gameURL = $("#cda-wrap #iframe").attr("src");
				//window.open(gameURL,"_blank");
				location.href=gameURL;
			}		
		}
	}
	setTimeout(function() {
		if($(".page-home-ma")[0]){
			$('.hwr-videos .video-wrapper video').on("play", function(){
				$(".hwr-videos .video-container h1").addClass("hide");
			});	
			$('.hwr-videos .video-wrapper video').on("pause", function(){
				$(".hwr-videos .video-container h1").removeClass("hide");
			});
			$('.hwr-videos .video-wrapper video').on("ended", function(){
				$(".hwr-videos .video-container h1").removeClass("hide");
			});	
		}
		$('video').click(function(){this.paused?this.play():this.pause();});	
	}, 2000);
	
	//Test code added for videos page POC
	if($(".page-videos-detail")[0]){		
		
		videotimer = setTimeout(function(){ // wait for ooyala player
			MattelVideoPlayer.ooPlayerInstances.players[0].mb.subscribe(OO.EVENTS.PLAYED, 'completed', function(event) {
				var videoTotalTime = $('video').get(0).duration;
		  		// use parseInt to round to whole seconds
				$(".hwn-next-video").css("display","block");
				var PlayingID = $("#hdntcmId").val();
				var nextItem = $('.thumb-unit.video a[compid="'+PlayingID+'"]').parents('.thumb-unit').next();
				var display = $('#time');
				var tenSeconds = 5;
				if(nextItem.length>0){
					var nextHref = nextItem.find('a img').attr('src');
					var nextVideoTitle = nextItem.find('.thumb-info .title').text();
					$(".hwn-next-video img").attr("src",nextHref);
					//	$(".hwn-next-video .video-title").text(nextVideoTitle);			
				} else {
					var firstItemHref = $($('.thumb-unit.video a')[0]).find("img").attr('src');
					var nextVideoTitle = $($('.thumb-unit.video a')[0]).find('.thumb-info .title').text();
					$(".hwn-next-video img").attr("src",firstItemHref);
					//$(".hwn-next-video .video-title").text(nextVideoTitle);
				}
				startTimer(tenSeconds, display);	
				var videoSecondsTimer = setTimeout(function(){ 
					if(nextItem.length>0){
						var nextHref = nextItem.find('a').attr('href');
						window.location.replace(nextHref);
					} else {
						var firstItemHref = $($('.thumb-unit.video a')[0]).attr('href');
						window.location.replace(firstItemHref);
					}
				},5000);	
				$(".oo-icon-upnext-replay").on("click", function(){clearInterval(videoTimer);clearTimeout(videoSecondsTimer);$(".hwn-next-video").css("display","none")});
			});
		}, 1000);	
		//$(".oo-icon-upnext-replay").on("click", function(){clearInterval(videoTimer);alert("video replayh");clearTimeout(videoSecondsTimer)});
	}

	// Home page - Set Promo Video Title from first thumbail
	if($(".page-home-ma")[0]){
		$(".hwr-videos .video-container>h1").text($(".thumbnail-video-list li:first span.thumb-video-title").text());
	}

	// Update hompage video id while clicking on thumbnail
	setTimeout(function() {
		if($(".hwr-videos .ooyala-video-player").length > 0) {
			var playerIndx = $(".hwr-videos .ooyala-video-player").attr('id').split('-')[2]-1,
				player = MattelVideoPlayer.ooPlayerInstances.players[playerIndx],
				tempPlayer = player;

			player.mb.subscribe(OO.EVENTS.PLAYING, 'playing', function(event) {
				clearTimeout(videotimer);alert("true");
				var curId=$('[data-contains-thumbnailnonreload=true]').data('video-id');
		        var curEle=$('.hwr-videos .thumbnail-video-list .video-list-item[data-video-id="' +((curId.indexOf('extId') != -1) ? curId.split(':')[1] : curId)+ '"]');
		        //console.log(curId,curEle);
		        var nextElemAttr = curEle.next().data('video-id');
		        $(curId).data('video-id', nextElemAttr);
				var nextVideoTitle = curEle.find('span.thumb-video-title').text();
		        $(".hwr-videos .video-container>h1").text(nextVideoTitle);
				$(".hwr-videos .video-container h1").addClass("hide");
		        //console.log(nextElemAttr);
			})
			player.mb.subscribe(OO.EVENTS.PLAYED, 'played', function(event) {
				tempPlayer.pause();
				tempPlayer.play();
				
				console.log("played")
		        // Update Video Title
		        var curId=$('[data-contains-thumbnailnonreload=true]').data('video-id');
		        var curEle=$('.hwr-videos .thumbnail-video-list .video-list-item[data-video-id="' +((curId.indexOf('extId') != -1) ? curId.split(':')[1] : curId)+ '"]');
				var nextVideoTitle = curEle.find('span.thumb-video-title').text();
		        $(".hwr-videos .video-container>h1").text(nextVideoTitle);
				$(".hwr-videos .video-container h1").removeClass("hide");
			})
			player.mb.subscribe(OO.EVENTS.PAUSED, 'paused', function(event) {
				$(".hwr-videos .video-container h1").removeClass("hide");
			});
		}
	}, 1000);

	// Locale on change event
	$("#country-dd").change(function(){
		
		if(typeof (window.open) == "function" & !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	        window.open($(this).val(), '_blank');
	    }
	    else {
	        window.location.href = $(this).val();
	    }
				
		/*var win = window.open($(this).val(), '_blank');
		if (win) {
		    //Browser has allowed it to be opened
		    win.focus();
		} else {
		    //Browser has blocked it
		    console.log('Please allow popups for this website');
		}*/
	});

	// Home page CDA click event only in mobile device
	$(".page-home-ma .cda-multiple-sizes .slides li").click(function(e) {
		// Check for mobile device
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			var redirectUrl = $(this).data('targetUrl');
			if(redirectUrl != undefined) {
				window.location = $(this).data('targetUrl');
			}
		}
	});
       /* if(!$('.hwn-carousal').parent(".bx-viewport").length){
		$('.hwn-carousal').bxSlider({
	            auto: false,
	            minSlides: 1,
	            maxSlides: 500,
	            slideWidth: 240,
	            slideMargin: 2,
		    infiniteLoop:false,
		    hideControlOnEnd: true
	        });
        }*/
        $(".description-title,.description").html(function(i, html) {
                        return html.replace(/\u00ae/g, "<sup>&reg;</sup>");
        });
});

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    videoTimer = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}
