/*
File Name : Car profile.JS
Purpose : promoting the cars
FrameWork Used : underscoreJS, OwlCarouselJS
*/
var miniObject,miniObjectAttr
(function(global,$,cookie,apiconfig){
	var isLoaded = false,
		wishlistAPIDone = false,
		userObjData = false,
		isMobile = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) && screen.width < 768,
		gridColWrap = isMobile ? 2 : 10,
		deprecatedYearStart = 2011,
		deprecatedYearEnd = 2015,
		carsItemsCnt = gridColWrap,
		carlsItemPaged = 10,
		collDeepLink = userSync = bannerUpdated = userRecipient = false,
		activeClass = "active",
		activeYear = document.getElementById("car-active-year") ? document.getElementById("car-active-year").value : "",
		activeYearLen = activeYear ? activeYear.split(',').length : 0,
		miniCollAPIName = 'MiniCollections',
		HWLayout = HWMAT.layout || {},

		profile = {

		templateConfig : function(configName){			
			var configObj;
			switch(configName){
				case 'mycollection':
					configObj={"templateId":"mycollection-template-container","targetId":"mycollection-coll-container"}
					break;
				case 'mywishlist' :
					configObj={"templateId":"mywishlist-template-container","targetId":"mywishlist-coll-container"}
					break;
				case 'mytracks' : 
					configObj={"templateId":"mytracks-template-container","targetId":"mytracks-coll-container"}
					break;
				case 'imagecontainer' : 
					configObj={"templateId":"image-template-container","targetId":"mini-carousel-sections"}
					break;
				case 'oldYearDatas' :
					configObj={"templateId":"myCollectionoldYear-template-container","targetId":"mycollection-coll-container"}
					break;
				case 'rewardmini' :
					configObj={"templateId":"myreward-minis-template-container","targetId":"myreward-minis-coll-container"}
					break;
				case 'myrewards' : 
					configObj={"templateId":"myreward-template-container","targetId":"myrewards-container-list"}
					break;
			}
			return configObj;
		},
		carouselConfig : function(configName){
			var configObj;
			switch(configName){
				case 'myMiniCollection':
					  configObj={'itemVisible':1,'mobileVisible' : 1,'tabletVisible':1,'autoPlay':false,'pagination':true,'navigation':true,'loop':false,'mode':'vertical','navClick' : true}
					  break;
			}
			return configObj;
		},// Template con
	    bindingConfig : function(){					
			var obj= [{
				'elem' : '.custom-nav .custom-next',
				'func' : 'appendCarItems',
			},{
				'elem' : '.custom-nav .custom-prev',
				'func' : 'prevCarItems',
			},{
				'elem' : '.filter-containers>li',
				'func' : 'filterIn'
			},{
				'elem' : '#mycollection-filter-container .filter-dropdown-section>a',
				'func' : 'yearValidation'
			},{
				'elem' : '#mobile-filer-section',
				'func' : 'yearMobileAccordion'
			},{
				'elem' : '#page-catalog .js-wishlist .sprite-delete',
				'func' : 'deleteWishlist -- '
			},{
				'elem' : '.rewards-accordion',
				'func' : 'accordionData'
			}]
			return obj;
		},// Grid Configuration
	    props : function(obj,bool){
	         return obj = _.map(obj, function(element,indx) { 
	            return _.extend(element, {active: false,index:indx,thumbCnt:carsItemsCnt});
	        });
	    },
	    getMaximumHeight : function(elem){
	    	return maxHeight = Math.max.apply(null, $(elem).map(function (){
			    return $(this).height();
			}).get());
	    },
	    templateParsing : function(obj){
	    	var self=this,renderedDom,index,foundedElem,maxHeight;
	    	for (var i = 0; i <obj.length; i++) {
	    		renderedDom = HWLayout.templateBind(this.templateConfig('mycollection'),obj[i]);
	    		index = $(renderedDom).data('index');
	    		foundedElem = $($('.mini-carousel-section')[index]);
	    		HWLayout.wrapElement(foundedElem.find('li'),'thumb-dynm-wrapper',gridColWrap);
		    	this.carouselIndexArr[index] = HWLayout.renderCarousel(foundedElem,self.carouselConfig('myMiniCollection'));
			    foundedElem.addClass('active')
	    	}
	    	 $('#mycollection-coll-container .mini-carousel-section').imagesLoaded(function() {
	            setTimeout(function(){
			    	maxHeight = self.getMaximumHeight("#mycollection-coll-container>li .mini-carousel-container") || 0;
			    	$('#mycollection-coll-container .mini-carousel-section').css('height',maxHeight)
	            },100)
	        })
	    },
	    
		filterObjects : function(obj,uniqueId,keyName){
	        var arr=[];
	        for(var i=0;i<obj.length;i++){
	            for(var j=0;j<uniqueId.length;j++){
	                if(uniqueId[j].Id == obj[i][keyName]){
	                	arr[j] = typeof arr[j]=="undefined" ? [obj[i]] : $.merge(arr[j],[obj[i]]);
	                	arr[j].models = arr[j].models || uniqueId[j];
	                }
	            }
	        }
	        return arr;
	    },
	    filterDynamicObjects : function(obj,uniqueId,keyName){
	        var arr=[];
	        for(i=0;i<obj.length;i++){
	            for(j=0;j<uniqueId.length;j++){
	                if(uniqueId[j] == obj[i][keyName]){
	                    arr.push(obj[i])
	                }
	            }
	        }
	        return arr;
	    },
		filterMiniObjects : function(obj,uniqueId,obj3,obj4,keyName){
	        var arr=[];
	        for(var i=0;i<obj.length;i++){
	            for(var j=0;j<uniqueId.length;j++){
	                if(uniqueId[j].Id == obj[i][keyName]){
                		if(obj3.indexOf(obj[i]['ToyNumber'])!=-1)  obj[i].status = "active";	
	                	arr[j] = typeof arr[j]=="undefined" ? [obj[i]] : $.merge(arr[j],[obj[i]]);
	                	arr[j].models = arr[j].models || uniqueId[j];
	                	arr[j].models.userCount = obj4[uniqueId[j].Id]!=undefined ? obj4[uniqueId[j].Id].length : 0;
	                	arr[j].models.totalCount = arr[j].length;
	                }
	            }
	        }
	        return arr;
	    },
	    filterIn : function(elem){
	    	var $curElem = $(elem),
	    		isActive = $curElem.hasClass(activeClass),
	    		filterName = $curElem.data('filterName'),
	    		targetElem = $("."+filterName+"-wrapper"); 
	    	
	    	if(!isActive){
	    		if(filterName=="myrewards"){
		    		 if(typeof this.userObject!="undefined"){
		    		 	if(!userObjData){
			    			this.rewardBadgeRender(this.userObject);
			    			this.rewardsloaded = true;
		    		 	} else{
		    		 		userObjData = true;	
		    		 	}
		    		} else if(!userObjData && !HWLayout.ssoId){
		    			this.rewardBadgeRender(this.userObject || '');
		    			userObjData = true;	
		    		}
		    	} else if(filterName=="mywishlist" && !this.wishlistloaded){
		    		this.wishlistRender(this.userObject);
		    		this.wishlistloaded = true;
		    	} else if(filterName=="mytracks" && !this.tracksloaded){
		    		this.tracksRender();
		    		this.tracksloaded = true;
		    	}
	    		HWLayout.addClass('.filter-containers>li',$curElem)
	    		if(!targetElem.length) return;
	    		HWLayout.addClass('.thumbnail-coll-wrapper>div',targetElem);
	    		HWLayout.trackingFunction('profile','view',filterName,"profile",'');
	    	}
	    },
	    yearMobileAccordion : function(elem){
	    	var $curElem = $(elem),
	    		$parentElem = $curElem.closest('.filter-content-wrapper');

	    	if($parentElem.length){
	    		$parentElem.toggleClass(activeClass);
	    	}
	    },
	    collectionFilter : function(carObj,masterObj,yearVal){
	    	if(typeof carObj=="undefined" || typeof masterObj == "undefined") return;
	    	this.carMappedData = HWLayout.uniqueVal(carObj,this.myCollName);
			this.filterUnique = HWLayout.uniqueObject(masterObj[miniCollAPIName],'Id');
			miniObjectAttr = HWLayout.filterObjects(this.filterUnique,this.carMappedData,this.myCollName)
			this.userSyncCollection('','',carObj,yearVal);
	    },
	    wishlistNumberUpdate : function(){
	    	$.each($(".wishlist__item .wishlist__number"), function(idx, item){
	            $(this).html( idx + 1 + '');
	        });
	    },
	    wishlistBindings : function(){
			$('.js-wishlist .wishlist__delete').off().on('click',function(e){
				HWMAT.profile.deleteWishlist(this,e)
			})
		},
		productObjMapping : function(obj){
			var self = this,
				jsonObj=[];
			_.each(obj,function(item,index){
				var data = {};
				data['productName']		= item.productName;
				data['productId'] 		= item.ProductId;
				data['modelNumber'] 	= item.ModelNumber;
		        data['seoCategory'] 	= item.SEOCategory;
		        data['category'] 		= item.Category;
		        data['imageThumbnailUrl'] = item.ImageThumbnailUrl;
		        data['msrp'] 			= item.MSRP;
		        data['availableFlag'] 	= item.AvailableFlag;
		        data['gsiFeedPID'] 		= item.GSIFeedPID;
		        data['skuId'] 			= item.SKUId;

		        jsonObj.push(data);
			})
			return jsonObj;
		},
		guidWishlistRender : function(){
			var self = this,
				productObj,carObject;
			this.wishlistService = {
	            name : "wishlistService",
	            domain : function(){return apiconfig.apiDomainConfig(this.name)}
	        };
	        apiconfig.guiId = HWLayout.getQueryParameterByName('productsGuid');
	        HWLayout.ajaxDataFormat(self.wishlistService.domain(),apiconfig.apiMethodConfig(self.wishlistService.name,'getEmailWishlist'),function(res){
	        	productObj = !_.isEmpty(res.ProductList) ? self.wishlistProps(self.productObjMapping(res.ProductList),'pcwishlist') : [];
	        	carObject  = !_.isEmpty(res.CarList) ? self.wishlistProps(res.CarList,'carwishlist') : [];
				self.wishlistMapObj = $.merge(productObj,carObject);
				self.profileDataUpdate('mywishlist',self.wishlistMapObj)
	        })
	        userRecipient = true;
		},
	    wishlistRender :  function(obj){
	    	if(!userRecipient && HWLayout.getQueryParameterByName('productsGuid') != null) this.guidWishlistRender();
	    	if(userRecipient) return;
	    	var carStorage =  this.carDatas || HWLayout.getObjectStorage('carList')!=null ? HWLayout.compareStorageDate(HWLayout.getObjectStorage('carList'),'carList') : 0,
	    		self = this,
	    		obj = obj || '';
	    	if(!carStorage){
	    		HWLayout.ajaxDataFormat(this.catalogService.domain,apiconfig.apiMethodConfig(this.catalogService.name,'getCarList'),function(res){
	    			if(res==false || carStorage) return;
	    			self.wishlistRenderObj(res,obj)
	    		})
	    	} else{
	    		self.wishlistRenderObj(carStorage,obj)
	    	}
	    },
	    wishlistRenderObj : function(carStorage,obj){
	    	var carcookiedatas = HWMAT.cookie.get('carWishlist',true),
	    		isCookieEnabled = carcookiedatas!=undefined && carcookiedatas.length>0 && carStorage ? true :  false,
	    		mergedArr,arr=[];
	    	this.userWishlistObj = this.userWishlistObj || (obj ? obj['wishlist'] : '');
	    	if(!wishlistAPIDone) return;
   			this.userWishlitCode = HWLayout.uniqueVal(this.userWishlistObj,'code');
   			if(isCookieEnabled){
   				idsString = _.isArray(carcookiedatas) ?  carcookiedatas.join(',') : carcookiedatas;
    			if( carcookiedatas !== undefined && carcookiedatas !== null){
    				mergedArr = _.union(carcookiedatas, this.userWishlitCode)
    				for(var i=0;i<carStorage.length;i++){
    					for(var j=0;j<mergedArr.length;j++){
    						if(carStorage[i].ToyNumber==mergedArr[j]){
    							arr.push(carStorage[i]);
    						}
    					}
    				}
    				this.userWishlistObj = this.wishlistProps(arr,'carwishlist');
    			}
   			}
		   		if(!_.isEmpty(this.userWishlistObj)){
		   			if((HWLayout.productWishlist==undefined || HWLayout.productWishlist==false || HWLayout.productWishlist==null)){
		   				this.userWishlistObj = this.wishlistProps(this.userWishlistObj,isCookieEnabled ? 'carwishlist' : 'mywishlist');
		   				this.profileDataUpdate('mywishlist',this.userWishlistObj);
		   			} else if(HWLayout.productWishlist){
				    	for(var i=0;i<this.userWishlistObj.length;i++){
						  	for(var j=0;j<HWLayout.productWishlist.length;j++){
							   if(this.userWishlistObj[i].code == HWLayout.productWishlist[j].modelNumber){
							     	this.userWishlistObj[i] = $.merge(this.userWishlistObj[i],HWLayout.productWishlist[j])
							   }
							}
						}
						this.userWishlistObj = this.wishlistProps(this.userWishlistObj,isCookieEnabled ? 'carwishlist' : 'mywishlist');
						this.wishlistAPI = this.wishlistProps(HWLayout.productWishlist,'pcwishlist');
						this.wishlistMapObj = $.merge(this.userWishlistObj,this.wishlistAPI);
						this.profileDataUpdate('mywishlist',this.wishlistMapObj)
		   			}
		   			$("#"+this.templateConfig('mywishlist').targetId).closest('.mywishlist-wrapper').removeClass('wishlist-not-found');
	   		} else if(_.isEmpty(this.userWishlistObj) && HWLayout.productWishlist!=undefined && HWLayout.productWishlist!=false){
	   			this.wishlistAPI = this.wishlistProps(HWLayout.productWishlist,'pcwishlist');
	   			this.profileDataUpdate('mywishlist',this.wishlistAPI);
	   			$("#"+this.templateConfig('mywishlist').targetId).closest('.mywishlist-wrapper').removeClass('wishlist-not-found');
	   		} else if(_.isEmpty(this.userWishlistObj) && (HWLayout.productWishlist==undefined || HWLayout.productWishlist==false)){
	   			$("#"+this.templateConfig('mywishlist').targetId).removeClass('loading');
	   			$("#"+this.templateConfig('mywishlist').targetId).closest('.mywishlist-wrapper').addClass('wishlist-not-found');
	   		}
		   	delete window.localStorage['carDetail'];
		   	this.wishlistBindings();
	    },
	    profileDataUpdate : function(sectionName,obj,propsOptnl){
	    	if(!propsOptnl) this[sectionName] = HWLayout.props(obj,true);
			HWLayout.ajaxCollection(this.templateConfig(sectionName).targetId,this[sectionName]);
			HWLayout.templateBind(this.templateConfig(sectionName),HWLayout.getCollDatas(this[sectionName]));
			$("#"+this.templateConfig(sectionName).targetId).removeClass('loading')
			this.incrementLoadingCnt(sectionName);
	    },
	    tracksRender : function(){
	    	var self= this,notFndMsg,
	    		$targetId = $("#"+this.templateConfig('mytracks').targetId);
	    	if(typeof this.getUserCollection=="undefined"){
	    		this.getUserCollection = apiconfig.apiDomainConfig('oldYearService');
	    	} 
			apiconfig.userId = HWLayout.UserLoggedInStatus(ssoCookieName,true);
			HWLayout.ajaxDataFormat(this.getUserCollection,apiconfig.apiMethodConfig(this.catalogService.name,'getUserTracks'),function(res){
				if(res.length){
					self.profileDataUpdate('mytracks',res);
				} else{
					notFndMsg = $targetId.data('notFound');
	    			$targetId.addClass('empty-data');
	    			setTimeout(function(){
	    				$targetId.removeClass('loading');
	    				$targetId.html(notFndMsg);
	    			},200)
				}
			})
	    },
	    wishlistProps : function(obj,refName){
	    	var obj = _.map(obj, function(element,indx) { 
                return _.extend({}, element, {reference : refName});
            });
            return obj;
	    },
	   	userSyncCollection : function(obj,groupObj,carYearObj,year){ 
	   		var self = this;
	   		if(typeof this.carDatas=="undefined" || typeof this.filterDatas=="undefined" || typeof miniObjectAttr =="undefined"){
	   			this.userObj = this.userObj || obj;
	   			this.userObjList = this.userObjList || groupObj;
	   			return;
	   		}
	   		if(groupObj=='' && obj == '' && HWLayout.ssoId){
	   			this.carYearObject = carYearObj;
	   			this.selectedYear = year;
	   		} else{
	   			this.userObj = this.userObj || obj;
	   			this.userObjList = this.userObjList || groupObj;
	   		}
	   		if(!_.isEmpty(HWLayout.collService.userDatas) || (HWLayout.collService.userDatas && HWLayout.collService.userDatas.length==0) || HWLayout.collService.userDatas==false){
	   			if(typeof this.mycollection[this.selectedYear]=="undefined"){
		   			var $targetId = $("#"+this.templateConfig('mycollection').targetId),
		   				finalObject =this.userObjList || groupObj,
		   				mapObj,
		   				userCollectedCars,
		   				haveItObj = this.haveItIds(finalObject);
		   			
		   			this.userObj = this.userObj || obj;
		   			userCollectedCars = HWLayout.uniqueVal(this.haveItIds(finalObject,true),'toyId');
			   		this.mycollection[this.selectedYear] = this.props(this.filterMiniObjects(this.carYearObject || this.carDatas,miniObjectAttr,userCollectedCars,haveItObj,'MiniCollectionId'),true);
			   		HWLayout.generatePids(function(res){
						HWLayout.productWishlist = res;
						wishlistAPIDone = true;
						self.wishlistRender('');
					});
			   		// wishlistBind()
	   			} 
				this.parsingObjToDom(this.mycollection[this.selectedYear || year],'','mycollection');
				HWLayout.ajaxCollection(this.templateConfig('mycollection').targetId,this.mycollection[year])
				HWLayout.imageLoaded($targetId,'loading',100);
				userSync = true;
	   		}  else if(!HWLayout.ssoId){
	   				var activeYearArr = activeYear.split(',');
	   				if(typeof this.mycollection[year]=="undefined"){
	   					if(this.mycollection[activeYearArr[0]]!=undefined || this.mycollection[activeYearArr[1]]!=undefined){
	   						this.mycollection[year] = this.props(this.filterMiniObjects(carYearObj || this.carDatas,miniObjectAttr,'','','MiniCollectionId'),true);
	   					} else{
		   					this.mycollection[year] = this.props(this.filterMiniObjects(carYearObj || this.carDatas,miniObjectAttr,'','','MiniCollectionId'),true);
		   					HWLayout.generatePids(function(res){
								HWLayout.productWishlist = res;
								wishlistAPIDone = true;
								self.wishlistRender('');
								if(HWMAT.layout.ssoId==false){
									self.urlHashImplementation();
									// self.wishlistRender('');
								}
							});
	   					}
	   				}
				this.parsingObjToDom(this.mycollection[year],'','mycollection');
				HWLayout.ajaxCollection(this.templateConfig('mycollection').targetId,this.mycollection[year])
				HWLayout.imageLoaded($targetId,'loading',100);
				userSync = true;
	   		}
	   	},
	    parsingObjToDom : function(obj,bool,tabName){
	    	switch(tabName){
	    		case 'mycollection' :
						if(!bool){
							// this.profileDataUpdate('mycollection','',true);
							HWLayout.ajaxCollection(this.templateConfig('mycollection').targetId,obj)
						 	this.templateParsing(HWLayout.getCollDatas(obj));
						 	this.incrementLoadingCnt('mycollection')
						 } else{
						 	HWLayout.ajaxCollection(this.templateConfig('mycollection').targetId,obj)
							HWLayout.templateBind(this.templateConfig('oldYearDatas'),HWLayout.getCollDatas(obj))
							this.incrementLoadingCnt('mycollection')
						 }
						break;
				case 'myreward' :
						this.profileDataUpdate('myreward','',true);
						// HWLayout.ajaxCollection(this.templateConfig('myreward').targetId,this['myreward'])
						// HWLayout.templateBind(this.templateConfig('myreward'),HWLayout.getCollDatas(this['myreward']))
						// this.incrementLoadingCnt('myreward')
						break;
				case 'mywishlist' :
						this.profileDataUpdate('mywishlist','',true);
						this.wishlistNumberUpdate();
						this.wishlistBindings();
						// HWLayout.ajaxCollection(this.templateConfig('mywishlist').targetId,this['mywishlist'])
						// HWLayout.templateBind(this.templateConfig('mywishlist'),HWLayout.getCollDatas(this['mywishlist']))
						// this.incrementLoadingCnt('mywishlist')
						break;
				case 'mytracks' : 
						this.profileDataUpdate('mytracks','',true);
						// HWLayout.ajaxCollection(this.templateConfig('mytracks').targetId,this['mytracks'])
						// HWLayout.templateBind(this.templateConfig('mytracks'),HWLayout.getCollDatas(this['mytracks']))
						// this.incrementLoadingCnt('mytracks')
						break;
	    	}

	    	// if(!optnBool){
	    	// } else{
	    	// 	HWLayout.templateBind(this.templateConfig('oldYearDatas'),HWLayout.getCollDatas(obj))
	    	// }
	    },
	    appendCarItems : function(elem){
	    	var $curElem = $(elem),
	    		indx = $curElem.closest('.custom-nav').data('index'),
	    		indxElem = $(this.carouselIndexArr[indx]),
	    		yearId = $("#"+this.templateConfig('mycollection').targetId).attr('data-active-year'),
	    		isDisabled = indxElem.find('.owl-next').hasClass('disabled'),
	    		renderedDom,obj;

	    	if(isDisabled) {
		    	obj = this.objectTruncate(this.mycollection[yearId][indx])
		    	if(!obj.length) $curElem.addClass('disabled');
		    	if($curElem.hasClass('disabled')){
		    		$curElem.prev('.custom-prev').removeClass('disabled');
		    		return;
		    	} 
		    	renderedDom = HWLayout.templateBind(this.templateConfig('imagecontainer'),obj,true);
		    	HWLayout.wrapElement($(renderedDom),'thumb-dynm-wrapper',gridColWrap);
		    	this.carouselIndexArr[indx].trigger('add.owl.carousel',[renderedDom]).trigger('refresh.owl.carousel').trigger('next.owl.carousel')
	    	} else{
	    		this.carouselIndexArr[indx].trigger('next.owl.carousel')
	    	}
	    	$curElem.prev('.custom-prev').removeClass('disabled')
	    	if(this.carouselIndexArr[indx].find('.grid-two-col').length>=this.mycollection[yearId][indx].length) $curElem.addClass('disabled');
	    },
	    prevCarItems : function(elem){
	    	var $curElem = $(elem),
	    		indx = $curElem.closest('.custom-nav').data('index'),
	    		indxElem = $(this.carouselIndexArr[indx]),
	    		isDisabled = indxElem.find('.owl-prev').hasClass('disabled');
	    	this.carouselIndexArr[indx].trigger('prev.owl.carousel');
	    	if(indxElem.find('.owl-prev').hasClass('disabled')){
	    		$curElem.addClass('disabled');
	    	} else{
	    		$curElem.removeClass('disabled');
	    	}
	    	$curElem.next('.custom-next').removeClass('disabled');

	    },
	    objectTruncate : function(obj){
	    	var filterObj = obj.slice(obj.thumbCnt,obj.thumbCnt+carlsItemPaged);
	    	obj.thumbCnt = obj.thumbCnt+carlsItemPaged;
	    	return filterObj;
	    },
	    loadMore : function(curVal){
        	var self =this,
        		yearId = $("#"+this.templateConfig('mycollection').targetId).attr('data-active-year'),
        		isActive = $(".mycollection-wrapper").hasClass(activeClass),
        		activeElem = $(".thumbnail-coll-wrapper>div.active").data('tabName'),
        		obj = yearId>deprecatedYearEnd ? this.mycollection[yearId] : this.carList[yearId],
        		isOldYear = yearId<=deprecatedYearEnd ? true : false;
			if(window.innerHeight > curVal.getBoundingClientRect().bottom && typeof self[activeElem]!="undefined" && collDeepLink){
				this.parsingObjToDom(obj,isOldYear,activeElem);
			}
		},
		filteringOldYearDatas : function(oldObj){
			for(var i=deprecatedYearStart;i<=deprecatedYearEnd;i++){
				for(var j=0;j<oldObj.length;j++){
					if(oldObj[j].year == i){
						this.carList[i] = typeof this.carList[i] =="undefined" ?  [oldObj[j]] : $.merge(this.carList[i],[oldObj[j]])
					}
				}
			}
		},
		yearValidation : function(elem,optnl,evt){
	    	evt.preventDefault();
	    	var $curElem = $(elem).closest(".filter-dropdown-section"),
	    		$closestElem =$curElem.closest(".filter-content-wrapper"),
	    		arr = [],
	    		yearVal = parseInt($curElem.data('id')),
	    		isActive = $curElem.hasClass(activeClass);

	    	if(!isActive){
	    		if(isMobile && $closestElem.length){
	    			$(".filtered-active-val").html(yearVal);
	    			$closestElem.removeClass(activeClass);
	    		} 
	    		this.lazyLoadReset();
	    		$("#"+this.templateConfig('mycollection').targetId).html('').removeClass();
	    		HWLayout.addClass('#mycollection-filter-container>li',$curElem);
	    		this.chooseYearObj(yearVal);
	    		HWLayout.trackingFunction('profile','view',yearVal,"profile",'');

	    	}
	    },
	    lazyLoadReset : function(){
    		this.carouselIndexArr = this.carouselIndexArr || [];
			HWLayout.page = 0;
	    },
	    chooseYearObj : function(year){
    		this.incrementLoadingCnt('mycollection',true)
			var $targetId = $("#"+this.templateConfig('mycollection').targetId),obj,notFndMsg;
    		$targetId.removeClass('empty-data');
    		if(year>deprecatedYearEnd){
				collDeepLink = true;
				$targetId.addClass('year-recent loading').attr('data-active-year',year)
				this.collectionFilter(this.carYearDatas[year],this.filterDatas,year);
				HWLayout.imageLoaded($targetId,'loading',100);
    		} else{
    			if(this.carOldData && typeof this.carList[year]=="object") {
	    			collDeepLink = true;
	    			// $targetId = $("#"+this.templateConfig('mycollection').targetId);
	    			$targetId.addClass('year-old loading');
	    			HWLayout.ajaxCollection(this.templateConfig('mycollection').targetId,this.carList[year])
	    			obj = HWLayout.getCollDatas(this.carList[year]);
	    			this.incrementLoadingCnt('mycollection');
	    			HWLayout.templateBind(this.templateConfig('oldYearDatas'),obj);
	    			$targetId.addClass('year-recent loading').attr('data-active-year',year);
	    			HWLayout.imageLoaded($targetId,'loading',100);
	    		}
	    		else if(this.carOldData==undefined || typeof this.carList[year]=="undefined"){
	    			notFndMsg = $targetId.data('notFound');
	    			$targetId.addClass('empty-data');
	    			$targetId.addClass('year-recent loading').attr('data-active-year',year);
	    			setTimeout(function(){
	    				$targetId.removeClass('loading');
	    				$targetId.html(notFndMsg);
	    			},500)
	    		}
	    	}
	    },
	    incrementLoadingCnt : function(tabName,reset){
	    	if(reset){
	    	 	$("#"+this.templateConfig(tabName).targetId).attr('data-loaded-cnt',0);
	    	 	return;
	    	 }
	    	var attrCnt = parseInt($("#"+this.templateConfig(tabName).targetId).attr('data-loaded-cnt'));
	    	attrCnt++
	    	$("#"+this.templateConfig(tabName).targetId).attr('data-loaded-cnt',attrCnt);
	    },
	    haveItIds : function(totObj,bool){
	   		// if(this.filterMiniIds) return this.filterMiniIds;
	    	var userStartedCar = totObj && totObj['unverified'] ? totObj['unverified'] : [],
	    		userunlockCar = totObj && totObj['verified'] ? totObj['verified'] : [],
	    		arr = [];
	    	if(bool) return arr.concat(userStartedCar,userunlockCar);
	    	this.filterMiniIds = HWLayout.groupUniqueObj(arr.concat(userStartedCar,userunlockCar),'miniId');
	    	return this.filterMiniIds;
	    },
	    minicollectionRewards : function(obj){
	    	var haveitObj = Object.keys(this.haveItIds(obj)),
	    		miniAttr = this.filterDatas['MiniCollections'],
	    		userStartedIds;

	    	if(typeof miniAttr=="undefined") return;
	    	if(!haveitObj.length){
		    	for(var i=0;i<miniAttr.length;i++){
		    		HWLayout.templateBind(this.templateConfig('rewardmini'),miniAttr[i]);
		    	}
	    	}
	    	else if(haveitObj.length){
	    		for(var i=0;i<miniAttr.length;i++){
	    			miniAttr[i].active = false;
	    			if(haveitObj.indexOf(miniAttr[i]['Id'].toString())!=-1){
	    				miniAttr[i].active = true;
	    			}
	    			HWLayout.templateBind(this.templateConfig('rewardmini'),miniAttr[i]);
		    	}
	    	}
	    	this.rewardsAccordion();
	    },
	    getRewardApi : function(objName,methodname,cb){
	    	var self = this;
	    	if(HWLayout[objName]){
	    		if(typeof cb=="function") cb(HWLayout[objName]);
	    	}
	    	else{
	    		HWLayout.rewardObj = {
		            name : "rewardDatas",
		            domain : function(){
		                return apiconfig.apiDomainConfig(this.name)
		            }
		        }
	    		HWLayout.ajaxDataFormat(HWLayout.rewardObj.domain(),apiconfig.apiMethodConfig(HWLayout.rewardObj.name,methodname),function(res){
	            	self[objName] = res;
	            	if(typeof cb=="function") cb(res);
	            })
	    	}
	    	
	    },
	    rewardBadgeRender :  function(obj){
	    	var rewardsObjName = HWLayout.rewardService,rewardsBothObj,
	    		self = this,
	    		userRewardLength;
	    	
	    	this.getRewardApi('carRewardObj','getCarRewards',function(response){
		    	HWLayout.templateBind(self.templateConfig('myrewards'),response);
		    	if(typeof rewardsObjName!="undefined" && rewardsObjName.oathEnabled){
		    		if(!_.isEmpty(rewardsObjName.userDetails)){
		    			rewardsBothObj = HWLayout.groupUniqueObj(HWLayout.removeUndefinedArr(rewardsObjName.userDetails.badges),'category');
		    			// userRewardLength = rewardsObjName.userDetails.badges.length;
		    		}
		    	}
		    	self.rewardsCollected(obj,rewardsBothObj || 0);
	    	})
	    },
	    rewardsCollected : function(totObj,allrewardsObj){
	    	// if(rewardLength==null || rewardLength==undefined) return;
	    	var carRewardsObj = allrewardsObj['Cars collected'],
	    		carRewardsLength = carRewardsObj!=undefined || carRewardsObj!=null ? HWLayout.uniqueVal(carRewardsObj,'badgeId').length : 0,
	    		$elem = $(".rewards-verified-content li"),
	    		i=0;

	    	for(var i=0;i<$elem.length;i++){
	    		if(carRewardsLength){
	    			$($elem[i]).addClass(activeClass);
	    			carRewardsLength--;
	    		}
	    	}
	    	this.rewardsMiniCollections(totObj,allrewardsObj);
			userObjData = true;
	    },
	    rewardsMiniCollections :  function(totRewardsObj,allrewardsObj){
	    	var self = this,
	    		miniRewardsObj,miniRewardsIds;
	    	this.getRewardApi('miniRewardObj','getMiniRewards',function(response){
	    		HWLayout.templateBind(self.templateConfig('rewardmini'),response);
	    		miniRewardsObj = allrewardsObj['Collection started'];
	    		miniRewardsIds = HWLayout.rewardUniqueVal(miniRewardsObj,'collectionKey','badgeId');
	    		// miniRewardsLength = miniRewardsObj!=undefined || miniRewardsObj!=null ? miniRewardsObj.length : 0;
	    		for(var i=0;i<response.length;i++){
	    			if(miniRewardsIds.indexOf(response[i]['collectionKey'])!=-1){
	    				$("#"+self.templateConfig('rewardmini').targetId).find('li:eq('+i+')').addClass(activeClass);
	    				// response[i]
	    			}
	    		}
	    	})
	    	this.rewardsAccordion();
	    },
	    rewardsAccordion : function(){
	    	var $btnClsName = $(".rewards-accordion"),
	    		lessText = $btnClsName.data('less'),
	    		moreText = $btnClsName.data('more'),
	    		visibleCnt,$parentElem;
	    	for(var i=0;i<$btnClsName.length;i++){
	    		visibleCnt = $($btnClsName[i]).data('initialCount');
	    		$parentElem = $($btnClsName[i]).closest('.rewards-container');
	    		if(visibleCnt=="all"){
	    			$parentElem.find('li').addClass('visible');
	    			$($btnClsName[i]).html(lessText)
	    		} else{
	    			$($parentElem).find("li:lt("+visibleCnt+")").addClass('visible');
	    			 $($btnClsName[i]).html(moreText)
	    		}
	    	}
	    },
	    accordionData : function(elem){
	    	var $curElem = $(elem),
	    		initialCnt = $curElem.data('initialCount'),
	    		pagedCnt = $curElem.data('paged'),
	    		lessText = $curElem.data('less'),
	    		moreText = $curElem.data('more'),
	    		className = 'visible',
	    		$targetElem = $curElem.closest('.rewards-container'),$targetList,mergedCount,currentCnt;

	    	if($curElem.hasClass('rewards-more')){
    			currentCnt = parseInt(typeof $curElem.attr('data-current-cnt') =="undefined" ? initialCnt : $curElem.attr('data-current-cnt')); 
		    	if(pagedCnt=="all"){
		    		$targetList = $targetElem.find('li');
		    		$targetList.addClass('visible');
		    		$curElem.html(lessText).removeClass('rewards-more').addClass('rewards-less');
		    		return;
		    	} else{
		    		mergedCount = currentCnt+pagedCnt;
		    		$targetList = $targetElem.find("li:lt("+mergedCount+")");
		    		$curElem.attr('data-current-cnt',mergedCount);
		    	}
	    		$targetList.addClass('visible');
	    		if($targetElem.find('li').length<=mergedCount){
	    			$curElem.html(lessText).removeClass('rewards-more').addClass('rewards-less');
	    			$curElem.removeAttr('data-current-cnt')
	    		} else{
	    			$curElem.html(moreText)
	    		}
	    	} else if($curElem.hasClass('rewards-less')){
	    		$targetElem.find("li").removeClass('visible');
	    		$targetElem.find("li:lt("+initialCnt+")").addClass('visible');
	    		$curElem.html(moreText).removeClass('rewards-less').addClass('rewards-more')
	    	}

	    },
	    userCollectionsData : function(obj,groupObj){
	    	if(typeof obj=="boolean") return;
	    	var statusList;
	    	statusList = HWLayout.groupUniqueObj(obj,'status');
	    	this.userObject = statusList;
	    	this.urlHashImplementation();
	    	if((typeof this.carOldData!="undefined" && this.carOldData!=false) || (!bannerUpdated && typeof this.userObject!="undefined")){
	    		bannerUpdated = true;
	    		if(statusList.verified){
	    			statusList.verified.length+=(typeof this.carOldData!="undefined") ? this.carOldData.length:0;
	    		} else{
	    			statusList.verified = (typeof this.carOldData!="undefined") ? this.carOldData.length : 0;
	    		}
	    		this.bannerStatusUpdate(statusList);
	    		if(userObjData) this.rewardBadgeRender(statusList,groupObj);
	    	}
	    	this.newObjGroup = groupObj;
	    	this.userSyncCollection(obj,this.newObjGroup);
	    	
	    },
	    deleteWishlist : function(elem,optnl,evt){
	    	var $curElem = $(elem);
	    		$closestElem = $curElem.closest('.wishlist__item'),
	    		$targetElem = $closestElem.closest("#mywishlist-coll-container"),
	    		refKey = $closestElem.data('ref'),
	    		bannerwishlistElem = $('.profile-status-count[data-status-name="wishlist"]'),
	    		toyNumber = $closestElem.data('toyNumber');

	    	if(refKey=="mywishlist" || refKey=="" || refKey=="carwishlist"){
	    		apiconfig.toyId = toyNumber;
	    		cookie.cookieName="carWishlist";
	    		cookie.toggleCookie(false,toyNumber)
	    		if(HWLayout.ssoId){
	    			HWLayout.ajaxDataFormat(HWLayout.collService.domain(),apiconfig.apiMethodConfig(HWLayout.collService.name,'removeCar'),'','collService');
	    		}
	    	}
	    	if(parseInt(bannerwishlistElem.html())>0){
	    		bannerwishlistElem.html(parseInt(bannerwishlistElem.html())-1);
	    	}
	    	if($targetElem.find('li.wishlist__item').length<=1){
	    		this.profileDataUpdate('mywishlist','',true);
				this.wishlistNumberUpdate();
				this.wishlistBindings();
	    	}
	    	if(parseInt($(".shop-nav__counter .number").html())<=1) $targetElem.closest('.mywishlist-wrapper').addClass('wishlist-not-found');
	    },
	    bannerStatusUpdate : function(obj){
	    	var shopArray = cookie.get('HW_ProductValue', true),
            	carArray =  cookie.get('carWishlist', true),
            	userWishlist = typeof obj['wishlist']!="undefined" ? HWLayout.uniqueVal( obj['wishlist'],'code') : [],
            	arr=[],
            	rewardsObjName = HWLayout.rewardService,
            	userRewardData,
            	userRewardLength,
	            totCookieLen = _.union(shopArray, carArray, userWishlist).filter(Boolean).length;


	    	if(_.isEmpty(obj)) return;
	    	var statusObjCnt={
	    		'unverified' : obj['unverified'] ? obj['unverified'].length : 0,
	    		'verified' : function(){
	    			return (obj['verified'] ? (!isNaN(obj['verified']) ? obj['verified'] : obj['verified'].length) : 0)+this.unverified;
	    		},
	    		'wishlist' : function(){
	    			var cookeLen = totCookieLen,
	    				countElem = $(".nav-wishlist.shop-nav__counter .number");
	    			if(userWishlist && userWishlist.length){
		    			cookie.cookieName = "carWishlist";
						for(var i=0;i<userWishlist.length;i++){
							cookie.toggleCookie(true,userWishlist[i]);
						}
	    			}
	    			HWLayout.setWishlistCounter(true);
	    			//$(countElem).html(parseInt(countElem.html())+totCookieLen);
	    			return cookeLen;
	    		}
	    	},
	    	$bannerStatusElem = $(".profile-status-count"),
	    		filterName;
	    	for(var i=0;i<$bannerStatusElem.length;i++){
	    		filterName = $($bannerStatusElem[i]).data('statusName');
	    		if($($bannerStatusElem[i]).html()==0){
		    		if(typeof statusObjCnt[filterName]=="function"){
		    			$($bannerStatusElem[i]).html(statusObjCnt[filterName]());	
		    		} else{
		    			$($bannerStatusElem[i]).html(statusObjCnt[filterName]);
		    		}
	    		}
	    	}
	    	$(".nav-wishlist.shop-nav__counter .number").html(totCookieLen);

	    },
		carListApi : function(year){
			var self = this,
				activeTabYear = ($("#mycollection-filter-container>li.active") || $("#mycollection-filter-container>li:eq(0)")).data('id'),
				carYearObj = HWLayout.getObjectStorage('carList')!=null ? HWLayout.compareStorageDate(HWLayout.getObjectStorage('carList'),'carList') : 0,
				carYearObj = carYearObj && HWLayout.getObjectStorage('carList')['activeYear']!=undefined && (HWLayout.getObjectStorage('carList')['activeYear'] == activeYear) ? carYearObj: 0;

			this.catalogService.name = "carCatalog";
		    this.catalogService.domain = apiconfig.apiDomainConfig(this.catalogService.name);
			apiconfig.currentYear = year;
			HWLayout.ajaxDataFormat(this.catalogService.domain,apiconfig.apiMethodConfig(this.catalogService.name,'getAttributeList'),function(res){
					self.filterDatas = res;	
					if(res==false){
						self.filterDatas = HWLayout.getObjectStorage('masterAttr')!=null ? HWLayout.compareStorageDate(HWLayout.getObjectStorage('masterAttr'),'masterAttr') : 0;
					}
					if(carYearObj){
						self.carDatas = carYearObj;
						self.carYearDatas = HWLayout.groupUniqueObj(self.carDatas,'Year');
						self.chooseYearObj(activeTabYear);
					}
			})

			if(!carYearObj){
				HWLayout.ajaxDataFormat(this.catalogService.domain,apiconfig.apiMethodConfig(this.catalogService.name,'getCarList'),function(res){
					self.carDatas = res;
					self.carYearDatas = HWLayout.groupUniqueObj(res,'Year');
					self.chooseYearObj(activeTabYear);
					var carApiObject = {'obj':res, 'timestamp': HWLayout.storageExpiryDate(), 'activeYear' : activeYear};
					if(res!=false) HWLayout.setObjectStorage('carList',carApiObject);
				})
			} else{
				self.carDatas = carYearObj;
			}

			self.lazyLoadReset();
			this.getUserCollection = apiconfig.apiDomainConfig('oldYearService');
			apiconfig.userId = HWLayout.UserLoggedInStatus(ssoCookieName,true);
			HWLayout.ajaxDataFormat(this.getUserCollection,apiconfig.apiMethodConfig(this.catalogService.name,'getUserCollection'),function(res){
				self.carOldData= res;
				if(!bannerUpdated && typeof self.userObject!="undefined" && !_.isEmpty(self.userObject)){
					self.userObject.verified.length+=res.length
					self.bannerStatusUpdate(self.userObject);
	    			if(userObjData) self.rewardBadgeRender(self.userObject);
				}
				self.filteringOldYearDatas(self.carOldData);
			})
		},
		urlHashImplementation : function(){
			if(!window.location.hash) return false;
			var tabName = window.location.hash.substr(1).split('?')[0].toLowerCase();
			var matchedElem = $(".filter-containers>li[data-filter-name="+tabName+"]");
			if(matchedElem.length){
				this.filterIn(matchedElem)
			} else{
				this.filterIn($(".filter-containers>li:first"));
			}
		},
		init : function(){
			var self= this;
			if(typeof _!="function" || typeof $!="function" || isLoaded) return;
			this.myCollName = HWLayout.productFieldConfig(miniCollAPIName);
			this.carList = this.catalogService = this.mycollection = {};
			this.carListApi(activeYear);
			HWLayout.bindLooping(this.bindingConfig(),this);
			isLoaded = true;
		}
	}
	global.HWMAT.profile = profile;
	profile.init();
}(this, jQuery,HWMAT.cookie,HWMAT.config));


// jQuery Ready Fn

$(function(){
	HWMAT.profile.init(); // this function might fails because of previous call which trigger on page ready.

	$(window).scroll(function(){
		var tabName = $(".thumbnail-coll-wrapper>div.active").data('tabName');
		if(typeof HWMAT.profile.templateConfig(tabName)=="undefined") return
	    var parentContainer= $("#"+HWMAT.profile.templateConfig(tabName).targetId)[0];
	    HWMAT.profile.loadMore(parentContainer);
	})
	
});
