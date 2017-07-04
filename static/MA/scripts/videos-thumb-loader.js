
(function(window,$,hwLayout){
	var isLoaded = false;
	var isotopeBool = false;
	var categoryLoaded = false;
	var MAX_SLIDES        = 6;
	var localeName = $("#hdnLocaleName").val();
	HWMAT.thumbSlider = [];
	var videoCollections = {
		carouselConfig : function(configName){
			var self = this;
			var configObj;
			switch(configName){
				case 'bxsliderOptions' : 
					configObj = {
						auto: false,
						startSlide: 0,
			            minSlides: 1,
			            maxSlides: MAX_SLIDES,
			            slideWidth: 240,
			            slideMargin: 2,
					    infiniteLoop:false,
					    pager : false,
					    moveSlides: 1,
					    hideControlOnEnd: true,
					    slideSelector : 'li',
					    onSlideAfter: function($slideElement, oldIndex, newIndex) {
			                var $slider = $slideElement.closest('.cat-container').data('sliderData');
			                var slideCount = $slider.getSlideCount();
			                self.lazyLoad($slider);
			            },
					} 
			}
			return configObj;
		},
		apiConfig : function(){
			var apis = {
				"name" : "/customdata/getvideos.json",
				"type" : "Get"
			}
			return apis;
		},
		templateConfig : function(configName){			
			var configObj;
			switch(configName){
				case 'videoThumbnail':
					configObj={
						"targetId":"hwn-container",
						"templateId" : "video-thumbnail-container"
					}
					break;
			}
			return configObj;
		},
		groupUniqueObj: function (resObj, keyName) {
            var data = {};
            if (resObj == undefined || keyName == undefined) return false;
            for (var i = 0; i < resObj.length; ++i) {
                var obj = resObj[i];
                if (data[obj[keyName]] === undefined)
                    data[obj[keyName]] = []; //Assign a new array with the first element of DtmStamp.
                
                data[obj[keyName]].push(obj);
            }
            return data;
        },
        initCarousels: function(el,prop){
        	var self=this,
               	$bxsldr = $(el),
               	$carousel,
               	$target,
               	elemIndex;
            
            _.each($bxsldr,function(item){
            	elemIndex = $(item).attr('data-index') || 0;
	            if(!$(item).hasClass('slider-active')){
		            $carousel = $(item);
		            $target = $carousel.closest(".cat-container");
	            	self.initCarousel($carousel, $target);
	            	$(item).addClass('slider-active')
	            }
            })
        },
        initCarousel: function($carousel, $target){
	        $target.data('sliderData', $carousel.bxSlider(this.carouselConfig('bxsliderOptions')));
	    },
        lazyLoad : function($slider){
		  	var totalSlides = $slider.find('.thumb-unit').length;
	        var current = $slider.getCurrentSlide();
	        var remaining = totalSlides - (MAX_SLIDES + (current - 1));
	        var reloadConfig = this.carouselConfig('bxsliderOptions');
	        var objName = $slider.data('title');
	        var curObj = HWMAT.groupVideoCategory[objName];
		  	var curObjVideos;
		  	var elem;
		  	var pagination;

	        // Grab mattel's data- ids
	        var total = $slider.data('total');
	        var items = $slider.data('items');
	        var allData = $slider.data();
	        // if possible retrieve another batch of items through ajax
	        if(remaining < items && totalSlides < total && total !== undefined){
	        	curObjVideos = curObj && curObj[0].Videos.slice(totalSlides,(totalSlides+this.paged_count));
	        	elem = this.templateBind('',curObjVideos,true);
	        	$slider.append(elem);
                reloadConfig.startSlide = current;
                $slider.reloadSliderDynamic(reloadConfig); // don't delete only refresh
                pagination = $slider.data('pagination');
                $slider.data('pagination', Number(pagination) + 1);
	        }
        },
        templateBind : function(elemSelector,res,isLoadOnlyThumb){
			var self = this,
				divElem = document.getElementById("hwn-container"),
				templateId =   _.template(document.getElementById("video-thumbnail-container").innerHTML.trim()),
            	templateCollection = templateId({ 
            		'items' : res ,
            		'loadOnlyThumb':isLoadOnlyThumb || false
            	});

            if(isLoadOnlyThumb){
            	return templateCollection;
            	/*var $slider = HWMAT.thumbSlider[$(elemSelector).data('index')];
            	var current = $slider.getCurrentSlide();
            	var sliderConfig = self.carouselConfig('bxsliderOptions');
            	sliderConfig.startSlide = current;
            	$(elemSelector).append($(templateCollection));
            	$slider.reloadSliderDynamic(sliderConfig);*/
            } else{
            	$(templateCollection).appendTo(divElem);
            	self.initCarousels('.hwn-carousal' ,self.carouselConfig('thumbCarousel'));
            }
		},
		getCategoryDatas : function(obj,bool){
			var start, end, n, ret = [],self=this;
			if(typeof obj=="undefined" || categoryLoaded) return;
			if(this.initial_count === 'all') {
			    _.each(obj, function(m) {
			        ret.push(m);
			    });
			} 
			else {
			    if(this.page === 0) {
                    start = 0;
                    end = this.initial_count - 1;
                } else {
                	/*if(bool){
                		if(this.initial_count<0) this.initial_count = this.filPage || 0;
                		this.filPage = start = (obj.length<this.initial_count) ? this.filPage+obj.length : this.initial_count+1;
                	}
                	else{*/
                    	start = (this.initial_count) + ((this.page - 1) * this.paged_count);
                	// }
                    end = start + this.paged_count - 1;
                }
                if(end >= this.count() - 1) {
                    end = this.count() - 1;
                }
			    if(start>= this.count()) { // start has extended past the length... find not loaded
			        n = this.paged_count;
			       $("#hwn-container").addClass('success');
			       categoryLoaded = true;
			    } else {
			    	// if(start==0 && end==0) return
			    	/*if(bool){
						if(this.page==0){
							this.filPage = start =0
						}
			    		for(var i=start, m; i < end + 1; i++) {
				            m = obj[i];
				            if(!_.isUndefined(m) && !m.loaded) {
			                        ret.push(m);
			                        m.loaded=true;
				                }
				            }
			    	} else{*/
				        for(var i=start, m; i < end + 1; i++) {
				            m = obj[i];
				            if(!_.isUndefined(m)) {
			                        ret.push(m);
				                }
				            }
				        // }
				        categoryLoaded = false;
			        }
			    }
			    // alert("start:"+start+" End:"+end+" initialCount:" + this.initial_count);
			    if(!ret.length){
			    	$("#hwn-container").addClass('success');
			    	//this.initial_count = ret.length-1;
			       	// this.filterLoaded = categoryLoaded = true;
			       	categoryLoaded = true;
			    	return;	
			    } 
			  /* if(bool){
				    if(ret.length<=this.initial_count && bool){
				    	 this.initial_count= end;
				    	 if(this.page==0) this.page++;
				    } else{
				    	this.initial_count =this.initial_count + ((this.page ) * this.paged_count);
				    	this.page++
				    }
			   }*/
			   else{
			    	this.initial_count = this.category_count;
			    	this.page++
				    }
			    // alert("start:"+start+" End:"+end+" initialCount:" + this.category_count);
			    this.templateBind(this.templateConfig('videoThumbnail'),ret);
		},
		count: function() {
            return this.models.length;
        },
		ajaxCollection : function(el,obj){
			this.category_count = $("#"+el).data('categoryDisplayCount');
			this.initial_count = this.category_count || this.initial || 0;
			this.initial_thumb_count = $("#"+el).data('initialThumbCount');
            this.paged_count = 0;
            this.curt_count_obj = {};
            this.page = this.page || 0;
            this.paged_count = $("#"+el).data('nextThumbCount');
            this.models = obj;
            this.filPage = this.filPage || 0;
            this.remItem = this.remItem || 0;
		},
		loadMore : function(curVal){
        	var self =this,
        		obj = HWMAT.videoCategories;
			if(window.innerHeight > curVal.getBoundingClientRect().bottom && HWMAT.videoCategories){
				self.getCategoryDatas(obj);
			}
		},
		videoAPICall : function(){
			var self = this;
			var arr = [];
			var obj ;
			HWMAT.videoCategories = [];
			var apiConfigs = self.apiConfig();
			$.getJSON( "/" + localeName + apiConfigs.name, function( data ) {
				if(!data){
					console.log("Video API's not connected");
					return;
				}
				var parseDatas = JSON.parse(data);
				var mergedTitleObj = arr.concat(parseDatas.VideoDisplayMainCategories , parseDatas.VideoDisplaySubCategories);
				HWMAT.groupVideoCategory = self.groupUniqueObj(parseDatas.VideoCategories,'CategorySEOName');
				mergedTitleObj.filter(function (el,index) {
					obj = HWMAT.groupVideoCategory[el.CategorySEOName] && HWMAT.groupVideoCategory[el.CategorySEOName][0];
					// obj.index = index;
					if(obj) obj.index= index;
					obj && HWMAT.videoCategories.push(obj);
				});
				self.ajaxCollection(self.templateConfig('videoThumbnail').targetId,HWMAT.videoCategories)
				self.getCategoryDatas(HWMAT.videoCategories);
				// self.templateBind(self.templateConfig("videoThumbnail"),HWMAT.videoCategories);
			});
		},
		init : function(){
			if(typeof _!="function" || typeof $!="function" || isLoaded) return;
			var self = this;
			self.videoAPICall();
			isLoaded = true;
		}
	
	};
	videoCollections.init();
	HWMAT.videoCollections = videoCollections;
})(this,jQuery, HWMAT && HWMAT.layout)


$(window).scroll(function(){
	var parentContainer= document.querySelector("#hwn-container");
    HWMAT.videoCollections.loadMore(parentContainer);
})