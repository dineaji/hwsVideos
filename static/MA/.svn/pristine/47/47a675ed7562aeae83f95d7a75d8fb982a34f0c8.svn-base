(function($){

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
				var x = $(obj.slides.context).find('.clone .ooyala-video-player').attr('id')
		        var y = MattelVideoPlayer.ooPlayerInstances.players.filter(function(v,k){return (x==v.elementId)})
		        if(y.length>0){y[0].pause();}
				MattelVideoPlayer.sliderActions.afterAction(obj, this);
			};
			options.slider.before = function(obj){
				MattelVideoPlayer.sliderActions.findVideoPos(this);
                if(MattelVideoPlayer.sliderActions.nthVideo == -1 && !chkForStartEvtBindings){                            // Added this code to forcefully bind startAction when not triggered automatically
                    MattelVideoPlayer.sliderActions.startAction(obj, this);
                    chkForStartEvtBindings = true;
                }
                var x = $(obj.slides.context).find('.clone .ooyala-video-player').attr('id')
                var y = MattelVideoPlayer.ooPlayerInstances.players.filter(function(v,k){return (x==v.elementId)})
                if(y.length>0){y[0].pause();}
                MattelVideoPlayer.sliderActions.beforeAction(obj, this);
			};
			options.slider.start = function(obj){
				if($('.flex-active-slide', obj).data('video-type') != 'youtube') {
                    videoSlider.resumeVideo(obj);
                }else {
                    MattelVideoPlayer.sliderActions.startAction(obj, this);
                }
                var x = $(obj.slides.context).find('.clone .ooyala-video-player').attr('id')
                var y = MattelVideoPlayer.ooPlayerInstances.players.filter(function(v,k){return (x==v.elementId)})
                if(y.length>0){y[0].pause();}
                if(typeof vAlignText == 'function') { //defined on mat.site.pages.home.js
                                vAlignText();
                }
			};
			var slideshowSpeed = ctx.data('duration') ? ctx.data('duration') : (options.slider.slideshowSpeed ? options.slider.slideshowSpeed : 3000);
			options.slider.slideshowSpeed = slideshowSpeed;
			ctx.flexslider(options.slider);
			videoSlider.MP4BindEvents();
		}
	});

	$.fn.loadVideoSlider = function(options){
		$(window).trigger('videoSliderReady',{"ctx" : $(this), options : options});
	};
	
})(jQuery);

function onYouTubeIframeAPIReady(){		
	//$(window).trigger('videoSliderReady',{"apiReady" : true});
};
