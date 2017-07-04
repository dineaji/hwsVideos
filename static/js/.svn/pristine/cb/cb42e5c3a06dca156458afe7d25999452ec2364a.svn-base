(function($){
if($(".page-aipage")[0]){
$(window).scroll(function() {
	 if ($('.featured-marquee-container .ooyala-video-player').isFullyVisible()) {
        $("video")[0].pause();
    }else{
		$('.featured-marquee-container video').each(function() {
			$(this).get(0).pause();
		});		
	}
	
});

	$.fn.isFullyVisible = function(){

var win = $(window);

var viewport = {
    top : win.scrollTop(),
    left : win.scrollLeft()
};
viewport.right = viewport.left + win.width();
viewport.bottom = viewport.top + win.height();

var elemtHeight = this.height();// Get the full height of current element
elemtHeight = Math.round(elemtHeight);// Round it to whole humber

var bounds = this.offset();// Coordinates of current element
bounds.top = bounds.top + elemtHeight;
bounds.right = bounds.left + this.outerWidth();
bounds.bottom = bounds.top - elemtHeight + this.outerHeight();

return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

}
}
	$.LoadVideoSlider = function(obj){
		var self = this;
		self.obj = obj;
	}
	
	$.LoadVideoSlider.prototype.MP4BindEvents = function(){
		var self = this;
		$('video').on('play',function(){
			var slider =$(this).closest('.flexslider').data('flexslider');
			
			slider.pause();
			$currentSlide = $(this).closest('.video-slide');
			var ctaHide = $currentSlide.data('cta-hide');
			if(ctaHide) $currentSlide.find('.marquee-cta').fadeOut();				
			
		});
		
		$('video').on('pause',function(){
			var slider =$(this).closest('.flexslider').data('flexslider');
			slider.play();
			$currentSlide = $(this).closest('.video-slide');
			var ctaHide = $currentSlide.data('cta-hide');
			if(ctaHide) $currentSlide.find('.marquee-cta').fadeIn();	
		});
		$('video').on('ended',function(){
			var slider =$(this).closest('.flexslider').data('flexslider');
			var $currentSlide = $(this).closest('.video-slide');
			var $curindex=$currentSlide.index();
			if($('.top-marquee-container .flex-control-nav li').length == $curindex) {
				$curindex = 0;
			}
			slider.flexAnimate($curindex);
			//slider.flexslider('next');
		});
	};
	
	$.LoadVideoSlider.prototype.loadmp4 = function(obj){
		var self=this,
			data = $(obj).data();
		var videoSrc = $('<source/>',{src : data.src, type:"video/mp4"});
		var videoElement = $('<video/>',{
			id : "video-"+ $(obj).index(),
			class : "slide-video-element",
			html : videoSrc
		}).prop({"controls":"true"});
		if(data.mute) videoElement.prop('muted',true);
		if(data.poster) videoElement.prop('poster',data.poster);
		$(obj).find('.video').replaceWith(videoElement);
	};
	
	$.LoadVideoSlider.prototype.YTPlayerReady = function(player,data,obj){
		if(data.mute) player.target.mute();		
	};
	
	$.LoadVideoSlider.prototype.YTPlayerStateChange = function(newState,obj){
		var self=this;
		var newStateObj;
		var slider = $(obj).closest('.flexslider').data('flexslider');
		var player = window[self.obj.parent().data('asset')+slider.currentSlide];

		var $currentSlide = slider.find('.marquee-list.flex-active-slide').eq(0);
		var ctaHide = $currentSlide.data('cta-hide');

		var $curindex = $currentSlide.index();
		if($('.top-marquee-container .flex-control-nav li').length == $curindex) {
			$curindex = 0;
		}
		if(typeof(newState.data) != 'undefined') newStateObj = newState.data;
		else newStateObj = newState;
		switch (newStateObj) {
			case 1: slider.pause();												//Play
					if(ctaHide) $currentSlide.find('.marquee-cta').fadeOut();				
					break;
			case 2: slider.play();      //pause
					if(ctaHide) $currentSlide.find('.marquee-cta').fadeIn();				
					break;
			case 0: slider.flexAnimate($curindex);//ended			
					break;
		}
	};
	
	$.LoadVideoSlider.prototype.loadYoutube = function(obj){
		var self=this,
			data = $(obj).data();
			window[self.obj.parent().data('asset')+$(obj).index()] = new YT.Player($(obj).find('.video')[0],{height : "100%",width: "100%",videoId : data.src, playerVars: {'iv_load_policy': '3', 'enablejsapi':1,'origin':'https://beta.hotwheels.com'}, events: {
            'onReady': function(player){ 
            	
            	self.YTPlayerReady(player,data,$(obj))
            },
            'onStateChange': function(newState){
				self.YTPlayerStateChange.call(self,newState,$(obj));
			}
          }
	  });
	};
	
	$.LoadVideoSlider.prototype.constructVideo = function(){
		var self = this;
		self.slides = $(self.obj).find('.video-slide');
		$.each(self.slides,function(i){
			var videoType = $(this).data('video-type');
			switch(videoType){
				case 'mp4' :	 self.loadmp4($(this)); break;
				case 'youtube' : self.loadYoutube($(this)); break;
			}
		})
	};
	
	$.LoadVideoSlider.prototype.resumeVideo = function(obj){
		var self = this,
			slider = self.obj.data('flexslider');
		var $currentSlide = $(obj).find('.marquee-list.flex-active-slide').eq(0);
		var ctaHide = $currentSlide.data('cta-hide');
		var autoPlay = $currentSlide.data('autoplay');
		if($currentSlide.hasClass('video-slide')){
			var videoType = $currentSlide.data('video-type');
			switch(videoType){
				case 'mp4' :	if(autoPlay) $currentSlide.find('video')[0].play(); 
								break;
				case 'youtube' : if(autoPlay) {
									window[self.obj.parent().data('asset')+slider.currentSlide].playVideo();
									slider.pause();
									if(ctaHide) $currentSlide.find('.marquee-cta').fadeOut();				
								 }
								 break;
			}
		}
		var promoText =  $currentSlide.find(".marquee-promo-text").text();
		if(promoText.length > 1){
			$(".more-button").removeClass("hide").addClass("show");
		}else{
		$(".more-button").removeClass("show").addClass("hide");		
		}
	}
	
	$.LoadVideoSlider.prototype.pauseVideo = function(obj){
		var self = this,
		slider = self.obj.data('flexslider');
		var $currentSlide = $(obj).find('.marquee-list.flex-active-slide').eq(0);
		var ctaHide = $currentSlide.data('cta-hide');
		if($currentSlide.hasClass('video-slide')){
			var videoType = $currentSlide.data('video-type');
			switch(videoType){
					case 'mp4' :	$currentSlide.find('video')[0].pause(); break;
					case 'youtube' :
									window[self.obj.parent().data('asset')+slider.currentSlide].pauseVideo();
									slider.pause();
									 slider.play();
									 if(ctaHide) $currentSlide.find('.marquee-cta').fadeIn();				
									 break;
				}
		}
	}
	$.LoadVideoSlider.prototype.ooyalaEventBinding = function(obj,curRef){
		var player = $(obj).find(".ooyala-video-player"),arr=[],attrId,videoElemId,videoIndex,playerObj;
		if(!player.length) return;
		playerObj = MattelVideoPlayer.ooPlayerInstances.players;
		for(var i=0;i<player.length;i++){
		(function(indx){
			  attrId = $(player[indx]).attr('id');
			  videoElemId= attrId .split('-');
			  videoIndex=(attrId.split("-")[videoElemId.length - 1])-1;

			  playerObj[videoIndex].mb.subscribe(OO.EVENTS.PAUSED, '', function(event) {
	                obj.play();
	            });
	            // Handle Video Completed Playing Event 
	            playerObj[videoIndex].mb.subscribe(OO.EVENTS.PLAYED, '', function(event) {
	                $(obj).flexslider(((obj.currentSlide + 1) < obj.pagingCount) ? obj.currentSlide + 1 : 0);
					obj.play();
	            });
	            playerObj[videoIndex].mb.subscribe(OO.EVENTS.PLAYING, '', function(e,p) {
	               obj.pause();
	              /* var currentId = this.mb._interceptArgs.setEmbedCode[0];
	               MattelVideoPlayer.ooPlayerInstances.players.forEach(function(player, index) {
	                    if (currentId!=player.getEmbedCode()){
	                        player.pause();
	                	}
	            	});*/
	              })
            })(i)
		}
	};
	$.LoadVideoSlider.prototype.ooyalaFindPosition = function(self){
		this.nthVideo = -1; // Detects the slide where the video resides.
        this.elementId = "";
        var that = this;
        $(self).each(function(key, item) {
            if (!$(item).hasClass('clone')) {
                if ($(item).find('.player-wrapper').length) {
                    that.nthVideo++;
                    that.elementId = $(item).find('.ooyala-video-player').attr('id');
                }
                if ($(item).hasClass('flex-active-slide')) {
                    return false;
                }
            }
        })
	};
	$.LoadVideoSlider.prototype.init = function(){
		var self = this;
		self.constructVideo();
	}
	var chkForStartEvtBindings = false;
	$(window).on('videoSliderReady',function($this,param){
		if(!param.apiReady){
			options = param.options || false;
			ctx = param.ctx || "";
		}
		
		if(options){
			videoSlider = new $.LoadVideoSlider(ctx);
			videoSlider.init();	
			options.slider.after = function(obj){
				if($("body").hasClass("page-aipage")){
					var slideHasVideo = ($(obj).find('.flex-active-slide .player-wrapper').length) ? true : false;
	                videoSlider.ooyalaFindPosition($(obj).find('.slides>li'));
	                if (slideHasVideo) { // if video found in current slide, play video and pause slider.
	                    var x = videoSlider.elementId;
						var y = MattelVideoPlayer.ooPlayerInstances.players.filter(function(v,k){return (x==v.getElementId())})
						if(y.length>0 && !y[0].isPlaying()){
							//y[0].play();
							obj.pause();
						}
	                } else { // if video is not in current slider play slider
	                    obj.play();
	                }
				} else{
					var x = $(obj.slides.context).find('.clone .ooyala-video-player').attr('id')
			        var y = MattelVideoPlayer.ooPlayerInstances.players.filter(function(v,k){return (x==v.elementId)})
			        if(y.length>0){y[0].pause();}
					MattelVideoPlayer.sliderActions.afterAction(obj, this);
				}
			};
			options.slider.before = function(obj){
				if($("body").hasClass("page-aipage")){
					var slideHasVideo = ($(obj).find('.flex-active-slide .player-wrapper').length) ? true : false;
	                 videoSlider.ooyalaFindPosition($(obj).find('.slides>li'));
	                 console.log(videoSlider.nthVideo);
	                 if (slideHasVideo) { // if video found in current slide, pause it.
	                        var x = videoSlider.elementId;
	                		var y = MattelVideoPlayer.ooPlayerInstances.players.filter(function(v,k){return (x==v.getElementId())})
			                if(y.length>0){
			                    y[0].pause();
			                }
	                        obj.play();
	                    }
				} else{
					MattelVideoPlayer.sliderActions.findVideoPos(this);
	                if(MattelVideoPlayer.sliderActions.nthVideo == -1 && !chkForStartEvtBindings){                            // Added this code to forcefully bind startAction when not triggered automatically
	                    MattelVideoPlayer.sliderActions.startAction(obj, this);
	                    chkForStartEvtBindings = true;
	                }
	                var x = $(obj.slides.context).find('.clone .ooyala-video-player').attr('id')
	                var y = MattelVideoPlayer.ooPlayerInstances.players.filter(function(v,k){return (x==v.elementId)})
	                if(y.length>0){y[0].pause();}
	                MattelVideoPlayer.sliderActions.beforeAction(obj, this);
				}
			};
			options.slider.start = function(obj){
				if($("body").hasClass("page-aipage")){
					var self =this;
                	obj.pause();
                	setTimeout(function(){
                		videoSlider.ooyalaEventBinding(obj,self);
                	},5000);
				} else{
					if($('.flex-active-slide', obj).data('video-type') != 'youtube') {
		                videoSlider.resumeVideo(obj);
		            }else {
							setTimeout(function() {
		                MattelVideoPlayer.sliderActions.startAction(obj, this);
							}, 3000);
		            }
		            var x = $(obj.slides.context).find('.clone .ooyala-video-player').attr('id')
		            var y = MattelVideoPlayer.ooPlayerInstances.players.filter(function(v,k){return (x==v.elementId)})
		            if(y.length>0){y[0].pause();}
		            if(typeof vAlignText == 'function') { //defined on mat.site.pages.home.js
		                            vAlignText();
		            }
				}
			};
			var slideshowSpeed = ctx.data('duration') ? ctx.data('duration') : (options.slider.slideshowSpeed ? options.slider.slideshowSpeed : 3000);
			options.slider.slideshowSpeed = slideshowSpeed;
			ctx.flexslider(options.slider);
			videoSlider.MP4BindEvents();
			if(typeof(options.callback) == "function") {
                setTimeout(function() { // wait until dom finish
					options.callback();
				}, 0);
            }
		}
	});

	$.fn.loadVideoSlider = function(options){
		$(window).trigger('videoSliderReady',{"ctx" : $(this), options : options});
	};
	
	
})(jQuery);

function onYouTubeIframeAPIReady(){		
	//$(window).trigger('videoSliderReady',{"apiReady" : true});
};