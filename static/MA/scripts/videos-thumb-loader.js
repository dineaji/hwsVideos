
(function(window,$,hwLayout){
	var isLoaded = false;
	var isotopeBool = false;
	var localeName = $("#hdnLocaleName").val();
	var videoCollections = {
		carouselConfig : function(configName){
			var configObj;
			switch(configName){
				case 'thumbCarousel':
				  configObj={
				  	'itemVisible': 6,
				  	'autoPlay':false,
				  	'center':false,
				  	'pagination':false,
				  	'navigation':true,
				  	'loop':true,
				  	'singleItem':false,
				  	'tabletVisible' : 4
				 }
				  break;
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
					configObj={"targetId":"hwn-container","isotopEnabled": true,"templateId" : "video-thumbnail-container"}
					break;
			}
			return configObj;
		},
		groupUniqueObj: function (resObj, keyName,obj2) {
            var data = {};
            if (resObj == undefined || keyName == undefined) return false;
            for (var i = 0; i < resObj.length; ++i) {
                var obj = resObj[i];
                if (data[obj[keyName]] === undefined && obj2[i].CategorySEOName == keyName)
                    data[obj[keyName]] = []; //Assign a new array with the first element of DtmStamp.

                data[obj[keyName]].push(obj);
            }
            return data;
        },
		applyCarousel : function(el,prop,destroy){		 
            var self=this,
               	$owl = $(el);
            
            $owl.owlCarousel({
                items           :  prop.itemVisible,    		 // Integer
                singleItem      :  prop.singleItem || false,     // Boolean
                dots		    :  prop.pagination || false,     // Boolean
                callbacks       :  true,                		 // Boolean
                autoplay        :  prop.autoPlay || false, 		 // Boolean / Integer 
                loop            :  prop.loop || false,       	 // Boolean
                mouseDrag       :  false,               		 // Boolean
                nav   		   	:  prop.navigation || false,     // Boolean
                navText  		:  false, 						 // Boolean
                addClassActive  :  true,						 // Boolean
				itemsDesktop	:  false,						 // Boolean
				navRewind 		:  false,						 // Boolean
				startPosition	:  $owl.data('currentIndex') || 0, // Integer
				centerClass 	:  'active-element',
				center 			:  prop.center, 				 // Boolean
				transitionStyle	:  true,
				responsiveClass  : true,
				rewindNav		: true,
				responsive 		:{
					0:{
						items : prop.mobileVisible || 1
					},
					768:{
						items : prop.tabletVisible || 4
					},
					980:{
						items : prop.itemVisible
					}
				},
				onInitialize       :  self.sliderInitialize,
                onChange      :  self.sliderTranslate,	 
                //afterMove       :  self.sliderTranslate
            })
            $owlActiveSlider = $owl.data('owlCarousel');
        },
        sliderInitialize : function(event){
        	console.log(event)
        },
        sliderTranslate : function(e){
        	var self = videoCollections
        	 if (e.property.name != 'position') return
			  this.next = e.relatedTarget.normalize(e.property.value, true) > e.item.index
			  if (this.next) {
			  	console.log("next");
			  	var slideCount = e.currentTarget.dataset.slideCount;
			  	var categoryTitle = e.currentTarget.dataset.title;
			  	var curObj = HWMAT.groupVideoCategory[categoryTitle];
			  	var curObjVideos = curObj && curObj[0].Videos.slice(8,10);
			  	self.templateBind(e.currentTarget,curObjVideos,true);
			   // this might be your 'next' before
			  } else {
			  	console.log("prev")
			    // this might be your 'prev' before
			  }
        },
        templateBind : function(elemSelector,res,isLoadOnlyThumb){
			var self = this,
				divElem = isLoadOnlyThumb ? elemSelector : document.getElementById("hwn-container"),
				templateId =   _.template(document.getElementById("video-thumbnail-container").innerHTML.trim()),
            	templateCollection = templateId({ 
            		'items' : res ,
            		'loadOnlyThumb':isLoadOnlyThumb || false
            	});

            if(isLoadOnlyThumb){
            	$(elemSelector).trigger('add.owl.carousel', [templateCollection]).trigger('refresh.owl.carousel');
            } else{
            	$(templateCollection).appendTo(divElem);
            	self.applyCarousel('.thumbs-grid.hwn-carousal' ,self.carouselConfig('thumbCarousel'));
            }
		},
		appendCollItems : function(elem,items){
			thumbGrid = $(elem);
			thumbGrid.isotope(this.isotopeConfig());
			thumbGrid.imagesLoaded().progress( function() {
			loading_target = $(".thumb-small-image");
			  $(loading_target).removeClass('loading');
			  thumbGrid.isotope('layout');
			});
		},
		getCategoryDatas : function(obj,bool){
			var start, end, n, ret = [],self=this;
			if(typeof obj=="undefined") return;
			if(this.category_count === 'all') {
			    _.each(obj, function(m) {
			        ret.push(m);
			    });
			} 
			else {
			    if(this.page === 0) {
                    start = 0;
                    end = this.category_count - 1;
                } else {
                	if(bool){
                		if(this.category_count<0) this.category_count = this.filPage || 0;
                		this.filPage = start = (obj.length<this.category_count) ? this.filPage+obj.length : this.category_count+1;
                	}
                	else{
                    	start = (this.category_count) + ((this.page - 1) * this.paged_count);
                	}
                    end = start + this.paged_count - 1;
                }
                if(end >= this.count() - 1) {
                    end = this.count() - 1;
                }
			    if(start>= this.count()) { // start has extended past the length... find not loaded
			        n = this.paged_count;
			       $(".thumbnail-coll-wrapper").addClass('success');
			       dataLoaded = true;
			    } else {
			    	// if(start==0 && end==0) return
			    	if(bool){
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
			    	} else{
				        for(var i=start, m; i < end + 1; i++) {
				            m = obj[i];
				            if(!_.isUndefined(m)) {
			                        ret.push(m);
				                }
				            }
				        }
				        dataLoaded = false;
			        }
			    }
			    // alert("start:"+start+" End:"+end+" initialCount:" + this.category_count);
			    if(!ret.length){
			    	$(".thumbnail-coll-wrapper").addClass('success');
			    	//this.category_count = ret.length-1;
			       	this.filterLoaded = dataLoaded = true;
			    	return;	
			    } 
			   if(bool){
				    if(ret.length<=this.category_count && bool){
				    	 this.category_count= end;
				    	 if(this.page==0) this.page++;
				    } else{
				    	this.category_count =this.category_count + ((this.page ) * this.paged_count);
				    	this.page++
				    }
			   }
			   else{
			    	this.category_count = this.initial;
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
			this.initial_thumb_count = $("#"+el).data('initialThumbCount');
			this.initial_thumb_count = this.initial_thumb_count || this.initial || 0;
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
        		obj = filterActive ? this.filteredDatas : ((yearFilter) ? this.filterYear : this.carMapedDatas);
			if(window.innerHeight > curVal.getBoundingClientRect().bottom){
				var bool = (filterActive) ? true :0;
				if(!this.filterLoaded) self.getCategoryDatas(obj,bool);
			}
		},
		videoAPICall : function(){
			var self = this;
			var arr = [];
			HWMAT.videoCategories = [];
			var apiConfigs = self.apiConfig();
			$.getJSON( "/" + localeName + apiConfigs.name, function( data ) {
				if(!data){
					console.log("Video API's not connected");
					return;
				}
				var parseDatas = JSON.parse(data);
				var mergedTitleObj = arr.concat(parseDatas.VideoDisplayMainCategories , parseDatas.VideoDisplaySubCategories);
				HWMAT.groupVideoCategory = HWMAT.layout.groupUniqueObj(parseDatas.VideoCategories,'CategorySEOName');
				mergedTitleObj.filter(function (el) {
					HWMAT.videoCategories.push(HWMAT.groupVideoCategory[el.CategorySEOName] && HWMAT.groupVideoCategory[el.CategorySEOName][0]);
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
})(this,jQuery, HWMAT && HWMAT.layout)